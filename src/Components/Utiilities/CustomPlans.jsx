import React from "react";
import { TooltipHost } from "@fluentui/react/lib/Tooltip";
import CryptoJS from "crypto-js";
import "./CustomPlans.css";
import { MyContext } from "../../App";
import { RequestLicense } from "./RequestLicense";
import { RequestLicenseEnterprise } from "./RequestLicenseEnterprise";
import { DefaultButton } from "@fluentui/react/lib/Button";
// import { DialogContent } from "@fluentui/react";
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
    getData();
    const currentUrl = window.location.href.toLowerCase();

    const shouldRunIpInfo =
      currentUrl.includes("sharepoint-contract-management-clm-365") ||
      currentUrl.includes("clm365") ||
      currentUrl.includes("clm") ||
      currentUrl.includes("contract-management") ||
      currentUrl.includes("contract management");

    if (shouldRunIpInfo) {
      getIpInfo();
    }
    let textvarcolor;
    let bgmainvarcolor;
    let bgsecondvarcolor;
    let darkbtnvarcolor;
    let btnBgColor;
    let topborder;
    if (SiteName == "HR365") {
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
    document.documentElement.style.setProperty(
      "--bg-main-color",
      bgmainvarcolor
    );
    document.documentElement.style.setProperty(
      "--bg-second-color",
      bgsecondvarcolor
    );
    document.documentElement.style.setProperty(
      "--dark-button-color",
      darkbtnvarcolor
    );
    document.documentElement.style.setProperty("--button-bg-color", btnBgColor);
    document.documentElement.style.setProperty("--top-for-line", topborder);
  }, []);
  const tokenCount = [
    "25241198af9c52",
    "843b85132fe7ea",
    "6a981cfd695563",
    "1840068c4be068"
  ];

  async function getIpInfo() {
    for (const token of tokenCount) {
      try {
        console.log("Trying token:", token);

        const response = await fetch(
          `https://ipinfo.io/json?token=${token}`
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.error || data.status === 429) {
          throw new Error("Token limit exceeded");
        }

        console.log("Success with token:", token);
        console.log(data);

        // Check if IP is from India
        const fromIndia = data.country === "IN";
        console.log("Is from India:", fromIndia);
        setIsFromIndia(fromIndia);
        localStorage.setItem("ipInfo", JSON.stringify(data));

        return data;
      } catch (error) {
        console.error(`Token failed: ${token}`, error.message);
      }
    }

    console.error("All tokens failed.");
    return null;
  }
  async function getData() {


    const showPriceFor = 'Standard';
    try {
      // Fetch Data (Replace with actual API URL)
      let plans;
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000); // 15 sec timeout

        const response = await fetch(
          // "https://apps365plans.azurewebsites.net/api/plans",
          // "https://websiteplans.apps365.com/api/plans?appName=" + AppName,
          "https://www.cubiclogics.com/wp-json/external-api/v1/products",
          // "https://www.hr365.us/wp-content/product-data.json",
          // "https://www.hr365.us/wp-json/external-api/v1/products",
          { signal: controller.signal }
        );

        clearTimeout(timeout);

        if (!response.ok) {
          throw new Error(`Azure HTTP error! Status: ${response.status}`);
        }

        const item = await response.json();
        plans = item?.data?.value?.find((c) => c.ProductName === AppName);

      } catch (azureError) {
        console.error("Azure call failed → fallback triggered:", azureError);

        try {
          const fallbackUrl =
            "https://defaultdb23acafbe244d519d6e5a51626269.7c.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b562b2e400d448a0ada797c66e8c223c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bBdjf8dkuY4Nu44uv3l-HEYjt26o8TQUCRpJ8uuL2FU";

          const fallbackResponse = await fetch(fallbackUrl, { method: "GET" });

          if (!fallbackResponse.ok) {
            throw new Error(
              `Fallback HTTP error! Status: ${fallbackResponse.status}`
            );
          }

          const fallbackItem = await fallbackResponse.json();
          plans = fallbackItem?.d?.results?.find((c) => c.ProductName === AppName);

        } catch (fallbackError) {
          console.error("Fallback API also failed:", fallbackError);
          throw fallbackError;
        }
      }
      if (!plans) {
        console.error("No plans found for this app.");
        return;
      }
      let UserBased = plans?.Data
        ? JSON.parse(plans?.Data)?.UserBased || "No"
        : "No";
      let LiteUserBased = plans?.Data
        ? JSON.parse(plans?.Data)?.LiteUser || "No"
        : "No";

      let PromoPlan = plans?.Data
        ? JSON.parse(plans?.Data)?.PromoPlan || "No"
        : "No";
      let parsedData = parseAndCombinePlans(plans);

      // const clmProducts = [
      //   "CLM 365 - Contract Management"
      // ];

      // Remove Standard for all products except Helpdesk 365
      if (AppName?.trim()?.toLowerCase() !== "helpdesk 365") {
        parsedData = parsedData.filter(
          (plan) => plan.title !== "Standard"
        );
      }

      // Remove Plus only for CLM
      // if (
      //   clmProducts.some(
      //     (product) =>
      //       product.toLowerCase() === AppName?.trim()?.toLowerCase()
      //   )
      // ) {
      //   parsedData = parsedData.filter(
      //     (plan) => plan.title !== "Plus"
      //   );
      // }

      console.log(parsedData, "current plans");
      // Get container div
      const container = document.getElementById("pricing-widget-container");
      container.innerHTML = ""; // Clear previous content

      const validData = parsedData.filter((item) =>
        (
          item.price !== undefined &&
          item.subPrice !== undefined &&
          item.TotalPrice !== undefined &&
          Array.isArray(item.plans) &&
          item.plans.length > 0 &&
          item.plans.some((plan) => plan.trim() !== "")
        ) || item.isContactus === "Yes"
      );


      container.innerHTML = `
  <div class="pricing-widget-container">
    ${validData
          ?.map((plan, index) => {
            const isContactus = plan.isContactus === "Yes";
            const isFree = plan.price == 0;
            const isPromoPrice = plan.isPromoPrice == "Yes";
            return `
           <div class="plan-card ${validData?.some((x) => x.isPromoPrice) && PromoPlan == "Yes"
                ? " bigPadding MRPCardStyles"
                : " smallPadding"
              }
                                    ${plan.MRPprice && PromoPlan == "Yes" ? " paddingStylesOfCard" : ""}
                                    ${index === validData.length - 1 &&
                plan.MRPprice &&
                PromoPlan == "Yes" &&
                plan.isPromoPrice == "Yes"
                ? " EnterPriseCard"
                : index === validData.length - 1
                  ? "featured"
                  : ""
              }
                                 ${!plan.MRPprice &&
                plan.title &&
                PromoPlan == "Yes" &&
                (plan.isPromoPrice == "Yes") === "Enterprise"
                ? " EnterpriseCardColor"
                : ""
              }">${plan.SpecialOfferText &&
                PromoPlan == "Yes" &&
                plan.isPromoPrice == "Yes"
                ? `<div class="save-badge"><span class="Promo-Offtext">${plan.SpecialOfferText}</span><i class="LimitedOffer"> Limited time offer*</i></div>`
                : ""
              }<h4 class="plan-title">${plan.title}</h4>
                                <div class=${plan.MRPprice &&
                PromoPlan == "Yes" &&
                plan.isPromoPrice == "Yes"
                ? "FlexStyles"
                : "plan-price"
              }> ${plan.isContactus == "Yes"
                ? `<div class="customPricetext">${plan.ContactusDescription}</div>`
                : plan.price == 0
                  ? `<div>Free</div>`
                  :
                  (plan.MRPprice && PromoPlan == "Yes" && plan.isPromoPrice == "Yes")
                    ? `
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
                    :
                    isFromIndia && AppName?.trim()?.toLowerCase() === "clm 365 - contract management" && plan.title === "Plus"
                      ? `
                  <div class="plan-price">
                   <div class="rupee-price-wrapper"><span class="rupee-price-icon">&#8377</span><span class="rupee-price">4,999</span></div>
                    
                  </div>
                `
                      : isFromIndia && AppName?.trim()?.toLowerCase() === "clm 365 - contract management" && plan.title === "Premium"
                        ? `
                  <div class="plan-price">
                     <div class="rupee-price-wrapper"><span class="rupee-price-icon">&#8377</span><span class="rupee-price">6,999</span></div>
                    
                  </div>
                `
                        : isFromIndia && AppName?.trim()?.toLowerCase() === "clm 365 - contract management" && plan.title === "Enterprise"
                          ? `
                  <div class="plan-price">
                    <div class="rupee-price-wrapper"><span class="rupee-price-icon">&#8377</span><span class="rupee-price">9,499</span></div>
                    
                  </div>
                `

                          : `
                  <div>$${plan.price}</div>
                  <div class="SubPriceUI">${plan.subPrice ?? ""}</div>
                `
              }
        </div>

            ${!isContactus
                ? `<p class="billing-info" style="visibility:${isFree || isContactus ? "hidden" : "visible"
                };border-bottom:${LiteUserBased == "Yes"
                  ? "0.15vw solid #ddd"
                  : "0px solid #ddd"
                };">
                    ${UserBased == "Yes"
                  ? `per user / month, billed yearly`
                  : `per month, billed yearly`
                }
                  </p>`
                : ""
              }
 ${plan.SpecialDescription &&
                plan.MRPprice &&
                PromoPlan == "Yes" &&
                plan.isPromoPrice == "Yes"
                ? `<p class="special-description">${plan.SpecialDescription}</p>`
                : ""
              }
            ${LiteUserBased == "Yes" && !isContactus
                ? `<div>
                    <div class="plan-price">
                      ${plan.LiteUserprice == 0
                  ? `<div>Free</div>`
                  : !isFromIndia == true ? `
                    <div>$${plan.LiteUserprice}</div>
                             <div class="SubPriceUI">${plan.LiteUsersubPrice}</div>
                    `: isFromIndia && AppName?.trim()?.toLowerCase() === "clm 365 - contract management" && plan.title === "Plus"
                    ? `<div class="rupee-price-wrapper"><span class="rupee-price-icon">&#8377</span><span class="rupee-price">2,999</span></div>
                             `
                    : isFromIndia && AppName?.trim()?.toLowerCase() === "clm 365 - contract management" && plan.title === "Premium"
                      ? `<div class="rupee-price-wrapper"><span class="rupee-price-icon">&#8377</span><span class="rupee-price">2,299</span></div>
                             `
                      : isFromIndia && AppName?.trim()?.toLowerCase() === "clm 365 - contract management" && plan.title === "Enterprise"
                        ? `<div class="rupee-price-wrapper"><span class="rupee-price-icon">&#8377</span><span class="rupee-price">2,799</span></div>
                             `
                        : `<div>$${plan.LiteUserprice}</div>
                             <div class="SubPriceUI">${plan.LiteUsersubPrice}</div>`
                }
                    </div>
                    <p class="billing-info" style="visibility:${plan.LiteUserprice == 0 ? "hidden" : "visible"
                };">
                      ${UserBased == "Yes"
                  ? `per lite user / month, billed yearly`
                  : `per month, billed yearly`
                }
                    </p>
                  </div>`
                : ""
              }

            <h3 class="plan-features-title">
              ${index > 0
                ? "Everything in " + validData[index - 1].title + " and..."
                : validData?.[index]?.title + " Plan Features"
              }
            </h3>

            <ul class="plan-features">
          ${plan.plans
                .map((feature) =>
                  feature
                    ? `<li><span className="tick-icon"><div class="checkIconandFeature"><span class="checkmarkicon">&#10003</span></span><span class="helpdesktoolTipStyles">${feature} ${plans.ProductName === "Helpdesk 365" &&
                      (
                        feature === "Minimum 5 users" ||
                        feature.toLowerCase().includes("ticket requesters")
                      )
                      ? `
                    <span class="custom-tooltip">
       <img 
  src="${plan.title === "Enterprise" && plan.isPromoPrice === "Yes"
                        ? "https://ik.imagekit.io/apps365/Lp-pages/info%20-icon-black-svg_.png"
                        : plan.title === "Enterprise"
                          ? "https://ik.imagekit.io/apps365/info%20-icon-white.png"
                          : "https://ik.imagekit.io/apps365/Lp-pages/info%20-icon-black-svg_.png"
                      }"
  alt="info"
  class="info-image"
/>

                      <span class="tooltip-text">
                        ${feature === "Minimum 5 users"
                        ? "These are your helpdesk agents (Admins, Supervisors, Agents). Pricing is based on how many agents manage tickets."
                        : "Number of users who can raise and track tickets (not a ticket limit)."
                      }
                      </span>

                    </span>
                  `
                      : ""
                    }</span></div></li>`
                    : ""
                )
                .join("")}
</ul>
            <div class="custom-elementor-shortcode">
              <button class="buy-price ${index === validData.length - 1 &&
                (!plan.MRPprice ||
                  PromoPlan != "Yes" ||
                  plan.isPromoPrice != "Yes")
                ? "CustomAddToCartEnterprise"
                : "CustomAddToCart"
              }"
                id="${(isContactus)
                ? "RequestLicenseEnterprise"
                : (isFree || showPriceFor.includes(plan.title))
                  ? "openCustomPricePopup"
                  : `std${index + 1}`
              }"
                data-ids="${3154 + index}">
                <a href="#!" id="std${index + 1}1">
                  ${isContactus
                ? (plan.title === "Enterprise" && AppName === "CLM 365 - Contract Management"
                  ? "Let’s Connect"
                  : "Request License")
                : (isFree || showPriceFor.includes(plan.title))
                  ? "Request License"
                  : "Add To Cart"
              }
                </a>
              </button>
            </div>
          </div>
        `;
          })
          .join("")}
  </div>
