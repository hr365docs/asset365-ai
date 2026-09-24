import * as React from "react";
import DemoButtons from "./Utiilities/DemoButtons";
import ImageSction1 from "../Assests/Images/Ed365/ImageSection1.png";
import Plans from "./Utiilities/Plans";
import Accordion from "./Utiilities/AccordionItem";
import SpecailButtons from "./Utiilities/SpecialButtons";
import Header from "./Header and Footer/Header";
import Footer from "./Header and Footer/Footer";
import ScrollToTop from "./Utiilities/ScrolltoTop";
import G2Badge from "./Utiilities/G2Badge";
import TabsWithImage from "./Utiilities/TabsWithImage";
import Availability from "./Utiilities/Availability";
import OurClients from "./Utiilities/OurClients";
import Integration from "./Utiilities/Integration";
import { MyContext } from "../App";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import GetOfferPage from "./Utiilities/GetOfferPage";
import CustomPlans from "./Utiilities/CustomPlans";
import Azuer from "./Utiilities/Azuer";
import OverviewCommon from "./GlobalMultiple/OverviewCommon";
import CyberSecurity from "./Utiilities/CyberSecurity";
import OverviewCommonET from "./GlobalMultiple/OverviewCommonET";
import LogoSlider from "./Utiilities/Slider";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import OverviewCommonLMS365 from "./GlobalMultiple/OverviewCommonLMS365";
import { Dropdown, PrimaryButton, TextField } from "@fluentui/react";
import OverviewCommonAsset365 from "./GlobalMultiple/OverviewCommonAsset365";
import OverviewEmployeeDirectory1 from "./GlobalMultiple/OverviewEmployeeDirectory1";
import OverviewHelpdesk365 from "./GlobalMultiple/OverviewHelpdesk365";
import Trustedbylogo from "./GlobalMultiple/Trustedbylogo";
import OverviewExpense365 from "./GlobalMultiple/OverviewExpense365";
// import { mouseflow} from "react-mouseflow";
const logos = [
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/great-place_C3JVU5GXk.png",
];
function Expense365() {
    const [activeTab, setActiveTab] = useState(0);
    const featureData = [
        {
            tab: "Easy Expense Logging",
            title: "Capture and submit expenses effortlessly",
            description:
                "Snap receipts, add notes, and submit expenses in seconds from desktop or mobile. Expense 365 keeps every claim organized, accurate, and ready for faster approvals.",
            points: [

            ],
            icon: "https://ik.imagekit.io/apps365/Lp-pages/AI-Agent.png",
        },
        {
            tab: "Track Every Mile Travelled",
            title: "Automate mileage tracking and reimbursements",
            description:
                "Automatically track business miles, simplify reimbursements, and keep every trip accurately recorded without manual logs.",

            points: [

            ],
            icon: "https://ik.imagekit.io/apps365/Lp-pages/Helpdesk-home-tickets.webp",
        },
        {
            tab: "Multi Currency Expense Tracking",
            title: "Manage global expenses with accuracy",
            description:
                "Give teams a familiar expense experience with region-based currency formats, language preferences, and accurate multi-currency tracking in one platform.",

            points: [

            ],
            icon: "https://ik.imagekit.io/zn4au2jftpm5/Lp-page-Logos/HD-AI-ticket%20summary_fYjG69qt_.png",
        },
        {
            tab: "Built Inside Microsoft 365",
            title: "Works seamlessly within Microsoft 365",
            description:
                "Integrate smoothly with Microsoft 365 while giving teams a secure, connected, scalable, and easy-to-use expense management experience.",

            points: [

            ],
            icon: "https://ik.imagekit.io/cubiclogics/Apps365/HD/Helpdesk-hd.webp",
        },
    ];
    //GTM
    const script = document.createElement("script");
    script.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'denied',
          'security_storage': 'granted',
          'wait_for_update': 500
        });
      `;
    document.head.appendChild(script);

    // React.useEffect(() => {
    //   mouseflow.initialize("d74e23c0-0490-4d54-925d-b4ea1ae7151a");
    //   }, []);
    const [ham, setHam] = React.useState(false);
    const AppName = React.useContext(MyContext);
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState("");
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const getEmbedUrl = (url) => {
        if (url.includes("youtube.com/watch?v=")) {
            return url.replace("watch?v=", "embed/");
        } else if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes("vimeo.com/")) {
            const videoId = url.split("vimeo.com/")[1];
            return `https://player.vimeo.com/video/${videoId}`;
        } else {
            return url; // fallback for direct video links
        }
    };
    const handlePlayClick = () => {
        setIsVideoPlaying(true); // When play icon is clicked, play the video
    };
    const handleCloseVideo = () => {
        setIsVideoPlaying(false); // Close the video
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // React.useEffect(() => {
    //   document.title = "new title"
    // }, []);
    // React.useEffect(() => {
    //   mouseflow.initialize("d74e23c0-0490-4d54-925d-b4ea1ae7151a");
    //   }, []);
    React.useEffect(() => {
        document.title = "AI-Powered SharePoint Helpdesk 365 – Ticketing System";
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "SharePoint Helpdesk 365 leverages AI to simplify ticketing, accelerate response times, and elevate customer support quality."
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = "SharePoint Helpdesk 365 leverages AI to simplify ticketing, accelerate response times, and elevate customer support quality.";
            document.head.appendChild(newMeta);
        }
    }, []);
    // const AppName = React.useContext(MyContext);

    // const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    // const [selectedImageUrl, setSelectedImageUrl] = React.useState("");

    // const openLightbox = (imageUrl) => {
    //   setSelectedImageUrl(imageUrl);
    //   setLightboxOpen(true);
    // };

    // const closeLightbox = () => {
    //   setLightboxOpen(false);
    // };


    const accordionItems = [
        {
            title: "What information is typically included in a SharePoint expense tracker report?",
            content: (
                <>
                    SharePoint expense tracker reports provide expense categories, receipts, dates, amounts, mileage, Per Diems, reimbursements, and approvals, creating a clear record for financial management. 
                </>
            )
        },
        {
            title: "Why do businesses benefit from using a SharePoint expense tracker?",
            content: `The Microsoft expense tracker solution allows businesses to save time, reduce errors, comply with policies, have better visibility of their budgets, simplify the reimbursement process, and increase their overall financial efficiency.`
        },
        {
            title: "How secure is my financial data when using a Expense 365?",
            content: `SharePoint expense tracker solution will keep your financial data within your organization’s Microsoft 365 environment, and with enterprise-grade security and role-based access control. `
        },
        {
            title: "In what ways does a SharePoint expense tracker simplify reimbursements?",
            content: `A SharePoint expense tracker automates receipt scanning, policy validation, and approvals so your employee can submit a claim, and your manager can approve it quickly providing a fast and accurate reimbursement process. `
        },
        {
            title: "How does automated expense reporting work in Microsoft expense tracking?",
            content: `SharePoint expense tracker scans receipts, extracts the necessary details, categorizes expenses, and automatically creates expense reports so less manual work is needed while ensuring continued accuracy and compliance. `
        },
    
        {
            title: "Which currency are the prices listed in?",
            content: `All prices are listed in USD.`,
        },
    ];
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Smart Microsoft 365 Integrations to Manage Business Expenses</title>
                    <meta
                        name="description"
                        content="Explore Expense 365 integrations to simplify expense monitoring, approvals, reimbursements and reporting process within Microsoft 365 ecosystem."
                    />
                </Helmet>
                <ScrollToTop />
                <div className={`HR_MainHeaderSection HR_panelHeader`} style={{ background: "#000" }}>
                    <div className="HR_FlexCenterSpcBetween ETHR_FlexCenterSpcBetween">
                        <div className="HR_LogoSection">
                            <img
                                src={"https://ik.imagekit.io/zn4au2jftpm5/Apps365/Logos/apps365white_yKjtDjv_y.png"}
                                alt="Apps 365"
                            />
                            {""}


                            <div className="DB_button">
                                <DemoButtons StickyButton={true} getStarted={true} openDialog={true} Dialogheading={"See how Expense 365 simplifies expense tracking, accelerates approvals, and streamlines reimbursements within Microsoft 365"} DialogDescription={"Share your details and our team will walk you through the platform."} />
                            </div>
                            <div>
                                <span className="MBHAMBURGER" onClick={() => setHam(!ham)}>
                                    <RxHamburgerMenu />
                                </span>
                                {/* <span className="MBHAMBURGER" onClick={() => setHam(!ham)}> ≡</span> */}
                            </div>
                        </div>

                        <div className="HR_FlexCenterSpcBetween">
                            <div
                                className="HR_navMenu ETHR_navMenu LMSNavmenu "
                                style={{ paddingLeft: "0" }}
                            >
                                <span>
                                    <ul>

                                        <img
                                            className="navheaderLogoED"
                                            src={"https://ik.imagekit.io/cubiclogics/App%20Logos/White-logos/ET365-White.png"}
                                            alt="Apps 365"
                                        />
                                        {""}
                                        <li className="logoheadingED" style={{ cursor: "default" }}>
                                            Expense 365
                                        </li>
                                        <li>
                                            <a href="#Features">Features</a>
                                        </li>

                                        <li>
                                            <a href="#ClientsSpeakTestimonial">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="#Integration-ET">Integration</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Pricing</a>
                                        </li>
                                    </ul>
                                </span>
                            </div>

                            <div className="MB_button">
                                <DemoButtons StickyButton={false} getStarted={false} />
                            </div>

                            <div className="MB_button">
                                <DemoButtons StickyButton={true} getStarted={false} />
                            </div>
                        </div>
                    </div>
                </div>

                {ham ? (
                    <div
                        className="MBHB"
                        style={{
                            position: "fixed",
                            zIndex: "9",
                            top: "0vw",
                            paddingTop: "0.4vw 3vw",
                            background: "var(--panelBgColor)",
                            height: "100vh",
                        }}
                    >
                        <div className="mbflex">
                            <div className="HR_LogoSection">
                                <img
                                    src={
                                        "https://ik.imagekit.io/apps365/App-Logos/Apps365-black-logo-216x40px.png"
                                    }
                                    alt={AppName}
                                />
                                {/* <a href="https://www.apps365.com" target="_blank" rel="noreferrer">
                <img src={"https://ik.imagekit.io/apps365/App-Logos/Apps365-black-logo-216x40px.png"} alt="Apps365" />
                {""}
              </a> */}
                            </div>

                            {ham ? (
                                <div
                                    onClick={() => setHam(!ham)}
                                    style={{ margin: "12px 0px" }}
                                >
                                    <span className="cross">
                                        <RxCross1 />
                                    </span>
                                </div>
                            ) : (
                                <div onClick={() => setHam(!ham)}>
                                    <span className="cross">+</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <span>
                                <ul className={`${ham ? "mbmenu" : ""}`}>
                                    <li>
                                        <div className="ET-logoIcons ET-logoIconsOnMobileView ">
                                            <img
                                                alt="MainImage"
                                                src="https://ik.imagekit.io/cubiclogics/App%20Logos/ET365.webp"
                                            ></img>
                                            <h3 className="HR_primaryclr">Expense 365</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#Features" onClick={() => setHam(false)}>
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#ClientsSpeakTestimonial"
                                            onClick={() => setHam(false)}
                                        >
                                            Clients
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#Integration-ET" onClick={() => setHam(false)}>
                                            Integration
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pricing" onClick={() => setHam(false)}>
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {/* <Header HR365header="ET365" /> */}

                <div
                    style={{
                        backgroundColor: "unset",
                        background:
                            "linear-gradient(110deg, #daeaf6, #e8def8, #fdf0f0, #e8def8, #daeaf6)",
                    }}
                >
                    <div
                        className="HR_panel"
                        style={{
                            padding: "3vw 5vw 1vw 3vw",
                            background: "linear-gradient(45deg, #daeaf6, #e8def8, #fdf0f0, #e8def8, #daeaf6)",
                        }}
                    >
                        <div className="HR_FlexCenterSpcBetween HR_ParentSection1 ET365HomepageParentsection">
                            <div className="HR_Section1LeftSide LMS365-HR_Section1LeftSide">
                                <h1
                                    className="HR_primaryclr"
                                    style={{
                                        fontSize: "3vw !important",
                                        fontWeight: "800 !important",
                                        color: "#333 !important",
                                    }}
                                >
                                    AI-Powered Expense Management Built Into Microsoft 365
                                    <br />
                                    <span className="subheadingHD365">Manage every expense on one easy to use platform </span>

                                </h1>
                                <span className="ET365-HerosectionSubheading"></span>
                                <p
                                    className="HR_textclr LMSHR_textclr" style={{ marginTop: "0.4vw" }}

                                >
                                    <p style={{ marginBottom: "0.3vw" }}>
                                        Expense 365 makes expense management refreshingly simple by using AI to scan receipts, automate approvals and manage reimbursements entirely inside Microsoft 365 — so your team spends time on real meaningful work, not paperwork. <br />
                                        Snap a receipt. Submit in seconds. Get reimbursed without the follow-up.
                                    </p>



                                </p>

                                <DemoButtons
                                    LMS365="LMS365"
                                    demobtnText="See Expense Tracker 365 in Action"
                                />
                            </div>
                            <div className="HR_Section1RightSide" style={{ width: "60%" }}>
                                <img
                                    className="HeroSectionImageStyles HDherobanner"
                                    style={{ width: "90%", marginTop: "2vw" }}
                                    alt="Helpdesk"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/hd-banner-image-latest.webp"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Trustedbylogo />
                        <div style={{ paddingTop: "1vw" }}></div>
                        <OverviewExpense365
                            MainHeading="Simplified Enterprise Asset Management Software with AI Integration"
                            MainDescription="Track and manage your assets effortlessly with our AI-powered SharePoint Asset Management system. With automated workflows and intelligent solutions, asset management is streamlined, letting you focus on growing your business."
                            MainImageAlt="ET365"
                        />

                        <div className="featureUIWrapper">
                            <h2
                                style={{ margin: "0px", paddingBottom: "1.8vw", color: "#333" }}
                                className="HR_heading  ETHR_heading LMS_FeatureHeading"
                            >
                                AI-Powered Expense Management Features Built to Reduce Delays, Errors, and Manual Work
                            </h2>
                            <p
                                className="HR_textclr LMSHR_textclr" style={{ marginTop: "0.4vw" }}

                            >From tracking every expense to maintaining healthy cash flow, Expense 365 simplifies end-to-end expense management inside Microsoft 365. Powered by AI-driven automation, it helps businesses automate expense tracking, accelerate approvals, simplify reimbursements, and gain real-time financial visibility with less manual effort.</p>
                            {/* Tabs */}
                            <div className="featureUITabs">
                                {featureData.map((item, index) => (
                                    <button
                                        key={index}
                                        className={`featureUITabBtn ${activeTab === index ? "featureUIActiveTab" : ""
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {item.tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="featureUIContent">
                                {/* Left Side */}
                                <div className="featureUIImageBox">
                                    <img src={featureData[activeTab].icon} alt="" />
                                    {/* <div className="featureUICard featureUICard1">
                                        <div className="featureUIStatus">NEW</div>
                                        <div className="featureUIRow"></div>
                                        <div className="featureUIRow small"></div>
                                    </div>

                                    <div className="featureUICard featureUICard2">
                                        <div className="featureUIStatus">ACTIVE</div>
                                        <div className="featureUIRow"></div>
                                        <div className="featureUIRow small"></div>
                                    </div>

                                    <div className="featureUICard featureUICard3">
                                        <div className="featureUIStatus">OPEN</div>
                                        <div className="featureUIRow"></div>
                                        <div className="featureUIRow small"></div>
                                    </div>

                                    <div className="featureUIFloatingIcon">
                                        {featureData[activeTab].icon}
                                    </div> */}
                                </div>

                                {/* Right Side */}
                                <div className="featureUITextBox">
                                    <h2 className="featureUITitle">
                                        {featureData[activeTab].title}
                                    </h2>

                                    <p className="featureUIDescription">
                                        {featureData[activeTab].description}
                                    </p>

                                    <div className="featureUISubSection">


                                        <ul className="featureUIList">
                                            {featureData[activeTab].points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", padding: "2vw 0vw 0vw 0vw" }}>
                                <DemoButtons
                                    LMS365="LMS365"
                                    demobtnText="Explore Expense 365"
                                />
                            </div>
                        </div>


                        <div class="et-feature-container LMS365FeatureCards" style={{ paddingTop: "2vw" }}>
                            <div class="et-feature-card">
                                <img
                                    decoding="async"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/Ticket-Management.svg"
                                    title=""
                                    alt=""
                                    loading="lazy"
                                ></img>
                                <h3 class="et-feature-title">
                                    Simple to Use, Fast to Deploy
                                </h3>
                                <p class="et-feature-desc">
                                    Get started in minutes with a user-friendly interface. No training or IT support required.
                                </p>
                            </div>

                            <div class="et-feature-card">
                                <img
                                    decoding="async"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/Workflow-Automation.svg"
                                    title=""
                                    alt=""
                                    loading="lazy"
                                ></img>
                                <h3 class="et-feature-title">AI-Powered Receipt & Bill Capture</h3>
                                <p class="et-feature-desc">
                                    Snap and capture receipts with AI-powered scanning that automatically extracts and organizes expense details with accuracy.
                                </p>
                            </div>
                            <div class="et-feature-card">
                                <img
                                    decoding="async"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/SLA-Management.svg"
                                    title=""
                                    alt=""
                                    loading="lazy"
                                ></img>
                                <h3 class="et-feature-title">Smarter Expense Tracking Made Easy</h3>
                                <p class="et-feature-desc">
                                    Track, categorize, and manage all your expenses with clarity anytime, on any device.
                                </p>
                            </div>
                            <div class="et-feature-card">
                                <img
                                    decoding="async"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/Multi-Channel-Support.svg"
                                    title=""
                                    alt=""
                                    loading="lazy"
                                ></img>
                                <h3 class="et-feature-title">Real-Time Insights & Alerts </h3>
                                <p class="et-feature-desc">
                                    Generate real-time expense reports and insights to monitor trends, budgets, anomaly detection and company-wide spending.
                                </p>
                            </div>

                            <div class="et-feature-card">
                                <img
                                    decoding="async"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/Analytics%20&%20Reporting.svg"
                                    title=""
                                    alt=""
                                    loading="lazy"
                                ></img>
                                <h3 class="et-feature-title">Corp Cards & Books Integrations</h3>
                                <p class="et-feature-desc">
                                    Connect your business credit cards to auto-import transactions, map with expense categories & sync with accounts books to reconcile easily.
                                </p>
                            </div>

                            <div class="et-feature-card">
                                <img
                                    decoding="async"
                                    src="https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20365%20Integration.svg"
                                    title=""
                                    alt=""
                                    loading="lazy"
                                ></img>
                                <h3 class="et-feature-title">Designed for Growing SMBs</h3>
                                <p class="et-feature-desc">
                                    Multi-currency support, mileage tracking, and scalable workflows that grow as you do.
                                </p>
                            </div>



                        </div>
                        <div class="et-integration-section LMS_integration-section" >
                            <div style={{ width: "100%" }}>
                                <h2 class="et-integration-title lMS_integration-title" >
                                    Powerful Integrations,<br /> Zero Platform Switching
                                </h2>
                                <p class="et-integration-subtitle lMS_integration-subtitle" >
                                    Expense 365 works seamlessly with Microsoft Teams, SharePoint, Outlook, Power BI, and Power Automate along with QuickBooks and Xero. Manage expenses, approvals, reimbursements, and reporting from one connected workspace without switching between platforms.
                                </p>
                                <div style={{ paddingTop: "1vw" }}>
                                    <DemoButtons
                                        LMS365="LMS365"
                                        demobtnText="Explore Expense 365"
                                    />
                                </div>
                                <span id="pricing" />
                            </div>
                            <div style={{ width: "61%", margin: "0", padding: "0vw", }}>
                                <img
                                    src="https://ik.imagekit.io/cubiclogics/Apps365/ET/expense-tracker-integrations-withoutbg.gif?updatedAt=1772720156797"
                                    alt="Expense 365"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />


                            </div>
                        </div>
                        <div
                            style={{
                                padding: "3vw",
                                background: "none",
                                paddingBottom: "2vw",
                            }}
                            className="overviewsection ETOverViewSection"
                        >
                            <h2 className="HR_heading" style={{ marginBottom: "0.5vw", color: "#333", margin: "0", paddingTop: "1.5vw" }}>
                                Why Choose Expense 365
                            </h2>

                            <p className="AI-DescriptionStyles" style={{ margin: "0" }}>
                                Expense 365 simplifies expense management inside Microsoft 365 by helping businesses track expenses, manage reimbursements, and generate accurate reports from one centralized platform. Built within the Microsoft 365 ecosystem, it gives teams a more structured and organized way to manage business expenses without relying on spreadsheets or manual follow-ups.
                            </p>
                            <p className="AI-DescriptionStyles" style={{ margin: "0" }}>
                                By streamlining approvals and improving expense visibility, Expense 365 helps teams reduce administrative effort, stay organized, and spend more time focused on meaningful work.
                            </p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1vw 0vw" }}>
                                <DemoButtons
                                    LMS365="LMS365"
                                    demobtnText="Get Started with Expense 365 Now!"
                                />
                            </div>

                            <div
                                className="cybersection cybersectionET"
                                style={{ background: "none", paddingBottom: "1vw", paddingTop: "2vw" }}
                            >
                                <CyberSecurity PageName="ET365" />
                            </div>
                        </div>

                        <div></div>

                        <section className="sec">
                            <div>
                                <div
                                    className="easy"
                                    style={{ background: "none", padding: "0vw 5vw 3vw 5vw" }}
                                >
                                    <div className="Avilcard1 LMS_Avilcard1" >
                                        <div className="AvilcardStyle">
                                            <div className="stickerStyles">
                                                <div className="sticker">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/customer-support_wPk-OuZ23.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="custom" style={{ color: "#2323CE" }}>
                                                Customer Support
                                            </h3>
                                            <p className="easypera">
                                                Your Support Team merges technical prowess with sincere
                                                care, fostering trust through expertise and empathy.
                                                They build lasting relationships, transcending mere
                                                service to create meaningful connections.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="availcard2">
                                        <div className="cd1">
                                            <div
                                                className="c1"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon1">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/setting_z7IzKFspuo.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt1">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        {" "}
                                                        AI Enabled Apps
                                                    </h3>
                                                    <p className="easypera">
                                                        Our innovative apps are built with the options of
                                                        Azure AI, Copilot, and custom AI solutions.
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="c2"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon2">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/interface%20(1)_Bn8jFsKJE.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt2">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        Modern UI/UX
                                                    </h3>
                                                    <p className="easypera">
                                                        Every app is crafted using the latest Fluent UI,
                                                        ensuring seamless functionality across all devices.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cd2">
                                            <div
                                                className="c3"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon3">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/cloud-storage_wjvbbJkVt.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt3">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        Swift Deployment
                                                    </h3>
                                                    <p className="easypera">
                                                        Choose any deployment
                                                        method—Teams,
                                                        Outlook, or SharePoint—that suits your preferences.
                                                    </p>
                                                    <span id="ClientsSpeakTestimonial" />
                                                </div>
                                            </div>
                                            <div
                                                className="c4"
                                                style={{
                                                    background: "#f9faffbb",
                                                }}
                                            >
                                                <div className="icon4">
                                                    <img
                                                        src="https://ik.imagekit.io/zn4au2jftpm5/refresh__OBoe0tcU.png"
                                                        alt="Description of Image"
                                                        class="supportimage"
                                                    />
                                                </div>
                                                <div className="txt4">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>
                                                        Free Updates{" "}
                                                    </h3>
                                                    <p className="easypera">
                                                        Our valued subscribers enjoy unlimited support,
                                                        enhancements, features, and updates.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                    <div id="client" className="IdChanges"></div>
                    <div
                        className="HR_whitesection"
                        style={{ background: "none", padding: "0vw 5vw 1vw 5vw" }}
                    >
                        <h2 className="HR_heading HR_MT" style={{ color: "#333", margin: "0" }}>Loved by teams. Trusted by finance leaders worldwide</h2>
                        <p class="et-integration-subtitle CustomerReviewStyles AI-DescriptionStyles">
                            Discover how businesses simplify expense tracking, speed up approvals, and gain better control over company spending with Expense 365.
                        </p>
                        <div className="HR_MT">
                            <OurClients />
                        </div>
                    </div>


                    <div id="integration" className="IdChangesIntegration"></div>

                    <div className="IdChanges"></div>
                    <div className="HR_whitesection" style={{ background: "none" }}>
                        <h2 className="HR_heading HR_MT" style={{ color: "#333", marginBottom: "0vw" }}>
                            Expense 365 Pricing & Plans
                        </h2>
                        <p className="AI-DescriptionStyles" style={{ margin: "0", marginBottom: "1vw" }}>

                            Flexible pricing plans designed to simplify expense management for teams of every size within Microsoft 365.

                        </p>
                        <div className="HR_MT">
                            <div>
                                <Plans appName={"Expense 365"} />
                            </div>
                        </div>
                    </div>
                    <div className="AzureBoxStyles_LMS">
                        <div className="AzureBoxStyles_LMS_1">
                            <img style={{ width: "66%" }} src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png" alt="" />
                            <h3 className="Azureheading" style={{ marginBottom: "0.8vw !important", paddingTop: "0.41vw" }}>Live on Azure</h3>
                            <p className="AzureText" style={{ textAlign: "center" }}>Buy directly from Azure Marketplace or via your enterprise agreement.</p>
                            <a className="Hr_Link" href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1">  Get started on Azure</a>
                        </div>
                        <div className="AzureBoxStyles_LMS_2" >

                            <img style={{ width: "65%" }} src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Random-Images/Untitled%20design%20(21)_nD6tRPn1n9.png" alt="" />
                            <h3 className="Azureheading">Special Pricing for NPOs</h3>

                            <SpecailButtons userCount={"50+"} LMS365="LMS365" hideSpecialrequest="hideSpecialrequest" SpecailButtonsText="Non-profits and government-funded educational institutes can avail exclusive rates." />
                        </div>
                        <div className="AzureBoxStyles_LMS_3">

                            <img style={{ width: "40%" }} src="https://ik.imagekit.io/apps365/Apps365/HD/Untitled%20design%20(27).webp" alt="" />
                            <h3 className="Azureheading" style={{ marginBottom: "0.8vw !important", paddingTop: "0.3vw" }}>Enterprise Pricing for 50+ Users
                            </h3>

                            <SpecailButtons userCount={"50+"} LMS365="LMS365" hideNPOrequest="hideNPOrequest" SpecailButtonsTextUser="Organizations with more than 50 users can avail special pricing." />
                        </div>


                    </div>



                    <span className="privacytext"></span>
                    <div id="faq" className="IdChangesIntegration"></div>
                    <div class="et et-demo-section">
                        <h1 class="et et-demo-heading helpdeskheadingstyle" style={{ margin: "0", padding: "0", color: "#333", paddingTop: "2vw" }}>
                            Finally, an Expense Management System Your Teams Will Actually Want to Use
                        </h1>
                        <p class="et et-demo-subtext AI-DescriptionStyles" style={{ marginBottom: "1vw" }}>
                            See how Expense 365 removes the everyday friction of expense management with simpler submissions, faster approvals, automated workflows, and a seamless Microsoft 365 experience — helping teams spend less time managing expenses and more time getting work done.
                        </p>
                        {/* <div class="et et-button-group">
              <DemoButtons
                hideDemoBtn="fasle"
                trailbtnText="Start Your 14-Day Free Trial button"
              />
            </div> */}
                        <form
                            id="lpgetstartedform"
                            className="lpgetstartedformclass "
                            style={{ padding: "2vw", background: "#f9faffbb", borderRadius: "0.5vw", paddingBottom: "0vw" }}
                        >
                            <div className="FooterContainer">
                                <div className="BottomFormleftimg">
                                    <img className="BottomFormImage" src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/LMS365/LMS365-bottom-form_V3Jq3dsZk.png" alt="" />
                                </div>
                                <div className="FieldsButtonStyles">
                                    <div className="FormFieldStyles">
                                        <h3>Book a Personalized Expense 365 Demo!</h3>
                                        <DemoButtons LMS365demoForm={true} />
                                    </div>
                                    {/* <div className="ButtonandPrivacyText">
                    <PrimaryButton
                      style={{ background: "var(--btn-bg-color)", border: "none", fontSize: "1.1vw" }}
                      id="lpgetstartedsubmitbutton"
                      className="subButton"
                    // onClick={() => submitRequest("getstarted")}
                    >
                      {"Select a Time Slot"}

                    </PrimaryButton>

                  </div> */}
                                </div>
                            </div>
                        </form>
                        <div>
                            <h3 className="HR_faq">Frequently Asked Questions</h3>
                            <Accordion items={accordionItems} />
                        </div>
                    </div>
                </div>
                <Footer ET365={"ET365"} />
            </HelmetProvider>
        </>
    );
}
export default Expense365;
