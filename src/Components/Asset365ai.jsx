import * as React from 'react';
import DemoButtons from './Utiilities/DemoButtons';
import { FaExpand } from "react-icons/fa";
import ImageSction1 from "../Assests/Images/Ed365/ImageSection1.png";
import ImageSlider from './Utiilities/ImageSlider';
import Plans from './Utiilities/Plans';
import Accordion from './Utiilities/AccordionItem';
import Lightbox from './Utiilities/Lightbox';
import SpecailButtons from './Utiilities/SpecialButtons';
import Header from './Header and Footer/Header';
import Footer from './Header and Footer/Footer';
import ScrollToTop from './Utiilities/ScrolltoTop';
import G2Badge from './Utiilities/G2Badge';
import TabsWithImage from './Utiilities/TabsWithImage';
import Availability from './Utiilities/Availability';
import OurClients from './Utiilities/OurClients';
import Integration from './Utiilities/Integration';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect, useState } from 'react';
import GetOfferPage from './Utiilities/GetOfferPage';
import Azuer from './Utiilities/Azuer';
import CyberSecurity from './Utiilities/demo';
import CustomerSupport from './Utiilities/CustomerSupport';
import ComparisonSection from './ComparisonSection';
import CLMClient from './Utiilities/CLMClient';
import GlobalFooter from './GlobalMultiple/GlobalFooter';
import OverviewExpense365 from './GlobalMultiple/OverviewExpense365';
function Asset365ai() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const featuresEndtoEnd = [
        {
            title: "AI-Powered Asset Tracking ",
            desc: "Automatically organize asset information, identify asset details, and improve visibility with AI-powered asset management capabilities.",
            icon : (<>
                <div class="feature-icon fi-teal"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg></div></>)
            
        },
        {
            title: "Automated Asset Workflows ",
            desc: "Streamline asset-related processes with automated requests, approvals, assignments, notifications, and reminders. Reduce administrative tasks and ensure consistent asset management processes across teams.",
            icon: (
                <>
                    <div class="feature-icon fi-orange"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div></>
            )
            
        },
        {
            title: "Centralized Asset Inventory Management ",
            desc: "Maintain accurate records of hardware, software, and business assets with centralized inventory tracking and real-time visibility. ",
            icon: (
                <>
                    <div class="feature-icon fi-purple"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div></>
            )
            
        },
        {
            title: "Audit Logs & Activity Tracking ",
            desc: "Maintain complete visibility into asset activities with detailed audit records. Track system changes, user actions, and asset movement history to support governance, accountability, and compliance requirements.",
            icon: (<><div class="feature-icon fi-green"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
            </>)
            
        },
        {
            title: "Complete Asset Lifecycle Management",
            desc: "Manage assets throughout every stage of their lifecycle—from acquisition and deployment to maintenance, renewal, replacement, and retirement. ",
            icon: (
                <><div class="feature-icon fi-gold"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                </>
            )
           
        },
        {
            title: "Reporting & Analytics",
            desc: "Monitor asset usage, inventory trends, ownership details, and lifecycle performance with centralized dashboards and reports to make better decisions.",
            icon: (
                <>
                    <div class="feature-icon fi-navy"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
                </>
            )
            
        },
        
    ];
    const dataIntegration = [
        {
            title: "SharePoint",
            desc: "Store asset records, ownership details, inventory information, and lifecycle updates in SharePoint with structured asset management capabilities.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/sharepoint-logo-_cmiWFaZqe.webp"
        },
        {
            title: "Microsoft Teams",
            desc: "Enable teams to access asset information, collaborate on requests, and manage asset-related activities directly within Microsoft Teams.",
            img: "https://ik.imagekit.io/apps365/Apps365/HD/MS%20teams.webp?updatedAt=1762945136977"
        },
        {
            title: "Outlook",
            desc: "Turns asset-related emails into trackable entries, allowing your team to manage asset requests and updates directly from their inbox and stay organized.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/microsoft-outlook-icon-logo_gDHQpwu35.png"
        },
        {
            title: "Power Automate",
            desc: "Automates routine asset management tasks and workflows, saving time and reducing manual effort while keeping every process on track. ",
            img: "https://ik.imagekit.io/zn4au2jftpm5/CLM365/Power%20Automate%20(1)_eXEyQVXbrh.png?updatedAt=1735914125187"
        },
        {
            title: "Power Apps",
            desc: "Lets you create custom apps that fit your asset management needs, helping teams track assets, manage updates, and work more efficiently..",
            img: "https://ik.imagekit.io/apps365/Lp-pages/Powerapps-logo.svg.webp"
        },
         {
            title: "Power BI",
            desc: "Transform asset data into visual dashboards and reports to understand inventory trends, utilization, ownership, and lifecycle insights. ",
            img: "https://ik.imagekit.io/apps365/Apps365/HD/1.webp"
        },
    ];
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const dynamicImages = [
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112',
        // Add more image URLs as needed
    ];
    const planData = [
        {
            name: 'Standard',
            price: '$49',
            sup: '99',
            text: 'Standard Plan Features',
            textY: 'per month, billed yearly',
            features: ['Minimum 5 users', 'Max 30 contracts / year', 'Unlimited support through email only', 'Integrates with Microsoft 365', 'Data stays within Microsoft 365', 'Contract Authoring', 'One level approval flow', 'Negotiation', 'Execution'],

        },
        {
            name: 'Plus',
            price: '$69',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: ['Minimum 5 users', 'Max 60 contracts / year', 'Unlimited support through email only', 'Free updates via MS store', 'Mobile responsive', 'Limited Approval Workflows', 'Draft, Negotiate & Execute', 'Contract Repository', 'Clause Library', 'Reports'],
        },
        {
            name: 'Premium',
            price: '$89',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: ['Minimum 5 users', 'Max 120 contracts / year', 'Additional 10 contracts/month at $89.99', 'Unlimited support includes live chat', 'Free updates with support', '3 Contract templates', 'Two Level Approvals', 'Alerts & Notifications', 'Version control', 'Amendment', 'Renewals', 'Advance Search Capabilities', 'Advance Reporting', 'Role based Security', 'Add Documents'],
        },
        {
            name: 'Enterprise',
            price: '$129',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: ['Minimum 5 users', 'Max 240 contracts / year', 'Additional 10 contracts/month at $129.99', 'Unlimited support with screen sharing', '7 Contract templates', 'Multilevel Approvals', 'Obligation Management', 'Import Existing Contracts', 'AI based Obligations', 'Audit Trail', 'Activity Log', 'Add Documents', 'Risk Assessment', 'Approval through Emails', 'Digital Signature', 'Dashboard', 'MS Teams & Outlook App'],
        },
    ];
    const data = [

        {
            heading: 'Assets depreciation – calculation &amp; reporting',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/Depreciation_details_QEJu2iBIX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664186732101',
        },
        {
            heading: 'Bar code &amp; QR code',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/bar_code_O1_82R9Ki.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664169542304',
        },
        {

            heading: 'Assets Report',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/bar_code_O1_82R9Ki.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664169542304',
        },
        {

            heading: 'Connect Asset 365 with your other apps',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384',
        },


        // Add more objects as needed
    ];
    const accordionItems = [
        {
            title: '1. Can Asset 365 AI replace our existing Excel-based asset tracking process?', content: `Yes. Asset 365 AI replaces manual spreadsheets with a centralized Microsoft 365 asset management system where organizations can track assets, ownership, status, assignments, and lifecycle information in one structured platform. `
        },
        {
            title: `2. Why should we choose Asset 365 AI instead of a standalone asset management software?`, content: `Asset 365 AI is built within the Microsoft 365 ecosystem, allowing organizations to manage assets using familiar tools like SharePoint and Teams while reducing the need for an additional disconnected platform.`
        },
        {
            title: `3. Do we need to migrate all our existing asset data to start using Asset 365 AI?`,
            content: `No. Organizations can import existing asset information and gradually move from spreadsheets or legacy systems into Asset 365 AI based on their requirements.`
        }, 
        {
            title: '4. Is Asset 365 AI only suitable for IT assets?',
            content: `Asset 365 AI can manage various asset types including IT hardware, software assets, equipment, inventory, and business resources. Organizations can configure asset categories based on their needs.`
        },
        {
            title: '5. Can Asset 365 AI manage the complete asset lifecycle?',
            content: `Yes. Asset 365 AI supports asset tracking throughout the lifecycle, including asset registration, assignment, ownership tracking, maintenance, renewals, returns, and retirement. `
        },
        {
            title: '6. Does Asset 365 AI work with our existing Microsoft 365 licenses?',
            content: `Asset 365 AI is designed to work within the Microsoft 365 environment. The required Microsoft licensing depends on your users, permissions, and Microsoft services being used. `
        },
        {
            title: '7. Where is our asset data stored?',
            content: `Asset information remains within your Microsoft 365 environment, leveraging Microsoft services such as SharePoint for data storage and Microsoft security controls. `
        },
        {
            title: '8. Can different departments manage their own assets with separate permissions?',
            content: `Yes , Asset 365 AI supports role-based access control, allowing organizations to define permissions based on departments, users, and responsibilities.`
        },
        {
            title: '9. Can we track who owns or currently uses an asset?',
            content: `Yes, Asset 365 AI helps organizations track asset assignments, ownership details, location, status, and asset history for better accountability.`
        },
        {
            title: '10. Can Asset 365 AI  send alerts for warranties, renewals, or important asset dates?',
            content: `Yes. Organizations can configure automated notifications and workflows for important asset events such as warranty expiry, renewals, and lifecycle milestones. `
        },
        {
            title: '11. Can Asset 365 AI integrate with Microsoft Teams?',
            content: `Yes. Asset 365 AI works within the Microsoft ecosystem and can support collaboration through Microsoft Teams alongside SharePoint and other Microsoft 365 services. `
        },
        {
            title: '12. Is Asset 365 AI suitable for enterprise organizations with thousands of assets?',
            content: `Yes, Asset 365 AI is designed to support organizations that need centralized asset visibility, structured workflows, reporting, and secure access management across teams. `
        },
        {
            title: '13. Can administrators customize asset fields and workflows?',
            content: `Yes. Organizations can configure asset information, categories, workflows, and tracking processes based on their operational requirements. `
        },
        {
            title: '14. How does Asset 365 AI improve asset visibility compared to manual tracking?',
            content: `Asset 365 AI provides centralized records, real-time status visibility, ownership tracking, lifecycle information, and reporting capabilities that are difficult to maintain through spreadsheets.`
        },
        {
            title: '15. Can Asset 365 AI support software inventory management?',
            content: `Yes. Asset 365 AI can help organizations maintain software asset records, track inventory information, and improve visibility into software-related assets. `
        },
        {
            title: '16. Does Asset 365 AI use AI for asset management?',
            content: `Yes. Asset 365 AI includes AI-powered capabilities to help organizations analyze asset information, improve visibility, and automate asset management activities.`
        },
        {
            title: '17. How quickly can we deploy Asset 365 AI?',
            content: `Deployment time depends on asset volume, configuration requirements, and integration needs. Organizations can start with core asset tracking and expand capabilities based on their requirements. `
        },
        {
            title: '18. Can Asset 365 AI support compliance and audit requirements?',
            content: `Yes. Asset 365 AI provides structured asset records, access controls, tracking history, and reporting visibility to support governance and audit processes.`
        },
        {
            title: '19. Which currency are the prices listed in?',
            content: `All prices are listed in USD.`
        }
    ];
    
    const tabs = [
        {
            id: 6, title: 'AI Powered', Heading: 'Manage Assets Smarter With AI-Powered Intelligence', content: (
                <ul>
                    <li>
                        Automatically categorize and organize asset information to improve visibility and reduce manual effort.    
                    </li>
                    <li>
                        Use AI-powered insights to identify asset details, ownership information, and lifecycle status faster.  
                    </li>
                    <li>
                        Generate intelligent summaries and recommendations to help teams make better asset management decisions.
                    </li>
                    <li>
                        Automate repetitive asset management tasks, notifications, and routine workflows. 
                    </li>
                    <li id='Comparison'>
                        Use AI capabilities with Microsoft 365 to access relevant asset information and improve operational efficiency.  
                    </li>

                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/Asset-AI-Powered.png'  
        },
        {
            id: 1, title: 'Microsoft Ecosystem', Heading: 'Built Natively for Microsoft 365', content: (
                <ul>
                    <li>
                        Manage assets within the Microsoft ecosystem using SharePoint, Microsoft 365, and Teams.   
                    </li>
                    <li>
                       Keep asset information centralized while leveraging your existing Microsoft 365 environment.    
                    </li>
                    <li>
                       Connect asset tracking with Microsoft tools your teams already use.   
                    </li>
                    <li>
                       Maintain secure access with Microsoft permissions, authentication, and role-based controls. 
                    </li>
                    <li>
                        Improve collaboration between IT, operations, and business teams. 
                    </li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/Natively-for-Microsoft.png'
        },
        {
            id: 2, title: 'Asset Management', Heading: 'Complete Visibility Into Your Asset Lifecycle', content: (
                <ul>
                    <li>
                        Track hardware, software, inventory, ownership, and asset status from one centralized platform.     
                    </li>
                    <li>
                        Manage asset assignments, returns, warranties, and lifecycle changes with better visibility.   
                    </li>
                    <li>
                        Maintain accurate asset records with structured tracking and reporting.    
                    </li>
                    <li>
                        Monitor asset utilization and improve decision-making with real-time information.  
                    </li>
                    <li>
                        Manage your complete asset lifecycle from acquisition to retirement. 
                    </li>
                </ul>
            ), image: 'https://ik.imagekit.io/apps365/Lp-pages/Asset-Management-tab.png'
        },
        {
            id: 3, title: 'Easy to Use', Heading: ' Simplify Asset Tracking for Every Team', content: (
                <ul>
                    <li>
                        Give teams an intuitive interface to search, manage, and update asset information.    
                    </li>
                    <li>
                        Quickly find asset details including ownership, location, status, and history. 
                    </li>
                    <li>
                        Reduce dependency on spreadsheets and manual tracking processes.
                    </li>
                    <li>
                        Enable employees and administrators to manage assets with minimal training.  
                    </li>
                    <li>
                        Improve productivity with a familiar Microsoft 365 experience. 
                    </li>
                </ul>
            ), image: 'https://ik.imagekit.io/apps365/Lp-pages/Asset-AI-Powered.png'
        },
        {
            id: 4, title: 'Workflow Automation', Heading: 'Automate Asset Management Workflows', content: (
                <ul>
                    <li>
                     Automate asset assignment, approval, notification, and tracking processes.  
                    </li>
                    <li>
                       Create workflows for asset requests, approvals, returns, and lifecycle updates.  
                    </li>
                    <li>
                        Receive alerts for warranties, renewals, and important asset milestones.  
                    </li>
                    <li>
                        Reduce manual follow-ups with automated notifications and reminders.  
                    </li>
                    <li>
                        Improve operational control with standardized asset processes. 
                    </li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/Natively-for-Microsoft.png'
        },
        {
            id: 5, title: 'Enterprise-Grade Security', Heading: 'Secure Asset Management Inside Microsoft 365', content: (
                <ul>
                    <li>
                        Keep asset data protected within your Microsoft 365 environment.  
                    </li>
                    <li>
                        Use Microsoft security, permissions, and access controls for better governance.     
                    </li>
                    <li>
                        Maintain visibility into asset records with controlled user access.  
                    </li> 
                    <li>
                        Support compliance requirements with structured data management and reporting.    
                    </li>
                    <li>
                        Protect critical asset information with enterprise-grade security standards.    
                    </li>
                   
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/Asset-Management-tab.png'
        },


    ];

    const Boxs = [
        //  {
        //     image : "https://ik.imagekit.io/apps365/Lp-pages/No%20duplicate%20document%20repositories.svg",
        //     text : "Centralized Expense Management Hub"
        // },
        {
            image : "https://ik.imagekit.io/cubiclogics/Helpdesk-LP/AI%20Copilot%20Assistance.svg",
            text : "AI-Powered"
        },
        {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Role%20based%20permissions.svg",
            text : "Workflow Automation & Alerts  "
        },
        {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20Teams%20&%20Outlook%20integration.svg",
            text : "Role-Based Permissions"
        },
        {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20365%20compliance.svg",
            text : "Microsoft 365 Integration"
        },
         {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20Entra%20ID%20security.svg",
            text : "Asset Lifecycle & Governance "
        },
    ]

    const workBoxs = [
        {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Approval-through-Emails.svg?updatedAt=1768997946170",
            heading : "Track & Centralize Assets ",
            text : "Add and manage hardware, software, and business assets in one centralized asset management system. Capture important details including ownership, location, status, and asset information for complete visibility. "
        },
        {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Role-Based%20Security.svg?updatedAt=1768996193300",
            heading : "Assign & Track Asset Ownership",
            text : "Manage asset assignments, transfers, and ownership details with accurate tracking of who has each asset and where it is located. Improve accountability with complete asset history and status visibility."
        },
         {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/technology.webp?updatedAt=1765798708952",
            heading : "Manage Asset Lifecycle",
            text : "Track assets from acquisition and deployment to maintenance, renewal, and retirement. Maintain accurate records throughout the complete asset lifecycle."
        },
         {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Operational%20Efficiency.webp?updatedAt=1765803725122",
            heading : "Monitor, Analyze & Optimize",
            text : "Gain insights into asset utilization, inventory status, lifecycle performance, depreciation, and activity history through centralized reporting and analytics. Make informed decisions with accurate asset information. "
        },
    ]

    const Aisteps = [
        "Automatically categorize and organize asset records with AI-powered intelligence",
        "Generate context-aware asset summaries and insights in seconds",
        "Recommend relevant asset actions and next steps based on asset information", 
        "Use asset history and lifecycle data to support informed management decisions", 
        "Reduce manual effort by automating repetitive asset tracking and management tasks", 
    ]

    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);

    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const features = [
        "Built inside Microsoft 365",
        "AI-Powered Asset Tracking" ,
        "SharePoint-Based Asset Management",
        // "Automated Asset Lifecycle Management", 
        // "IT Inventory Visibility", 
        // "Enterprise Grade Security" 
    ]
    const CheckIcon = () => (
        <img decoding="async" width="10" height="10" src="https://www.apps365.com/wp-content/uploads/2026/07/check.9f62cc5d79ec06d4b3b2b79b2905c84df608eb81fc36bff1871c6336264dd874.svg" class="attachment-large size-large wp-image-130522" alt="" />
    );

    const challenges = [
        "Assets scattered across spreadsheets and disconnected tools", 
        "Limited visibility into asset ownership, status, and location", 
        "Manual tracking leads to outdated or inaccurate asset records",
        "Difficulty managing asset assignments, returns, and lifecycle updates", 
        "Missed warranty renewals and asset maintenance deadlines",
        "Limited reporting makes asset planning and decision-making difficult" 
    ];

    const solutions = [
        "Centralize every asset record in one Microsoft 365 asset management system with complete visibility", 
        "Track ownership, assignment, location, status, history, and lifecycle information", 
        "Manage asset lifecycle from procurement and assignment to return and retirement",
        "Automate asset requests, approvals, assignments, alerts, reminders, and lifecycle workflows", 
        "Improve governance, visibility, and reporting with controlled access to accurate asset information", 
    ];
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>AI SharePoint Asset 365 | Smarter IT Tracking</title>
                    <meta name="description" content="Manage IT assets with AI-powered SharePoint Asset 365. Track assets, improve visibility, and manage the full asset lifecycle in Microsoft 365." />
                </Helmet>
                <ScrollToTop />
                <Header isComparison={true} />
                <div className='HR_panel'>
                    <div className='HR_overlay'>
                        <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >
                            <div className="hero-wrapper">
                                <h1 className="hero-badge"> AI-Powered Asset Management Software Built for Microsoft 365</h1>

                                <h2 className="hero-heading">
                                    AI-Powered Asset Management Software to Track, Manage, and Optimize Your IT Assets   
                                    {/* <span className="accent"> Smarter Expense Management</span> */}
                                </h2>

                                <p className="hero-desc">
                                    <strong> Stop managing assets across spreadsheets, disconnected tools, and manual processes. </strong>
                                    <span>Asset 365 is an AI-powered asset management solution built for Microsoft 365 that helps organizations track hardware and  software assets, ownership, and complete asset lifecycle from one place. Gain real-time asset visibility, automate tracking and workflows, and maintain accurate asset records across your organization.</span>
                                </p>

                                <div className="hero-cta">
                                    <DemoButtons isreverse={true}
                                        demobtnText=" Get Asset 365 Demo" trailbtnText="Start Your 14-Day Free Trial" className="head_btn" />
                                </div>

                                <div className="hero-features">
                                    {features.map((feature) => (
                                        <span key={feature} className="feature-pill">
                                            <CheckIcon />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* <div className='HR_Section1RightSide CLMHerosectionRight'>
                                <div className="RightdemoForm">
                                    <div className="FormFieldStyles">
                                        <h3>Book Your Free Demo</h3>
                                        <p>See Expense 365 in action — no commitment required.</p>
                                        <DemoButtons CLM365demoForm={true} />
                                    </div>

                                </div>
                                {/* <img alt='MainImage' src={"https://ik.imagekit.io/zn4au2jftpm5/hr365/random-images/20944145__1_-removebg-preview%20(1)_8HExemHEKq.png?updatedAt=1708084034004"} /> */}  
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                {/* <GetOfferPage Type="Image"/> */}


                <div>
                    <G2Badge
                    // heading="Now CLM 365 - Contract Management App is Available on Microsoft Teams"
                    // videoUrl="https://www.youtube.com/watch?v=jIfazWcHpwI"
                    // imageUrl="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/CLM%20365%20teams_yFI8NzGjap.png?updatedAt=1725450649581"
                    />

                    <section className="sharepoint-store">
                        <div className="sharepoint-container">
                            <div className="sharepoint-header">
                                <h2 className='HR_heading'>
                                   Stop Losing Visibility of Your Assets. Manage Everything in One Place. 
                                </h2>

                                <p>
                                    Managing assets across spreadsheets, disconnected systems, and manual processes creates visibility gaps, ownership issues, and lifecycle challenges. Asset 365 brings asset tracking, inventory management, and lifecycle control into one centralized Microsoft 365 asset management platform with AI-powered automation and real-time visibility.
                                </p>
                            </div>

                            <div className="sharepoint-content">
                                <div className="sharepoint-left">
                                    {challenges.map((item, index) => (
                                        <div className="challenge-card" key={index}>
                                            <div className="challenge-icon">
                                                <div class="pain-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>
                                            </div>

                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="sharepoint-right">
                                    <h3>
                                      Everything You Need to Run Smarter Asset Management
                                    </h3>
                                    
                                    {/* 
                                    <p>
                                       Expense 365 brings receipts, expense submissions, approvals, reimbursements, and reporting into one Microsoft 365-based expense management system. 
                                    </p> */}

                                    <ul>
                                        {solutions.map((item, index) => (
                                            <li key={index}>
                                                <div class="solution-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='HowtoworkBtn' >
                                        <DemoButtons LMS365="LMS365"
                                            demobtnText="See How Asset 365 Works" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Meet_AI">
                        <div className="Meet_AI_Container">
                            <div className="sharepoint-header">
                                <h2 className='HR_heading'>
                                  Meet Asset 365 AI Agent 
                                </h2>

                                <p>
                                    <strong>AI-Powered Asset Management Assistant Built for Microsoft 365 </strong><br />
                                   Asset 365 AI AI Agent helps organizations manage assets smarter by automating repetitive tasks, improving asset visibility, and providing intelligent insights across the asset lifecycle. It helps teams analyze asset information, identify relevant details, summarize asset records, and support faster decision-making within the Microsoft 365 ecosystem.
                                </p>
                            </div>
                            <div className="sharepoint-content">
                                <div className="content-left">
                                    <h3 className="Agent-heading">AI Agent Capabilities </h3>
                                    {Aisteps.map((data, index) => (
                                        <div className="AI-Step" key={index}>
                                            <span><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                                            <span>
                                                <p>{data}</p>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                 <div className="content-right">
                                    <div className = "tab-image">
                                        <img
                                        decoding="async" src="https://ik.imagekit.io/apps365/Lp-pages/Asset-AI-chat-image.png" title="" alt="CLM"     loading="lazy"
                                        onClick={() => setShowModal(true)}
                                        />
                            
                                        <div
                                        className="expand-icon"
                                        onClick={() => setShowModal(true)}
                                        >
                                        <FaExpand />
                                        </div>
                                    </div>
                                </div>  
                                {showModal && (
                                    <div className="image-modal" onClick={() => setShowModal(false)}>
                                    <span className="close-modal" onClick={() => setShowModal(false)}>✕</span>

                                    <img className="modal-image "
                                        decoding="async" src="https://ik.imagekit.io/apps365/Lp-pages/Asset-AI-chat-image.png" title="" alt="Asset"    loading="lazy" onClick={() => setShowModal(true)}
                                        />
                                    </div>
                                )} 
                            </div>
                           <div class="HR_PrimaryButton">
                            <div style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "40px" }}>
                                <DemoButtons LMS365="LMS365"  demobtnText="See Asset 365 in Action" />
                            </div>
                        </div>
                        </div>
                    </section>
                    <div>
                        <TabsWithImage tabs={tabs} />
                    </div>
 
                    <div className="why-choose-container">
                        <div className="sharepoint-header">
                            <h2 className='HR_heading'>
                              Why Choose Microsoft 365 for Asset Management? 
                            </h2>

                            <p>Move from fragmented asset records and manual tracking to one intelligent asset management system built for Microsoft 365. Asset 365 helps teams know what assets they have, who has them, where they are, what they’re worth, and what needs attention next.  
                            </p>
                        </div>
                        <div className="why-choose-boxs">
                            {Boxs.map((data, index) => (
                            <div className='boxs' key={index}>
                                <img decoding="async" src={data.image} title="" alt="clm" loading="lazy" />
                                <p>{data.text}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div id="features" className="IdChanges"></div>
                    
                    <section className="contract-end-to-end">
                        <div className="contract-container">
                            <div className="contract-heading">
                                <h2 className='HR_heading'>Powerful Asset Management Features Built for Smarter Tracking and Better Control</h2>

                                <p>
                                  Built on Microsoft 365 to centralize asset records, automate workflows, improve accountability, and manage the complete asset lifecycle with better visibility, governance, and control across your organization. 
                                </p>
                            </div>

                            <div className="contract-grid">
                                {featuresEndtoEnd.map((item, index) => (
                                    <div className="contract-card" key={index}>
                                        <div className="contract-icon">
                                            {typeof item.icon === "string" ? (
                                                <img src={item.icon} alt={item.title} />
                                            ) : (
                                                item.icon
                                            )}
                                        </div>

                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <OverviewExpense365 MainHeading="Microsoft 365 Asset Management System with AI-Powered Asset Intelligence " />


                </div>
        
                <div className='work-section'>
                    <div className="sharepoint-header">
                        <h2 className='HR_heading'>
                            How Asset 365 Simplifies Asset Management?  
                        </h2>

                        <p>
                          Asset 365 AI connects every stage of asset management into one structured workflow from asset registration and assignment to lifecycle tracking, AI-powered insights, and reporting, all within your Microsoft 365 environment. 
                        </p>
                    </div>
                    <div className='work-info'>
                        {workBoxs.map((item, index) => (
                            <div className='work-box' key={index}>
                                <img decoding="async" src={item.image} title="" alt="" loading="lazy"/>
                                <h3>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <ComparisonSection />

                <div id="client" className="IdChanges"></div>
                <div className='HR_whitesection'>
                    <h2 className='HR_heading HR_MT'>Our Clients</h2>

                    <div className='HR_MT'>
                        <CLMClient />
                    </div>
                    {/* <div style={{ background: "none", padding: "0vw 6vw 2vw -0.9vw" }}>
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
                    </div> */}
                    <section className="m365-section">
                        <div className="m365-container">
                            <h2 className="HR_heading">
                                Built for Your Microsoft 365 Ecosystem
                            </h2>

                            <p className="m365-subtitle">
                                Works inside SharePoint, Microsoft Teams, Outlook to manage assets without switching between disconnected tools.  
                            </p>

                            <div className="m365-grid">
                                {dataIntegration.map((item, index) => (
                                    <div className="m365-card" key={index}>
                                        <div className="m365-icon-wrap">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="m365-icon"
                                            />
                                        </div>

                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div> 
                <div id="integration" className="IdChangesIntegration"></div>

                <div className='cybersection' >
                    <CyberSecurity />
                </div>

                <div className="IdChangesIntegration"></div>

                <CustomerSupport />

                <div className='HR_MT HR_whitesection'>
                    <div className="HR_MT">
                        <div>
                            <h2 className='HR_heading HR_MT' id="pricing">Asset 365 Plans
                            </h2>
                            <Plans plans={planData} isStandardPlan={false} appName="Asset 365" />
                        </div>
                    </div>
                </div>

                <Azuer userCount={"50+"} />
                <span className='privacytext'></span>

                <section className="manage-footer-content">
                    <div className="manage-footer-container">
                        <h2 className="manage-footer-title">
                           Stop Losing Track of Your Assets. Start Managing Them Smarter  
                        </h2>

                        <p className="manage-footer-description">
                           Replace spreadsheets, manual updates, and disconnected tools with an AI-powered Microsoft 365 asset management platform. Centralize asset tracking, automate workflows, and gain complete visibility across your entire asset lifecycle with Asset 365. 
                        </p>
                        {/* <p className="manage-footer-description">
                          Discover how LMS 365 brings courses, learning management, progress tracking, and certifications together inside Microsoft 365. 
                        </p> */}
                        <div style={{ display: "flex", justifyContent: "center", padding: "2vw 0vw" }}>
                            <DemoButtons isreverse={true}
                                demobtnText="Request a Demo" trailbtnText="Talk to Sales" />
                        </div>
                    </div>
                </section>
                <div id="faq" className="IdChangesIntegration"></div>
                <div className='HR_FAQ' >

                    <div>
                        <h3 className='HR_faq'>Frequently Asked Questions</h3>
                        <Accordion items={accordionItems} />
                    </div>

                </div>

                <GlobalFooter />
            </HelmetProvider>
        </>
    )
}
export default Asset365ai;