`;

      const requestBtn = document.getElementById("openCustomPricePopup");
      if (requestBtn) {
        requestBtn.addEventListener("click", () => {
          handleOpenpopup();
        });
      }
      const EnterpriseBtn = document.getElementById("RequestLicenseEnterprise");
      if (EnterpriseBtn) {
        EnterpriseBtn.addEventListener("click", () => {
          handleOpenEnterPrisepopup();
        });
      }
      // Attach event listeners dynamically
      validData.forEach((plan, index) => {
        const addToCartButton = document.getElementById(`std${index + 1}`);
        if (addToCartButton) {
          addToCartButton.addEventListener("click", () => getTxID(plan)); // Pass the plan object directly
          addToCartButton.addEventListener("click", () =>
            getTxID(plan, LiteUserBased)
          );
        }
      });
    } catch { }
  }

  function parseAndCombinePlans(data) {
    return [
      { title: "Standard", ...JSON.parse(data.P1Plans) },
      { title: "Plus", ...JSON.parse(data.P2Plans) },
      { title: "Premium", ...JSON.parse(data.P3Plans) },
      { title: "Enterprise", ...JSON.parse(data.P4Plans) },
    ];
  }
  function decryptFromBase64Url(encryptedText) {
    let secretKey = "Super@Salt";
    let base64 = encryptedText.replace(/-/g, "+").replace(/_/g, "/"); // Convert back to standard Base64
    let decrypted = CryptoJS.AES.decrypt(atob(base64), secretKey);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  function encryptToBase64Url(text) {
    let secretKey = "Super@Salt";
    let encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
    let base64 = btoa(encrypted); // Convert to Base64
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); // Make it URL-safe
  }

  // Function to launch Paddle Checkout with transactionId
  let TTID = "";

  function createProductItem(img, name, description, price) {
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
          currency_code: "USD",
        },
        custom_data: {
          selectedYear: "1 year",
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
    if (
      typeof value !== "string" ||
      value === null ||
      value === undefined ||
      value === ""
    ) {
      return false;
    } else {
      return true;
    }
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
    // openStandardpopup(true);
    const popup = document.getElementById("customPricePopup");
    if (popup) popup.style.display = "flex";
  }
  function handleOpenEnterPrisepopup() {
    const popup = document.getElementById("customEnterPrisePopup");
    if (popup) popup.style.display = "flex";
  }

  function handleClosepopup() {
    //  setOpenStandardpopup(false);
    const popup = document.getElementById("customPricePopup");
    if (popup) popup.style.display = "none";
  }

  async function getTxID(plan, LiteUserBased) {

    console.log("Getting transaction ID...", plan);

    let staticbody = {
      items:
        isStringValidated(plan?.AddOns?.[0]?.name) &&
          plan?.AddOns?.[0]?.price &&
          plan?.AddOns?.[0]?.price != 0
          ? LiteUserBased == "Yes"
            ? [
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitle,
                plan?.ProductDescription,
                plan?.TotalPrice
              ),
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitleLiteUser,
                plan?.ProductDescriptionLiteUser,
                plan?.LiteUserTotalPrice
              ),
              ...plan?.AddOns?.map((addOn) =>
                createProductItem(
                  plan?.ProductImage,
                  addOn?.name,
                  addOn?.description,
                  addOn?.price
                )
              ),
            ]
            : [
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitle,
                plan?.ProductDescription,
                plan?.TotalPrice
              ),
              ...plan?.AddOns?.map((addOn) =>
                createProductItem(
                  plan?.ProductImage,
                  addOn?.name,
                  addOn?.description,
                  addOn?.price
                )
              ),
            ]
          : LiteUserBased == "Yes"
            ? [
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitle,
                plan?.ProductDescription,
                plan?.TotalPrice
              ),
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitleLiteUser,
                plan?.ProductDescriptionLiteUser,
                plan?.LiteUserTotalPrice
              ),
            ]
            : [
              createProductItem(
                plan?.ProductImage,
                plan?.ProductTitle,
                plan?.ProductDescription,
                plan?.TotalPrice
              ),
            ],
    };

    let Existingcart = localStorage.getItem("storedUpdatedAppURL")
      ? JSON.parse(
        decryptFromBase64Url(localStorage.getItem("storedUpdatedAppURL"))
      )
      : [];
    let currency_code = Existingcart
      ? Existingcart?.currency_code || "USD"
      : "USD";

    let currency_symbol = Existingcart
      ? Existingcart?.currency_symbol || "$"
      : "$";

    let userInfo = Existingcart ? Existingcart?.userInfo || {} : {};

    console.log(Existingcart, "ExistingcartItems");

    let NewCurrentItems = staticbody?.items;

    console.log("NewCurrentItems", NewCurrentItems);

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
    console.log(URL);
    // const urlToStore = `https://www.cubiclogics.com/checkout?producturl=${nextpageURL}`;

    //   const urlToStore = `https://www.cubiclogics.com/checkout`;
    //   HR365 Site
    // const urlToStore = `https://www.hr365.us/checkout`;
    //   APPS365 Site
    localStorage.setItem("storedUpdatedAppURL", nextpageURL);
    localStorage.setItem("storedActualAppURL", nextpageURL);
    let siteurl = "";
    if (SiteName == "HR365") {
      siteurl = "https://www.hr365.us/checkout/";
    } else {
      siteurl = "https://www.apps365.com/checkout/";
    }
    const urlToStore = `${siteurl}?producturl=${nextpageURL}`;

    window.open(urlToStore, "_self");
    console.log(urlToStore);
    // document.cookie = `appsproducturl=${nextpageURL}
    console.log(staticbody, "body");
  }

  return (
    // <div className="plans-container">
    <>

      <div id="pricing-widget-container" data-plan-type="Task 365">

        <div class="loader-wrapper">
          <div class="loader">
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

          <div class="loading-text">Loading Plans...</div>
        </div>

      </div>
      <div
        id="customPricePopup"
        style={{ display: "none" }}
        className="popup-overlay"
      >
        <RequestLicense handleClosepopup={handleClosepopup()} />

        {/* {openStandardpopup &&
    <Dialog
          open={openStandardpopup}
          onClose={handleClosepopup}
          maxWidth={"xl"}
          className="GetStartedModal"
        >

    <DialogContent>
<RequestLicense handleClosepopup={handleClosepopup()} />
      </DialogContent>
        </Dialog>
        
} */}
      </div>
      <div
        id="customEnterPrisePopup"
        style={{ display: "none" }}
        className="popup-overlay"
      >
        <RequestLicenseEnterprise handleClosepopup={handleClosepopup()} />
      </div>
    </>
    // </div>
  );
};

export default CustomPlans;
