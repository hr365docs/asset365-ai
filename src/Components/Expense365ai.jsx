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
function Expense365ai() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const featuresEndtoEnd = [
        {
            title: "AI Receipt Scanning",
            desc: "Capture receipt details and flag duplicate invoices with AI.",
            //icon : (<>
            //     <div class="feature-icon fi-teal"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg></div></>)
            icon : "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/cpu_VznWkbJf4F.svg?updatedAt=1735815651661"
        },
        {
            title: "Expense Approval Workflows",
            desc: "Create structured approval processes for submitted expenses and reimbursement claims.",
            // icon: (
            //     <>
            //         <div class="feature-icon fi-orange"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div></>
            // )
            icon : "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/chat-bot_aHqv7IuR6C.svg"
        },
        {
            title: "Expense Reporting",
            desc: "View organized expense information and reports with current spending data. ",
            // icon: (
            //     <>
            //         <div class="feature-icon fi-purple"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div></>
            // )
            icon: "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/message_DLHoyyI50F.svg"
        },
        {
            title: "Expense Automation",
            desc: "Automate repetitive steps across submissions, approvals, reminders, and expense processes.",
            // icon: (<><div class="feature-icon fi-green"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
            // </>)
            icon: "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/event-calendar_5U0GrE_-G5.svg"
        },
        {
            title: "Reimbursement Management",
            desc: "Track employee claims from submission through review and reimbursement.",
            // icon: (
            //     <><div class="feature-icon fi-gold"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
            //     </>
            // )
            icon:"https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/office_a5GgL_th7R.svg"
        },
        {
            title: "Corporate Card Management",
            desc: "Track corporate card transactions and keep related business spending organized.",
            // icon: (
            //     <>
            //         <div class="feature-icon fi-navy"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
            //     </>
            // )
            icon: "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/profiles_DeCT1XxtBl.svg"
        },
        {
            title: "Mileage Tracking",
            desc: "Record business mileage and support employee travel expense claims.  ",
            // icon: (
            //     <>
            //         <div class="feature-icon fi-navy"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
            //     </>
            // )
            icon: "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/report_q5aJbF6dym.svg"
        },
        {
            title: "Budget Tracking",
            desc: "Follow business spending against defined budgets with clearer visibility for finance teams.",
            // icon: (
            //     <>
            //         <div class="feature-icon fi-navy"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
            //     </>
            // )
            icon: "https://ik.imagekit.io/zn4au2jftpm5/Apps365/productPAGES/stop-watch_oRW1quKVLk.svg"
        },
        {
            title: "Expense Audit",
            desc: "Maintain organized expense records for internal review and audit requirements.",
            // icon: (
            //     <>
            //         <div class="feature-icon fi-navy"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
            //     </>
            // )
            icon: "https://www.apps365.com/wp-content/uploads/2025/11/settings.png"
        },
    ];
    const dataIntegration = [
        {
            title: "SharePoint",
            desc: "Store expense records, receipts, and reports in one place for better visibility, control, and easier expense management across your organization",
            img: "https://ik.imagekit.io/zn4au2jftpm5/sharepoint-logo-_cmiWFaZqe.webp"
        },
        {
            title: "Microsoft Teams",
            desc: "Submit expenses, approve claims, and manage expense workflows directly within Teams to keep everyone aligned and processes moving faster.",
            img: "https://ik.imagekit.io/apps365/Apps365/HD/MS%20teams.webp?updatedAt=1762945136977"
        },
        {
            title: "Outlook",
            desc: "Receive expense notifications, approval reminders, and status updates directly in Outlook to stay informed and keep expense tasks on track.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/microsoft-outlook-icon-logo_gDHQpwu35.png"
        },
        {
            title: "Power Automate",
            desc: "Build custom apps to enhance expense workflows and integrate seamlessly with Expense 365.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/CLM365/Power%20Automate%20(1)_eXEyQVXbrh.png?updatedAt=1735914125187"
        },
        {
            title: "M365 Security",
            desc: "Build custom apps to enhance financial workflows and integrate seamlessly with Expense 365.",
            img: "https://ik.imagekit.io/zn4au2jftpm5/Microsoft_logo.svg_pVkFqFdkP.png?updatedAt=1726464369360"
        },
         {
            title: "QuickBooks",
            desc: "Sync approved expenses with QuickBooks to keep accounting records updated, and make reconciliation easier.",
            img: "https://ik.imagekit.io/cubiclogics/Apps365/ET/quickbook.avif"
        },
         {
            title: "Xero",
            desc: "Build custom apps to enhance financial workflows and integrate seamlessly with Expense 365.",
            img: "https://ik.imagekit.io/apps365/Lp-pages/Xero.svg"
        },
         {
            title: "Zoho Books",
            desc: "Route approved expense data into Zoho Books to keep financial records updated, and simplify expense tracking.",
            img: "https://ik.imagekit.io/apps365/Lp-pages/Zoho-Books-White-Logo-PNG-SVG-Vector.svg"
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
            title: '1. We already track expenses in Excel. Why would we need Expense 365?', content: `Excel can handle basic tracking, but receipts, approvals, reimbursements, and reporting often remain manual. Expense 365 brings these activities into one expense management solution built around Microsoft 365.`
        },
        {
            title: `2. We already use Microsoft 365. How does Expense 365 fit into our existing setup?`, content: `Expense 365 works as a Microsoft expense tracker connected with SharePoint, Microsoft Teams, Outlook, Power Automate, and other Microsoft 365 tools your teams already use.`
        },
        {
            title: `3. Can we manage expenses directly through SharePoint?`,
            content: `Yes. Expense 365 works as a SharePoint expense tracker, helping teams keep expense records, receipts, approvals, and related information organized within their Microsoft environment. `
        }, 
        {
            title: '4. Our employees spend too much time entering receipt details. Can AI reduce that work?',
            content: `Yes. The AI expense tracker captures key receipt information such as merchant, date, amount, and tax, helping reduce repetitive manual entry. `
        },
        {
            title: '5. What happens when the same invoice is submitted twice?',
            content: `Expense 365 uses AI to help detect duplicate invoices, giving finance teams an additional check before the expense moves further through the approval process. `
        },
        {
            title: '6. We already use a receipt scanner app. What makes Expense 365 different?',
            content: `A typical receipt scanner app mainly captures receipt information. Expense 365 connects receipt scanning with expense submission, approvals, reimbursement tracking, and reporting.`
        },
        {
            title: '7. Can employees scan receipts and track the related expense in the same system?',
            content: `Yes. Expense 365 works as an expense tracker with receipt scanning, keeping receipt information connected with the corresponding expense record and approval workflow.`
        },
        {
            title: '8. Our approvals currently happen through email. Can Expense 365 automate that?',
            content: `Yes. Expense management automation helps route submitted expenses through defined approval workflows, notifications, and reminders. `
        },
        {
            title: '9. Can managers see where an expense is in the approval process?',
            content: `Yes. Managers and finance teams can follow submitted, pending, approved, and reimbursement-related expense activity from one connected expense workspace.`
        },
        {
            title: '10. We already have an expense reporting app. Why consider Expense 365?',
            content: `Expense 365 goes beyond reporting by connecting receipts, approvals, reimbursements, automation, and reporting with SharePoint and the wider Microsoft 365 ecosystem.  `
        },
        {
            title: '11. Can Expense 365 handle more than employee reimbursements?',
            content: `Yes. Expense 365 supports receipt management, corporate card tracking, mileage, per diem, budgets, approvals, and business expense reporting.`
        },
        {
            title: '12. We do not want another disconnected finance tool. How is Expense 365 different?',
            content: `Expense 365 is Microsoft SharePoint expense tracking software designed to keep expense processes connected with Microsoft 365 rather than adding another isolated business application. `
        },
        {
            title: '13. Which currency are the prices listed in?',
            content: `All prices are listed in USD.`
        }
    ];
    
    const tabs = [
        {
            id: 6, title: 'AI-Powered Expense Capture', Heading: 'Capture, Categorize and Submit Expenses Faster with AI', content: (
                <ul>
                    <li>
                        Upload receipts and let AI automatically extract important details like vendor, date, amount, tax, and expense type.  
                    </li>
                    <li>
                      Eliminate manual data entry by converting receipts into ready-to-submit expense records.  
                    </li>
                    <li>
                        Reduce submission errors and help employees complete expense reports faster.
                    </li>
                    <li>
                       Automatically Categorize Expenses with AI . Match receipts with related transactions or expense records.  
                    </li>
                    <li id='Comparison'>
                       Review expense activity with AI-assisted insights. 
                    </li>

                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/ai-receipt-scanner%202.avif'
        },
        {
            id: 1, title: 'Microsoft Ecosystem', Heading: 'Effortless Integration with the Microsoft Ecosystem: Expense 365', content: (
                <ul>
                    <li>
                        Make the most of your Microsoft environment with Expense 365, built to work where your teams already do their work. 
                    </li>
                    <li>
                       This cloud-based expense management solution integrates with Microsoft 365 to simplify receipt capture, expense submission, approvals, and reporting across the organization.  
                    </li>
                    <li>
                        Built on SharePoint and available inside Microsoft Teams, Expense 365 gives teams one central place to manage receipts, expenses, approvals, and records. 
                    </li>
                    <li>
                        With Microsoft Outlook integration, teams can stay updated on expense submissions, approval requests, and reimbursement-related notifications.  
                    </li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/expense-management-dashboard%202.avif'
        },
        {
            id: 2, title: 'Expense Operations', Heading: 'Streamlined Expense Operations: SharePoint Expense 365 App', content: (
                <ul>
                    <li>
                        Expense 365 simplifies the full expense process, from receipt capture and submission to approvals, reimbursements, and reporting, all within your Microsoft environment.   
                    </li>
                    <li>
                      Built on SharePoint, it gives finance teams better control, visibility, and security across expenses, approvals, and reimbursement records. 
                    </li>
                    <li>
                        Expense 365 supports configurable approval workflows, automated reminders, corporate card expense tracking, per diem management, and multi-currency reporting to reduce manual work and improve consistency.  
                    </li>
                    <li>
                       With Microsoft Teams integration, employees, managers, and finance teams can review expenses, approve claims, and stay aligned in one shared workspace. 
                    </li>
                </ul>
            ), image: 'https://ik.imagekit.io/apps365/Lp-pages/expense-approval-software%201.avif'
        },
        {
            id: 3, title: 'User-Centerd', Heading: 'Built to Make Expense Work Faster and Easier', content: (
                <ul>
                    <li>
                       Designed with Microsoft Fluent UI, Expense 365 offers a clean and familiar interface that makes it easy for employees, managers, and finance teams to submit, review, and manage expenses.   
                    </li>
                    <li>
                       AI helps speed up everyday tasks by scanning receipts, extracting expense details, auto-filling fields, and categorizing expenses with less manual effort.  
                    </li>
                    <li>
                        Smart Match helps users quickly connect receipts with card transactions or expense records, making expense review and reconciliation easier
                    </li>
                    <li>
                       Users can also personalize dashboards, views, and notifications to focus on the expense updates, approvals, and reports that matter most to them. 
                    </li>
                </ul>
            ), image: 'https://ik.imagekit.io/apps365/Lp-pages/expense-365-integration-with-sharepoint%207.avif?updatedAt=1782377062381'
        },
        {
            id: 4, title: 'Expense Workflow', Heading: 'Expense 365 for Simplified Expense Management', content: (
                <ul>
                    <li>
                      Expense 365 helps teams manage employee expenses, travel costs, reimbursement claims, and corporate card spending from one place. 
                    </li>
                    <li>
                        Capture receipts, submit expenses, track approvals, and keep records organized with less manual work and better visibility across every expense. 
                    </li>
                    <li>
                        From employee claims to reimbursements and reporting, Expense 365 helps businesses process expenses faster, stay organized, and maintain better control over spending.
                    </li>
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/corporate-card-management%203.avif'
        },
        {
            id: 5, title: 'Enterprise-Grade Security', Heading: 'Enterprise-Grade Security and Compliance', content: (
                <ul>
                    <li>
                       Complete expense audit trails for every transaction and approval step 
                    </li>
                    <li>
                      Role-based access controls to protect sensitive financial information   
                    </li>
                    <li>
                       Secure Microsoft 365-native data management and permissions   
                    </li> 
                    <li>
                        Automated policy checks to improve compliance and reduce risks   
                    </li>
                    <li>
                      Automated policy checks to improve compliance and reduce risks  
                    </li>
                   
                </ul>
            ),
            image: 'https://ik.imagekit.io/apps365/Lp-pages/expense-365-integration-with-sharepoint%207.avif?updatedAt=1782377062381'
        },


    ];

    const Boxs = [
         {
            image : "https://ik.imagekit.io/apps365/Lp-pages/No%20duplicate%20document%20repositories.svg",
            text : "Centralized Expense Management Hub"
        },
        {
            image : "https://ik.imagekit.io/cubiclogics/Helpdesk-LP/AI%20Copilot%20Assistance.svg",
            text : "AI Copilot Assistance "
        },
        {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Role%20based%20permissions.svg",
            text : "Microsoft Teams & Outlook integration "
        },
        {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20Teams%20&%20Outlook%20integration.svg",
            text : "Secure Role-Based Access "
        },
        {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20365%20compliance.svg",
            text : "Expense Automation "
        },
         {
            image : "https://ik.imagekit.io/apps365/Lp-pages/Microsoft%20Entra%20ID%20security.svg",
            text : "Audit & Compliance Visibility "
        },
    ]

    const workBoxs = [
        {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Approval-through-Emails.svg?updatedAt=1768997946170",
            heading : "Submit Expense Requests",
            text : "Employees submit expenses, upload receipts, and provide expense details through a centralized expense management system. Capture business expenses in a structured format without relying on spreadsheets or manual processes. "
        },
        {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Role-Based%20Security.svg?updatedAt=1768996193300",
            heading : "Automate Expense Approvals",
            text : "Configure approval workflows to automatically route expenses to the right managers based on departments, policies, and approval requirements while keeping the process organized and efficient. "
        },
         {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/technology.webp?updatedAt=1765798708952",
            heading : "Review & Process Expenses Faster",
            text : "Finance teams can review expense details, validate receipts, manage approvals, and process reimbursements faster with complete visibility into employee spending."
        },
         {
            image : "https://ik.imagekit.io/cubiclogics/Apps365/CLM/Operational%20Efficiency.webp?updatedAt=1765803725122",
            heading : "Analyse & Optimize Spending",
            text : "Track expense trends, reimbursement activity, policy compliance, and spending insights with reports and dashboards to improve financial decision-making. "
        },
    ]

    const Aisteps = [
        {
            DownText : "Use AI-powered receipt scanning to capture important expense information such as vendor, date, amount, and category, reducing manual data entry."
        },
        {
            DownText : "Automatically categorize expenses based on available information to help maintain consistent expense records and reporting."
        },
        {
            DownText : "Generate expense summaries and Insights to help finance teams review spending patterns and make informed decisions."
        },
        {
            DownText : "Provide relevant expense information and context to help managers review submissions faster and streamline approval workflows."
        },
        {
            DownText : "Reduce manual expense management and automate repetitive expense tasks while helping employees and finance teams focus on higher-value activities"
        },
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
        "AI-Powered expense tracking",
        "Automatic receipt scanning",
        "Expense dashboards",
        // "Expense visibility",
        // "MS 365 Apps Integration",
        // "Automated expense reporting"
    ]
    const CheckIcon = () => (
        <img decoding="async" width="10" height="10" src="https://www.apps365.com/wp-content/uploads/2026/07/check.9f62cc5d79ec06d4b3b2b79b2905c84df608eb81fc36bff1871c6336264dd874.svg" class="attachment-large size-large wp-image-130522" alt="" />
    );

    const challenges = [
        "Expenses scattered across Excel sheets, emails, and disconnected systems ",
        "Manual receipt collection and reimbursement slows approvals ",
        "Limited visibility into business spending ",
        "Difficulty tracking reimbursements and approval history  ",
        "No centralized audit trail for expense records and financial reviews ",
    ];

    const solutions = [
        "Centralize all employee expenses in one SharePoint expense management system with complete visibility ",
        "Capture receipts instantly with AI-powered receipt scanner",
        "Track reimbursement status from submission to completion ",
        "Automate expense approvals with Microsoft 365 workflows",
        "Generate accurate expense reports with real-time visibility",
        "Improve compliance with centralized records and audit trails"
    ];
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>AI SharePoint Expense Tracker : Automate Expenses</title>
                    <meta name="description" content="Discover an AI SharePoint expense tracker to automate expense management, simplify approvals, reduce manual work, and improve financial visibility." />
                </Helmet>
                <ScrollToTop />
                <Header isComparison={true} />
                <div className='HR_panel'>
                    <div className='HR_overlay'>
                        <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >
                            <div className="hero-wrapper">
                                <h1 className="hero-badge">SharePoint Expense Management Software</h1>

                                <h2 className="hero-heading">
                                AI-Powered Microsoft Expense Tracker Software Built for   
                                    <span className="accent"> Smarter Expense Management</span>
                                </h2>

                                <p className="hero-desc">
                                    <strong> Stop managing business expenses across spreadsheets, emails, and disconnected tools. </strong>
                                <span>Track, approve, and control every business expense directly inside Microsoft 365 and SharePoint with AI-powered automation. Expense 365 brings expense tracking, receipt management, approvals, and reporting into one secure Microsoft-native platform.</span>
                                </p>

                                <div className="hero-cta">
                                    <DemoButtons isreverse={true}
                                        demobtnText="Get Expense 365 Demo" trailbtnText="Start Your 14-Day Free Trial" className="head_btn" />
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
                                    Everything You Need to Simplify Expense Management. Built on SharePoint 
                                </h2>

                                <p>
                                 Managing expenses through spreadsheets, emails, and manual approvals creates delays and limited visibility. Expense Tracker 365 centralizes expense tracking, approvals, reimbursements, and reporting in a secure Microsoft 365 environment designed for modern businesses.
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
                                       A Smarter Microsoft Expense Tracking Software
                                    </h3>

                                    <p>
                                       Expense 365 brings receipts, expense submissions, approvals, reimbursements, and reporting into one Microsoft 365-based expense management system. 
                                    </p>

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
                                            demobtnText="See How Expense 365 Works" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="Meet_AI">
                        <div className="Meet_AI_Container">
                            <div className="sharepoint-header">
                                <h2 className='HR_heading'>
                                   Meet Expense Tracker 365 AI Assistant
                                </h2>

                                <p>
                                    <strong>AI-Powered Expense Management Built for Microsoft 365 </strong>
                                </p>

                                <p>
                                   Expense Tracker 365 AI helps finance teams automate expense processing, simplify receipt management, and improve expense accuracy. It helps capture expense details, analyze spending information, assist with approvals, and reduce manual effort throughout the expense management lifecycle all within the Microsoft 365 environment. 
                                </p>
                            </div>
                            <div className="sharepoint-content">
                                <div className="content-left">
                                    <h3 className="Agent-heading">AI Expense Management Capabilities</h3>
                                    {Aisteps.map((data, index) => (
                                        <div className="AI-Step" key={index}>
                                            <span><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                                            <span>
                                                <p>{data.DownText}</p>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                 <div className="content-right">
                                    <div className = "tab-image">
                                        <img
                                        decoding="async" src="https://ik.imagekit.io/apps365/Lp-pages/CLM-agent-image.avif" title="" alt="CLM"     loading="lazy"
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
                                        decoding="async" src="https://ik.imagekit.io/apps365/Lp-pages/CLM-agent-image.avif" title="" alt="CLM"    loading="lazy" onClick={() => setShowModal(true)}
                                        />
                                    </div>
                                )} 
                            </div>
                           <div class="HR_PrimaryButton">
                            <div style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "40px" }}>
                                <DemoButtons LMS365="LMS365"  demobtnText="See Expense 365 in Action" />
                            </div>
                        </div>
                        </div>
                    </section> */}
                    <div>
                        <TabsWithImage tabs={tabs} />
                    </div>
 
                    <div className="why-choose-container">
                        <div className="sharepoint-header">
                            <h2 className='HR_heading'>
                              Why Choose SharePoint for Expense Management?
                            </h2>

                            <p>Organizations already using Microsoft 365 do not need another disconnected system for everyday expense work.
                                <br />
                               Expense 365 turns SharePoint into a structured expense management environment where receipts, expense records, approvals and reports remain connected to the Microsoft ecosystem. 
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
                                <h2 className='HR_heading'>Everything You Need to Automate Expense Tracking Inside Microsoft 365 </h2>

                                <p>
                                  Manage the complete expense lifecycle with AI-powered workflows built on Microsoft 365. From receipt capture to approvals and reporting, Expense Tracker 365 keeps expenses organized, visible, and compliant. 
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
                    <OverviewExpense365 MainHeading="Complete Microsoft 365 Expense Management Solution Connected Across Teams, SharePoint & Outlook " />


                </div>
        
                <div className='work-section'>
                    <div className="sharepoint-header">
                        <h2 className='HR_heading'>
                           How Exdpense Tracker 365 Works?  
                        </h2>

                        <p>
                          Expense Tracker 365 connects every stage of expense management into one structured workflow — from expense submission and receipt capture to approvals, reimbursement tracking, and reporting, all within your Microsoft 365 environment.
                        </p>
                    </div>
                    <div className='work-info'>
                        {workBoxs.map((item, index) => (
                            <div className='work-box' key={index}>
                                <img decoding="async" src={item.image} title="" alt="" loading="lazy"></img>
                                <h3>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <ComparisonSection />

                <div id="client" className="IdChanges"></div>
                <div className='HR_whitesection'>
                    <h2 className='HR_heading HR_MT' >Our Clients
                    </h2>

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
                              Works inside SharePoint, Microsoft Teams, Outlook, and other Microsoft 365 applications without switching tools. 
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
                <div className="IdChangesIntegration">
                    
                </div>
                <CustomerSupport />

                <div className='HR_MT HR_whitesection'>
                    <div className="HR_MT">
                        <div>
                            <h2 className='HR_heading HR_MT' id="pricing">Expense 365 Plans
                            </h2>
                            <Plans plans={planData} isStandardPlan={false} appName="Expense 365" />
                        </div>
                    </div>
                </div>

                <Azuer userCount={"50+"} />
                <span className='privacytext'></span>

                <section className="manage-footer-content">
                    <div className="manage-footer-container">
                        <h2 className="manage-footer-title">
                            Ready to Track Expenses Inside Microsoft 365? 
                        </h2>

                        <p className="manage-footer-description">
                           Bring complete visibility and automation to your expense process inside SharePoint and Teams. 
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
export default Expense365ai;