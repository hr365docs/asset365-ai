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
// import { mouseflow} from "react-mouseflow";
const logos = [
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/great-place_C3JVU5GXk.png'
];
function ET365() {

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
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const getEmbedUrl = (url) => {
        if (url.includes('youtube.com/watch?v=')) {
            return url.replace('watch?v=', 'embed/');
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('vimeo.com/')) {
            const videoId = url.split('vimeo.com/')[1];
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
        document.title = "Helpdesk Software, IT Ticketing System - Helpdesk 365";
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Streamline workflows with a Microsoft helpdesk. Try now for faster ticket resolution. Helpdesk software for IT and internal support.!"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Streamline workflows with a Microsoft helpdesk. Try now for faster ticket resolution. Helpdesk software for IT and internal support.";
            document.head.appendChild(newMeta);
        }
    }, []);
    // const AppName = React.useContext(MyContext);



    const accordionItems = [
        {
            title: "How do I create a ticket in Microsoft?",
            content: (
                <ul>
                    To create a ticket in Microsoft Helpdesk 365:
                    <li>Open Microsoft Teams and go to the Helpdesk 365 app.</li>
                    <li>Click New Ticket to start.</li>
                    <li>
                        Fill in the details, including the issue, priority, and any
                        attachments.
                    </li>
                    <li>Submit the ticket, and it’s instantly logged.</li>
                    You can track updates and communicate with the support team directly
                    in Teams.
                </ul>
            ),
        },
        {
            title: "Can you use Microsoft Teams as a ticketing system?",
            content:
                "Using Microsoft Teams as a helpdesk 365 ticketing system enables employees to get instant support and resolve issues faster. Both employees and the support team collaborate easily on the same platform, with the added benefit of 24/7 accessibility for continuous assistance.",
        },
        {
            title: "Is SharePoint a Ticketing System?",
            content: (
                <ul>
                    SharePoint a collaboration platform for managing documents and
                    workflows for millions of Microsoft 365 users. However, you can
                    customize it for ticket tracking and effective communication using:
                    <li>Lists: To log and track tickets.</li>
                    <li>Workflows: For automating assignments and updates.</li>
                    <li>Power Automate: For advanced automation.</li>
                    For a more robust ticketing solution, tools like Helpdesk 365
                    integrate seamlessly with SharePoint. So that you can easily manage
                    your SharePoint ticketing system with more efficiency.
                </ul>
            ),
        },
        {
            title: "What is a SharePoint system?",
            content:
                "SharePoint is a web-based platform that improves your organization efficiency by simplifying data management and access. SharePoint serves as an enterprise information hub, easily customizable to support intranet, extranet, and internet sites.",
        },
        {
            title: "Which Tools is SharePoint?",
            content:
                "Organizations use Microsoft SharePoint to create websites. You can use it as a secure place to store, organize, share, and access information from any device. All you need is a web browser, such as Microsoft Edge, Internet Explorer, Chrome, or Firefox. Want to learn more?",
        },
    ];
    // const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    // const [selectedImageUrl, setSelectedImageUrl] = React.useState("");

    // const openLightbox = (imageUrl) => {
    //   setSelectedImageUrl(imageUrl);
    //   setLightboxOpen(true);
    // };

    // const closeLightbox = () => {
    //   setLightboxOpen(false);
    // };
    const tabs1 = [
        {
            id: 1,
            title: "Smart Expense Management",
            // Heading: "Focus on what ‘s necessary: SharePoint IT Ticketing System",
            content: (
                <ul>
                    <li>
                        Track, categorize, and analyze business expenses for complete financial clarity.
                    </li>
                    <li>
                        Monitor income sources and spending patterns to improve budgeting.
                    </li>
                    <li>
                        Supports multi-currency tracking for global operations.
                    </li>
                </ul>
            ),
            image:
                "https://ik.imagekit.io/zn4au2jftpm5/hr365/Expense-tracker/2_pv5EH9x6p.png?updatedAt=1753085224054",
        },
        {
            id: 2,
            title: "Fast Deployment & Any Device Access",
            // Heading: " Comprehensive Ticket Management Features",
            content: (
                <ul>
                    <li>
                        Set up in a few minutes, with no technical complexity.
                    </li>
                    <li>Access from desktop, tablet, or mobile devices anytime.</li>
                    <li>Manage and approve expenses on the go with full functionality.</li>
                </ul>
            ),
            image:
                "https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/TicketManagement_NawCmGYkO.gif?updatedAt=1719903031399",
        },
        {
            id: 3,
            title: "AI-Powered Receipt & Bill Capture",
            // Heading:
            //     "Enhance Operational Efficiency with SLAs in our Cloud-Based HR Ticketing System",
            content: (
                <ul>
                    <li>
                        Instantly scan and upload receipts using the built-in receipt scanner.
                    </li>
                    <li>
                        Digitize and attach bills for streamlined approval and tracking.
                    </li>
                    <li>
                        Automate travel costs and recurring expenses using simplified input methods for greater accuracy.
                    </li>
                    <li>
                        Store everything securely with digital proof for audits.
                    </li>
                </ul>
            ),
            image:
                "https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/SLA_SKQ5cy1rQf.gif?updatedAt=1719814962251",
        },



    ];
    const tabs2 = [
        {
            id: 1,
            title: "Enterprise-Grade Security & Compliance",
            // Heading: "Customize Your SharePoint Helpdesk for Seamless Operations",
            content: (
                <>
                    <ul>
                        <li>
                            Built on Microsoft 365’s Zero Trust model with encryption.
                        </li>
                        <li>
                            Role-based access and secure user authentication for controlled visibility.
                        </li>
                        <li >
                            Aligned with compliance standards to safeguard sensitive financial data.
                        </li>

                    </ul>

                </>
            ),
            image:
                "https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/approve_Q5cb5xjOH.gif?updatedAt=1719898618060",
        },
        {
            id: 2,
            title: "Seamless Microsoft 365 Integrations",
            // Heading: "Customize Your SharePoint Helpdesk for Seamless Operations",
            content: (
                <ul>
                    <li>
                        Integrate with Power BI, Teams, Power Automate and SharePoint effortlessly.
                    </li>
                    <li>
                        Enable workflow automation, smart alerts, and real-time analytics.
                    </li>
                    <li>
                        Consolidate expense data with your existing Microsoft tools.
                    </li>

                </ul>
            ),
            image:
                "https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/approve_Q5cb5xjOH.gif?updatedAt=1719898618060",
        },
        {
            id: 3,
            title: "Real-Time Notifications & Predictive Insights",
            // Heading: "Customize Your SharePoint Helpdesk for Seamless Operations",
            content: (
                <ul>
                    <li>
                        Get alerts on budget limits, anomalies, and spending thresholds.
                    </li>
                    <li>
                        Use predictive analytics to optimize future budgeting and expense forecasting for smarter business planning.
                    </li>
                    <li>
                        Make timely, informed decisions backed by instant data visibility.
                    </li>

                </ul>
            ),
            image:
                "https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/approve_Q5cb5xjOH.gif?updatedAt=1719898618060",
        },
        // {
        //     id: 4,
        //     title: "Rules and Automation",
        //     Heading: "Drive Efficiency with Customized Rules and Automation",
        //     content: (
        //         <ul>
        //             <li>
        //                 Boost operational efficiency with Apps365’s 'Rule & Automation'
        //                 feature. Customize and automate ticket management by creating
        //                 advanced rules for generating, assigning, and routing tickets based
        //                 on your needs.
        //             </li>
        //             <li>
        //                 This feature streamlines ITSM operations, ensures prompt attention
        //                 to every ticket, and saves valuable time and resources.
        //             </li>
        //             <li>
        //                 Automated escalation protocols ensure critical issues receive
        //                 immediate attention, reducing resolution times for high-priority
        //                 tickets.
        //             </li>
        //             <li>
        //                 Flexible rule configuration allows for dynamic adjustments to
        //                 workflows, adapting to changing operational requirements and
        //                 priorities.
        //             </li>
        //         </ul>
        //     ),
        //     image:
        //         "https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/Rules&automation_qYBfGojFe.gif?updatedAt=1719903031561",
        // },
    ];
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Simple, Powerful Expense Tracking for Growing Teams
                    </title>
                    <meta
                        name="description"
                        content="Simplify Expense Management for Small Businesses with Expense 365. Control costs, automate tracking, and focus on business growth — not spreadsheets."
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




                {/* <Header HR365header="ET365" /> */}

                <div style={{ backgroundColor: "unset", background: "linear-gradient(110deg, #daeaf6, #e8def8, #fdf0f0, #e8def8, #daeaf6)" }}>
                    <div className="HR_panel" style={{ padding: "5vw", backgroundColor: "unset", background: "none" }}>
                        <div className="HR_FlexCenterSpcBetween HR_ParentSection1 ET365HomepageParentsection">
                            <div className="HR_Section1LeftSide ET-HR_Section1LeftSide">

                                <h1 className="HR_primaryclr" style={{ fontSize: "3vw !important", fontWeight: "800 !important", color: "#333 !important" }}>
                                    Push a Button, Breathe Easy!

                                </h1>
                                <span className="ET365-HerosectionSubheading" > AI Tracks Your Expenses While You Focus
                                </span>
                                <p className="HR_textclr" style={{ marginTop: "1vw" }}>
                                    Say goodbye to receipts, errors, and delays. Let AI automate, organize and <br />track your expenses with a single click.

                                </p>
                                <DemoButtons />
                            </div>
                            <div className="HR_Section1RightSide" style={{ width: "63%" }}>
                                <img
                                    className="HeroSectionImageStyles"
                                    style={{ width: "100%" }}
                                    alt="MainImage"
                                    src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Industry%20Page/Vector%20verticale%20500x350%20-%202025-07-04T144540.231_UwDVZ7lHI.webp"
                                />
                            </div>
                        </div>


                    </div>
                    <div>
                        <div className='Badgesection' style={{ background: "none" }}>
                            <h2 className='Badgeheading' style={{ paddingTop: "0px" }}>Trusted by 12,100+ deployments from 172 countries</h2>
                            <div className='BadgeShoworHideDesktop'>
                                <div className='Hr_flex badgedistance '>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png" alt="logo" width="100%"
                                            height="100%" />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png" alt=" logo" width="100%"
                                            height="100%" />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png" alt="logo" width="100%"
                                            height="100%" />
                                    </div>
                                    <div className='imgwidth' id='imgrightborder'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png" alt="logo" width="100%"
                                            height="100%" />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg" alt="logo"
                                            className='trustimg' />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg" alt="logo" className='trustimg' />
                                    </div>
                                    <div className='imgwidth' id='imgrightborder'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg" alt="logo" className='trustimg' />
                                    </div>
                                    {/* <div className='imgwidth' id='imgrightborder'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/High%20Performer%201_L23PqEV-m.svg" alt="logo" className='trustimg' />
                        </div> */}
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png" alt="logo" className='trustimgazure' />
                                    </div>
                                    <div className="imgwidth">
                                        <img
                                            src={
                                                AppName === "Apps365"
                                                    ? "https://ik.imagekit.io/apps365/Badges/Great-Place-To-Work.png?updatedAt=1759827837133"
                                                    : "https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/Great-Place-To-Work_F8YXClgZl.png?updatedAt=1759830185421"
                                            }
                                            alt="Great Place To Work Badge"
                                            className="trustimgLast"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='BadgeShoworHideMobile'>
                                <div className='Hr_flex badgedistance '>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png" alt="logo" width="100%"
                                            height="100%" />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png" alt=" logo" width="100%"
                                            height="100%" />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png" alt="logo" width="100%"
                                            height="100%" />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png" alt="logo" width="100%"
                                            height="100%" />
                                    </div>
                                </div>
                                <div className='Hr_flex badgedistance '>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg" alt="logo"
                                            className='trustimg' />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg" alt="logo" className='trustimg' />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg" alt="logo" className='trustimg' />
                                    </div>
                                    {/* <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/High%20Performer%201_L23PqEV-m.svg" alt="logo" className='trustimg' />
                        </div> */}
                                </div>
                                <div className='Hr_flex badgedistance '>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png" alt="logo" className='trustimgazure' />
                                    </div>
                                    <div className='imgwidth'>
                                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/great-place_C3JVU5GXk.png" alt="logo" className='trustimgLast' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <LogoSlider logos={logos} />
                            </div>
                        </div>
                        <OverviewCommonET MainHeading="Made for Business Success" MainDescription="From tracking every expense to staying cash-flow positive—Expense 365 makes managing finances effortless within Microsoft 365." MainImageAlt="ET365" />
                        <span id="Features" />
                        <div style={{ background: "none" }}>
                            <h2 style={{ margin: "0px", paddingTop: "3vw" }} className="HR_heading  ETHR_heading">Explore the Core Features of Expense 365
                            </h2>
                            <div class="et-feature-container">
                                <div class="et-feature-card">
                                    <img decoding="async" src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/office_a5GgL_th7R.svg?updatedAt=1735815651104" title="" alt="" loading="lazy"></img>
                                    <h3 class="et-feature-title">Simple to Use, Fast to Deploy</h3>
                                    <p class="et-feature-desc">
                                        Get started in minutes with a user-friendly interface—no training or IT support required.
                                    </p>
                                </div>



                                <div class="et-feature-card">
                                    <img decoding="async" src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/cpu_VznWkbJf4F.svg?updatedAt=1735815651661" title="" alt="" loading="lazy"></img>
                                    <h3 class="et-feature-title">AI-Powered Receipt &amp; Bill Capture</h3>
                                    <p class="et-feature-desc">
                                        Snap, scan, and automate approvals with intelligent tools that simplify paperwork.
                                    </p>
                                </div>
                                <div class="et-feature-card">
                                    <img decoding="async" src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/learning_wG45ZTA_ap.svg?updatedAt=1735815637403" title="" alt="" loading="lazy"></img>
                                    <h3 class="et-feature-title">Smarter Expense Tracking Made Easy</h3>
                                    <p class="et-feature-desc">
                                        Track, categorize, and manage all your expenses with clarity—anytime, on any device.
                                    </p>
                                </div>



                                <div class="et-feature-card">
                                    <img decoding="async" src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/stop-watch_oRW1quKVLk.svg?updatedAt=1735815651189" title="" alt="" loading="lazy"></img>
                                    <h3 class="et-feature-title">Real-Time Insights &amp; Alerts</h3>
                                    <p class="et-feature-desc">
                                        Stay on top of spending with instant notifications, budget thresholds, and anomaly detection.
                                    </p>
                                </div>
                                <div class="et-feature-card">
                                    <img decoding="async" src="https://www.apps365.com/wp-content/uploads/2025/01/settings.png" title="" alt="" loading="lazy"></img>
                                    <h3 class="et-feature-title">Corp Cards & Books Integrations
                                    </h3>
                                    <p class="et-feature-desc">
                                        Connect your business credit cards to auto-import transactions, map with expense categories & sync with accounts books to reconcile easily.
                                    </p>
                                </div>
                                <div class="et-feature-card">
                                    <img decoding="async" src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/web-optimization_PQSCi1OQ3Q.svg?updatedAt=1735815636848" title="" alt="" loading="lazy"></img>
                                    <h3 class="et-feature-title">Designed for Growing SMBs</h3>
                                    <p class="et-feature-desc">
                                        Multi-currency support, mileage tracking, and scalable workflows that grow as you do.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '3vw', background: "none", paddingBottom: "0px" }} className="overviewsection ETOverViewSection">
                            <h2 className="HR_heading" style={{ marginBottom: "0.5vw" }}>Why Choose Expense 365</h2>

                            <p style={{ margin: "0" }}>Simple, automated expense tracking built for growing businesses—no spreadsheets, no hassle.
                            </p>
                            <div className='cybersection cybersectionET' style={{ background: "none" }}>
                                <CyberSecurity PageName="ET365" />
                            </div>
                        </div>

                        <div></div>

                        <section className="sec">
                            <div>
                                <div className="easy" style={{ background: "none" }}>
                                    <div className="Avilcard1" style={{ background: "#fcfcfc", border: "1px solid #fff" }}>
                                        <div className='AvilcardStyle'>
                                            <div className='stickerStyles'>
                                                <div className="sticker">
                                                    <img src="https://ik.imagekit.io/zn4au2jftpm5/customer-support_wPk-OuZ23.png" alt="Description of Image" class="supportimage" />
                                                </div>
                                            </div>
                                            <h3 className="custom" style={{ color: "#2323CE" }}>Customer Support</h3>
                                            <p className='easypera'>Your Support Team merges technical prowess with sincere care, fostering trust through expertise and empathy. They build lasting relationships, transcending mere service to create meaningful connections.</p>
                                        </div>
                                    </div>
                                    <div className="availcard2" >
                                        <div className="cd1" >
                                            <div className="c1" style={{ background: "#fcfcfc", border: "1px solid #fff" }}>
                                                <div className="icon1">
                                                    <img src="https://ik.imagekit.io/zn4au2jftpm5/setting_z7IzKFspuo.png" alt="Description of Image" class="supportimage" />
                                                </div>
                                                <div className="txt1"><h3 className="Swift" style={{ color: "#2323CE" }}> AI Enabled Apps</h3>
                                                    <p className="easypera">Our innovative apps are built with the options of Azure AI, Copilot, and custom AI solutions.</p>
                                                </div>
                                            </div>

                                            <div className="c2" style={{ background: "#fcfcfc", border: "1px solid #fff" }}>
                                                <div className="icon2">
                                                    <img src="https://ik.imagekit.io/zn4au2jftpm5/interface%20(1)_Bn8jFsKJE.png" alt="Description of Image" class="supportimage" />
                                                </div>
                                                <div className="txt2">
                                                    <h3 className="Swift" style={{ color: "#2323CE" }}>Modern UI/UX</h3>
                                                    <p className="easypera">Every app is crafted using the latest Fluent UI, ensuring seamless functionality across all devices.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cd2">
                                            <div className="c3" style={{ background: "#fcfcfc", border: "1px solid #fff" }}>
                                                <div className="icon3">
                                                    <img src="https://ik.imagekit.io/zn4au2jftpm5/cloud-storage_wjvbbJkVt.png" alt="Description of Image" class="supportimage" />
                                                </div>
                                                <div className="txt3"><h3 className="Swift" style={{ color: "#2323CE" }}>Swift Deployment​</h3>
                                                    <p className="easypera">Choose any deployment<span id="ClientsSpeakTestimonial" /> method—Teams, Outlook, or SharePoint—that suits your preferences.</p>
                                                </div>
                                            </div>
                                            <div className="c4" style={{ background: "#fcfcfc", border: "1px solid #fff" }}>
                                                <div className="icon4">
                                                    <img src="https://ik.imagekit.io/zn4au2jftpm5/refresh__OBoe0tcU.png" alt="Description of Image" class="supportimage" />
                                                </div>
                                                <div className="txt4"><h3 className="Swift" style={{ color: "#2323CE" }}>Free Updates </h3>
                                                    <p className="easypera">Our valued subscribers enjoy unlimited support, enhancements, features, and updates.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* <GetOfferPage Type="Image"/> */}

                    {/* <div id="features" className="IdChanges"></div>
                <div style={{ background: "#eff2fb", margin: "0", paddingTop: "2vw" }}>
                    <h2 className="HR_heading" style={{ margin: "0" }}>Key Features of Expense 365</h2>
                    <p>Gain full visibility into your business spending with the power of reliable business expense tracker.
                    </p>
                    <p style={{ margin: "0" }}> Minimize admin work and maximize financial visibility effortlessly.
                    </p>
                </div>
                <div>
                    <TabsWithImage tabs={tabs1} />
                </div>
                <div>
                    <TabsWithImage tabs={tabs2} />
                </div> */}




                    <div id="client" className="IdChanges"></div>
                    <div className="HR_whitesection" style={{ background: "none" }}>
                        <h2 className="HR_heading HR_MT">Customer Testimonials</h2>

                        <div className="HR_MT">
                            <OurClients />
                        </div>

                    </div>
                    <div class="et-integration-section" style={{ background: "none" }}>
                        <h2 class="et-integration-title">Boost Productivity with Seamless Integrations</h2>
                        <p class="et-integration-subtitle">
                            Easily set up, customize, and manage the cloud-based business expense tracker with powerful tools to handle expense and finances of the organization.
                        </p>

                        <div class="et-integration-grid">
                            <div class="et-integration-card">
                                <div class="et-icon-space"><img
                                    style={{ width: "100%" }}
                                    alt="MainImage"
                                    src="https://ik.imagekit.io/zn4au2jftpm5/CLM365/Power%20Automate%20(1)_eXEyQVXbrh.png?updatedAt=1735914125187"
                                />  </div>
                                <h3 class="et-card-title">Power Automate</h3>
                                <p class="et-card-description">
                                    Save time by automating ticket updates, notifications, and approvals for smoother support management.
                                </p>
                            </div>

                            <div class="et-integration-card">
                                <div class="et-icon-space"><img
                                    style={{ width: "100%" }}
                                    alt="MainImage"
                                    src="https://ik.imagekit.io/zn4au2jftpm5/CLM365/Power%20Bi%20(1)_Kds_Hz7QcQ.png?updatedAt=1735914124948"
                                /></div>
                                <h3 class="et-card-title">Power BI</h3>
                                <p class="et-card-description">
                                    Generate clear and detailed reports to better analyse support performance and make informed decisions.
                                </p>
                            </div>

                            <div class="et-integration-card">
                                <div class="et-icon-space"><img
                                    style={{ width: "100%" }}
                                    alt="MainImage"
                                    src="https://ik.imagekit.io/zn4au2jftpm5/CLM365/power%20apps%20(1)_fKJEyRsAdu.png?updatedAt=1735914124951"
                                /></div>
                                <h3 class="et-card-title">Power Apps</h3>
                                <p class="et-card-description">
                                    Use AI chatbots to instantly answer common customer support queries or provide ticket updates.
                                </p>
                            </div>

                            <div class="et-integration-card">
                                <div class="et-icon-space"><img
                                    style={{ width: "100%" }}
                                    alt="MainImage"
                                    src="https://ik.imagekit.io/zn4au2jftpm5/CLM365/Power%20virtual%20Agent%20(1)_F7DLaFcFoe.png?updatedAt=1735914125177"
                                /></div>
                                <h3 class="et-card-title">Power Virtual Agent</h3>
                                <p class="et-card-description">
                                    Build custom apps to enhance ticketing workflows and integrate seamlessly with Expense 365.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="integration" className="IdChangesIntegration"></div>

                    <div className="IdChanges"></div>
                    <div className="HR_whitesection" style={{ background: "none" }}>
                        <h2 className="HR_heading HR_MT" id="pricing">
                            Expense 365 Plans
                        </h2>
                        <div className="HR_MT">
                            <div>
                                <Plans appName={"Expense 365"} />
                            </div>
                        </div>


                    </div>
                    <div className="Azuersection" style={{ background: "none", paddingBottom: "0vw", paddingTop: "0vw" }}>
                        <div className='AzureLogoText'>
                            <a href='https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1' target='_blank'>
                                <img className='AzureImage' src='https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png' alt='Azure' />
                            </a>
                            <p className='AzureText'>
                                Using Azure? now you can <a href='https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1' target='_blank'>
                                    buy
                                </a>
                                on Azure Marketplace or using your enterprise agreement
                            </p>
                        </div>
                    </div>
                    <SpecailButtons userCount={"50+"} />
                    {/* <div class="et-integration-section">
                    <h2 class="et-integration-title">Seamlessly Track and Control Your Business Spending with Expense 365</h2>
                    <p class="et-integration-subtitle">
                        Experience hassle-free expense management.
                    </p>
                    </div> */}
                    <span className="privacytext"></span>
                    <div id="faq" className="IdChangesIntegration"></div>
                    <div class="et et-demo-section">
                        <h1 class="et et-demo-heading">
                            See Expense 365 in Action
                        </h1>
                        <p class="et et-demo-subtext">
                            Discover how Expense 365 gives you total control over your business spending. See every powerful feature in action, tailored for your team’s needs.
                        </p>
                        <div class="et et-button-group">
                            <DemoButtons />
                        </div>
                    </div>
                </div>
                <Footer ET365={"ET365"} />
            </HelmetProvider >
        </>
    );
}
export default ET365;
