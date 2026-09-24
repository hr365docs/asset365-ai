import React from "react";
import { TooltipHost } from "@fluentui/react/lib/Tooltip";
import CryptoJS from "crypto-js";
import "./CustomPlans.css";
import { MyContext } from "../../App";
import { RequestLicense } from "./RequestLicense";
import { RequestLicenseEnterprise } from "./RequestLicenseEnterprise";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Dialog, DialogContent } from "@mui/material";

const tooltipStyles = {
  root: {
    display: "inline-block",
  },
};

const calloutProps = {
  gapSpace: 0,
};

const CustomPlans = ({ AppName }) => {
  const [openStandardpopup, setOpenStandardpopup] = React.useState(false);
  const [isFromIndia, setIsFromIndia] = React.useState(false);
  const SiteName = React.useContext(MyContext);

  React.useEffect(() => {
    // 1. Initial cached check so UI doesn't flicker
    try {
      const cachedIp = localStorage.getItem("ipInfo");
      if (cachedIp) {
        const parsed = JSON.parse(cachedIp);
        if (parsed?.country === "IN") {
          setIsFromIndia(true);
        }
      }
    } catch (e) {}

    getData();
    const currentUrl = window.location.href.toLowerCase();

    const shouldRunIpInfo =
      currentUrl.includes("sharepoint-contract-management-clm-365") ||
      currentUrl.includes("clm365") ||
      currentUrl.includes("clm") ||
      currentUrl.includes("contract-management") ||
      currentUrl.includes("contract management") ||
      currentUrl.includes("asset") ||
      currentUrl.includes("asset-management");

    if (shouldRunIpInfo) {
      getIpInfo();
    }

    let textvarcolor;
    let bgmainvarcolor;
    let bgsecondvarcolor;
    let darkbtnvarcolor;
    let btnBgColor;
    let topborder;
    if (SiteName === "HR365") {
      textvarcolor = "#1f39d4";
      bgmainvarcolor = "";
      bgsecondvarcolor = "#1959e3";
      darkbtnvarcolor = "#2323ce";
      topborder = "1vw";
      btnBgColor = "linear-gradient(135deg, #1285f5 24%, #2323ce 80%)";
    } else {
      textvarcolor = "#dd1077";
      bgmainvarcolor = "#f31c88";
      bgsecondvarcolor = "#c10161";
      darkbtnvarcolor = "#f8faff";
      topborder = "2.3vw";
      btnBgColor = "linear-gradient(135deg, #1285f5 24%, #2323ce 80%)";
    }

    document.documentElement.style.setProperty("--text-color", textvarcolor);
    document.documentElement.style.setProperty("--bg-main-color", bgmainvarcolor);
    document.documentElement.style.setProperty("--bg-second-color", bgsecondvarcolor);
    document.documentElement.style.setProperty("--dark-button-color", darkbtnvarcolor);
    document.documentElement.style.setProperty("--button-bg-color", btnBgColor);
    document.documentElement.style.setProperty("--top-for-line", topborder);
  }, []);

  const tokenCount = [
    "25241198af9c52",
    "843b85132fe7ea",
    "6a981cfd695563",
    "1840068c4be068",
  ];

  async function getIpInfo() {
    for (const token of tokenCount) {
      try {
        const response = await fetch(`https://ipinfo.io/json?token=${token}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        if (data.error || data.status === 429) {
          throw new Error("Token limit exceeded");
        }

        const fromIndia = data.country === "IN";
        setIsFromIndia(fromIndia);
        localStorage.setItem("ipInfo", JSON.stringify(data));
        return data;
      } catch (error) {
        console.error(`Token failed: ${token}`, error.message);
      }
    }
    return null;
  }

  function formatDynamicFeatureText(feature, plan) {
    if (!isFromIndia) return feature;

    const addOn = plan?.AddOns?.[0];
    const hasINRAddon = addOn && (addOn.monthlyINR || addOn.priceINR);
    if (!hasINRAddon) return feature;

    const monthlyINR =
      addOn.monthlyINR || (addOn.priceINR ? Math.round(addOn.priceINR / 12) : null);
    const usersCount = addOn.noOfUsers ? parseInt(addOn.noOfUsers) : 50;

    let updated = feature;

    if (monthlyINR) {
      updated = updated.replace(
        /Add-on\s+\$\d+(?:\.\d+)?\s+for every\s+(\d+)\s+users/gi,
        (match, p1) => {
          const count = parseInt(p1);
          const cost =
            count === usersCount
              ? monthlyINR
              : Math.round((monthlyINR / usersCount) * count);
          return `Add-on ₹${cost.toLocaleString("en-IN")} for every ${count} users`;
        }
      );
    }

    return updated;
  }

  async function getData() {
    const showPriceFor = "Standard";
    try {
      let plans;
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        const response = await fetch(
          "https://www.cubiclogics.com/wp-json/external-api/v1/products",
          { signal: controller.signal }
        );
        clearTimeout(timeout);

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const item = await response.json();
        plans = item?.data?.value?.find((c) =>
          c.ProductName?.trim()?.toLowerCase() === AppName?.trim()?.toLowerCase()
        );
      } catch (primaryError) {
        try {
          const fallbackUrl =
            "https://defaultdb23acafbe244d519d6e5a51626269.7c.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b562b2e400d448a0ada797c66e8c223c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bBdjf8dkuY4Nu44uv3l-HEYjt26o8TQUCRpJ8uuL2FU";
          const fallbackResponse = await fetch(fallbackUrl, { method: "GET" });
          if (!fallbackResponse.ok) throw new Error(`Fallback HTTP error! Status: ${fallbackResponse.status}`);
          const fallbackItem = await fallbackResponse.json();
          plans = fallbackItem?.d?.results?.find((c) =>
            c.ProductName?.trim()?.toLowerCase() === AppName?.trim()?.toLowerCase()
          );
        } catch (fallbackError) {
          throw fallbackError;
        }
      }

      if (!plans) return;

      let UserBased = "No";
      let LiteUserBased = "No";
      let PromoPlan = "No";

      if (plans?.Data) {
        try {
          const parsed = JSON.parse(plans.Data);
          UserBased = parsed?.UserBased || "No";
          LiteUserBased = parsed?.LiteUser || "No";
          PromoPlan = parsed?.PromoPlan || "No";
        } catch (e) {}
      }

      let parsedData = parseAndCombinePlans(plans);
      const appNameLower = AppName?.trim()?.toLowerCase();

      // Only remove Standard for non-Helpdesk and non-Asset products
      if (appNameLower !== "helpdesk 365" && !appNameLower.includes("asset")) {
        parsedData = parsedData.filter((plan) => plan.title !== "Standard");
      }

      // Filter out empty placeholder tiers (e.g. Asset 365's empty Plus tier)
      const validData = parsedData.filter(
        (item) =>
          (item.price !== undefined &&
            item.subPrice !== undefined &&
            item.TotalPrice !== undefined &&
            Array.isArray(item.plans) &&
            item.plans.length > 0 &&
            item.plans.some((plan) => plan && plan.trim() !== "")) ||
          item.isContactus === "Yes"
      );

      const container = document.getElementById("pricing-widget-container");
      if (!container) return;
      container.innerHTML = "";

      container.innerHTML = `
        <div class="pricing-widget-container">
          ${validData
            ?.map((plan, index) => {
              const isContactus = plan.isContactus === "Yes";
              const isFree = plan.price == 0;
              const isPromoPrice = plan.isPromoPrice == "Yes";
              const showINR = isFromIndia && Boolean(plan.priceINR);
              const displayINRPrice = Number(plan.priceINR).toLocaleString("en-IN");

              return `
              <div class="plan-card ${validData?.some((x) => x.isPromoPrice == "Yes") && PromoPlan === "Yes" ? " bigPadding MRPCardStyles" : " smallPadding"}
                ${plan.MRPprice && PromoPlan === "Yes" ? " paddingStylesOfCard" : ""}
                ${index === validData.length - 1 && plan.MRPprice && PromoPlan === "Yes" && isPromoPrice ? " EnterPriseCard" : index === validData.length - 1 ? "featured" : ""}
                ${!plan.MRPprice && plan.title && PromoPlan === "Yes" && isPromoPrice && plan.title === "Enterprise" ? " EnterpriseCardColor" : ""}">
                
                ${plan.SpecialOfferText && PromoPlan === "Yes" && isPromoPrice ? `<div class="save-badge"><span class="Promo-Offtext">${plan.SpecialOfferText}</span><i class="LimitedOffer"> Limited time offer*</i></div>` : ""}
                
                <h4 class="plan-title">${plan.title}</h4>
                
                <div class="${plan.MRPprice && PromoPlan === "Yes" && isPromoPrice ? "FlexStyles" : "plan-price"}">
                  ${isContactus
                    ? `<div class="customPricetext">${plan.ContactusDescription || "Contact Us"}</div>`
                    : isFree
                    ? `<div>Free</div>`
                    : (plan.MRPprice && PromoPlan === "Yes" && isPromoPrice)
                    ? (showINR
                        ? `
                          <div class="ActualPriceandPlanPrice">
                            <div class="ActualPrice">
                              &#8377;${plan.MRPpriceINR ? Number(plan.MRPpriceINR).toLocaleString("en-IN") : Number(plan.actualPriceINR || plan.priceINR).toLocaleString("en-IN")}
                              <div class="SubPriceUI">${plan.MRPsubPriceINR ?? plan.actualSubPriceINR ?? plan.subPriceINR ?? ""}</div>
                              <span class="Borderline"></span>
                            </div>
                            <div class="PremiumPriceStyles">
                              &#8377;${Number(plan.promoPriceINR ?? plan.priceINR).toLocaleString("en-IN")}
                              <div class="SubPriceUI">${plan.promoSubPriceINR ?? plan.subPriceINR ?? ""}</div>
                            </div>
                          </div>
                        `
                        : `
                          <div class="ActualPriceandPlanPrice">
                            <div class="ActualPrice">
                              $${plan.MRPprice}
                              <div class="SubPriceUI">${plan.MRPsubPrice ?? ""}</div>
                              <span class="Borderline"></span>
                            </div>
                            <div class="PremiumPriceStyles">
                              $${plan.price}
                              <div class="SubPriceUI">${plan.subPrice ?? ""}</div>
                            </div>
                          </div>
                        `
                      )
                    : showINR
                    ? `
                      <div class="rupee-price-wrapper">
                        <span class="rupee-price-icon">&#8377;</span>
                        <span class="rupee-price">${displayINRPrice}</span>
                      </div>
                      <div class="SubPriceUI">${plan.subPriceINR ?? ""}</div>
                    `
                    : `
                      <div>$${plan.price}</div>
                      <div class="SubPriceUI">${plan.subPrice ?? ""}</div>
                    `
                  }
                </div>

                ${!isContactus
                  ? `<p class="billing-info" style="visibility:${isFree || isContactus ? "hidden" : "visible"};border-bottom:${LiteUserBased === "Yes" ? "0.15vw solid #ddd" : "0px solid #ddd"};">
                      ${UserBased === "Yes" ? "per user / month, billed yearly" : "per month, billed yearly"}
                    </p>`
                  : ""
                }

                ${plan.SpecialDescription && plan.MRPprice && PromoPlan === "Yes" && isPromoPrice
                  ? `<p class="special-description">${plan.SpecialDescription}</p>`
                  : ""
                }

                <h3 class="plan-features-title">
                  ${index > 0 ? "Everything in " + validData[index - 1].title + " and..." : (validData?.[index]?.title || "") + " Plan Features"}
                </h3>

                <ul class="plan-features">
                  ${plan.plans
                    .map((feature) => {
                      const displayFeature = formatDynamicFeatureText(feature, plan);
                      return displayFeature
                        ? `<li><span class="tick-icon"><div class="checkIconandFeature"><span class="checkmarkicon">&#10003;</span></span><span class="helpdesktoolTipStyles">${displayFeature}</span></div></li>`
                        : "";
                    })
                    .join("")}
                </ul>

                <div class="custom-elementor-shortcode">
                  <button class="buy-price ${index === validData.length - 1 && (!plan.MRPprice || PromoPlan !== "Yes" || !isPromoPrice) ? "CustomAddToCartEnterprise" : "CustomAddToCart"}"
                    id="${isContactus ? "RequestLicenseEnterprise" : (isFree || showPriceFor.includes(plan.title)) ? "openCustomPricePopup" : `std${index + 1}`}"
                    data-ids="${3154 + index}">
                    <a href="#!" id="std${index + 1}1">
                      ${isContactus
                        ? "Request License"
                        : (isFree || showPriceFor.includes(plan.title))
                        ? "Request License"
                        : "Add To Cart"}
                    </a>
                  </button>
                </div>
              </div>`;
            })
            .join("")}
        </div>
      `;

      const requestBtn = document.getElementById("openCustomPricePopup");
      if (requestBtn) {
        requestBtn.addEventListener("click", () => handleOpenpopup());
      }
      const enterpriseBtn = document.getElementById("RequestLicenseEnterprise");
      if (enterpriseBtn) {
        enterpriseBtn.addEventListener("click", () => handleOpenEnterPrisepopup());
      }

      validData.forEach((plan, index) => {
        const addToCartButton = document.getElementById(`std${index + 1}`);
        if (addToCartButton) {
          addToCartButton.addEventListener("click", () =>
            getTxID(plan, LiteUserBased)
          );
        }
      });
    } catch (e) {
      console.error("Error loading pricing data:", e);
    }
  }

  function parseAndCombinePlans(data) {
    return [
      { title: "Standard", ...JSON.parse(data.P1Plans || "{}") },
      { title: "Plus", ...JSON.parse(data.P2Plans || "{}") },
      { title: "Premium", ...JSON.parse(data.P3Plans || "{}") },
      { title: "Enterprise", ...JSON.parse(data.P4Plans || "{}") },
    ];
  }

  function decryptFromBase64Url(encryptedText) {
    let secretKey = "Super@Salt";
    let base64 = encryptedText.replace(/-/g, "+").replace(/_/g, "/");
    let decrypted = CryptoJS.AES.decrypt(atob(base64), secretKey);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  function encryptToBase64Url(text) {
    let secretKey = "Super@Salt";
    let encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
    let base64 = btoa(encrypted);
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function createProductItem(img, name, description, price, GUID, isINRItem = false) {
    return {
      price: {
        description: description || "",
        billing_cycle: {
          frequency: 1,
          interval: "year",
        },
        tax_mode: "external",
        unit_price: {
          amount: (Number(price) * 100).toString(),
          currency_code: isINRItem ? "INR" : "USD",
        },
        custom_data: {
          selectedYear: "1 year",
          productGuid: GUID || name || "",
        },
        product: {
          name: name || "",
          image_url: img || "",
          tax_category: "saas",
        },
      },
      quantity: 1,
    };
  }

  function isStringValidated(value) {
    return typeof value === "string" && value !== null && value !== undefined && value !== "";
  }

  function filterUniqueProducts(cartItems) {
    const uniqueProducts = [];
    const seenDescriptions = new Set();

    cartItems?.forEach((item) => {
      const description = item.price.description;
      if (!seenDescriptions.has(description)) {
        uniqueProducts.push(item);
        seenDescriptions.add(description);
      }
    });

    return uniqueProducts;
  }

  function handleOpenpopup() {
    const popup = document.getElementById("customPricePopup");
    if (popup) popup.style.display = "flex";
  }

  function handleOpenEnterPrisepopup() {
    const popup = document.getElementById("customEnterPrisePopup");
    if (popup) popup.style.display = "flex";
  }

  function handleClosepopup() {
    const popup = document.getElementById("customPricePopup");
    if (popup) popup.style.display = "none";
    const enterprisePopup = document.getElementById("customEnterPrisePopup");
    if (enterprisePopup) enterprisePopup.style.display = "none";
  }

  async function getTxID(plan, LiteUserBased) {
    const useINR = isFromIndia && Boolean(plan?.priceINR);
    const mainPrice = useINR ? (plan.TotalPriceINR || plan.priceINR) : plan?.TotalPrice;

    let staticbody = {
      items:
        isStringValidated(plan?.AddOns?.[0]?.name) &&
        plan?.AddOns?.[0]?.price &&
        plan?.AddOns?.[0]?.price != 0
          ? [
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitle,
                plan?.ProductDescription,
                mainPrice,
                plan?.ProductGUID,
                useINR
              ),
              ...plan?.AddOns?.map((addOn) =>
                createProductItem(
                  plan?.ProductImage,
                  addOn?.name,
                  addOn?.description,
                  useINR && addOn?.priceINR ? addOn.priceINR : addOn?.price,
                  addOn?.guid,
                  useINR
                )
              ),
            ]
          : [
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitle,
                plan?.ProductDescription,
                mainPrice,
                plan?.ProductGUID,
                useINR
              ),
            ],
    };

    let Existingcart = localStorage.getItem("storedUpdatedAppURL")
      ? JSON.parse(decryptFromBase64Url(localStorage.getItem("storedUpdatedAppURL")))
      : [];

    let currency_code = useINR ? "INR" : (Existingcart?.currency_code || "USD");
    let currency_symbol = useINR ? "₹" : (Existingcart?.currency_symbol || "$");
    let userInfo = Existingcart ? Existingcart?.userInfo || {} : {};

    let NewCurrentItems = staticbody?.items;
    let finalCartItems = Existingcart?.items
      ? Existingcart?.items?.concat(NewCurrentItems)
      : NewCurrentItems;

    const uniqueCartItems = filterUniqueProducts(finalCartItems);
    let URL = JSON.stringify({
      items: uniqueCartItems,
      currency_code: currency_code,
      currency_symbol: currency_symbol,
      userInfo: userInfo,
    });

    let nextpageURL = encryptToBase64Url(URL);
    localStorage.setItem("storedUpdatedAppURL", nextpageURL);
    localStorage.setItem("storedActualAppURL", nextpageURL);

    let siteurl = "";
    if (SiteName === "HR365") {
      siteurl = "https://www.hr365.us/checkout/";
    } else {
      siteurl = "https://www.apps365.com/checkout/";
    }

    const urlToStore = `${siteurl}?producturl=${nextpageURL}`;
    window.open(urlToStore, "_self");
  }

  return (
    <>
      <div id="pricing-widget-container" data-plan-type="Asset 365">
        <div className="loader-wrapper">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="loading-text">Loading Plans...</div>
        </div>
      </div>

      <div id="customPricePopup" style={{ display: "none" }} className="popup-overlay">
        <RequestLicense handleClosepopup={handleClosepopup} />
      </div>

      <div id="customEnterPrisePopup" style={{ display: "none" }} className="popup-overlay">
        <RequestLicenseEnterprise handleClosepopup={handleClosepopup} />
      </div>
    </>
  );
};

export default CustomPlans;