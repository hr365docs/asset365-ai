import { useState } from "react";
import DemoButtons from "./Utiilities/DemoButtons";

const colors = {
    navy: "#0B1F3A",
    navy2: "#122742",
    blue: "#1565C0",
    blueL: "#1976D2",
    accent: "#00B4D8",
    accent2: "#0096C7",
    white: "#ffffff",
    gray50: "#F8FAFC",
    gray100: "#EEF2F7",
    gray300: "#CBD5E1",
    gray600: "#64748B",
    gray800: "#1E293B",
};

const tabs = [
    { id: "adoption", label: "User Adoption" },
    { id: "security", label: "Security & Compliance" },
    { id: "integration", label: "Microsoft 365 Integration" },
    { id: "cost", label: "Cost & IT Overhead" },
    { id: "features", label: "Asset Management Capabilities" },
];

const panelData = {
    adoption: [
        {
            categoryBad: "Fragmented Asset Information",
            bad: " Asset records are stored across different tools, spreadsheets, and systems, making it difficult to maintain accurate and updated asset information. ",
            categoryGood: " Centralized Asset Records",
            good: "Maintain hardware, software, inventory, ownership, and lifecycle details in one Microsoft 365-based asset management platform.",
        },
        {
            categoryBad: "Limited Ownership Tracking ",
            bad: "Teams struggle to identify asset ownership, location, status, and usage history without centralized tracking. ",
            categoryGood: "Complete Asset Visibility ",
            good: "Track asset assignment, location, status, and history with real-time access to accurate information. ",
        },
        {
            categoryBad: "Manual Inventory Updates",
            bad: "Employees rely on manual updates, increasing the risk of outdated or incomplete asset records.",
            categoryGood: "Automated Asset Tracking",
            good: "Reduce manual updates with structured workflows, notifications, and automated asset management processes.",
        },
    ],
    security: [
        {
            categoryBad: "Data Stored Outside Microsoft 365 ",
            bad: " Asset information is managed in separate platforms, requiring additional security reviews and access management.",
            categoryGood: "Microsoft 365 Security",
            good: "Keep asset information within your Microsoft environment with existing security controls.",
        },
        {
            categoryBad: "Complex Permission Management",
            bad: " Organizations need to manage separate user access, security policies, and compliance requirements.",
            categoryGood: "Role-Based Access Control ",
            good: "Manage access based on user roles, responsibilities, and organizational requirements.",
        },
        {
            categoryBad: "Limited Governance Visibility",
            bad: " Maintaining audit records and controlling access across different systems becomes challenging.",
            categoryGood: "Better Governance ",
            good: "Maintain structured asset records with improved visibility, reporting, and audit readiness. ",
        },
    ],
    integration: [
       {
            categoryBad: "Disconnected From Existing Tools  ",
            bad: " Users switch between Microsoft applications and separate asset management platforms.",
            categoryGood: "Built for Microsoft 365 ",
            good: "Manage assets using the Microsoft ecosystem your organization already uses. ",
        },
        {
            categoryBad: "Limited Collaboration",
            bad: " Asset teams, IT teams, and employees work across different systems with disconnected information. ",
            categoryGood: "SharePoint Integration",
            good: "Store and manage asset information with SharePoint-based capabilities. ",
        },
        {
            categoryBad: "Additional Integrations Required ",
            bad: " Organizations need extra configuration to connect asset data with their Microsoft environment. ",
            categoryGood: "Microsoft Teams Integration",
            good: "Allow teams to access asset information and collaborate within familiar Microsoft teams.",
        },
    ],
    cost: [
        {
            categoryBad: "Additional Platform Costs",
            bad: "Organizations invest in separate software licenses, maintenance, and administration.",
            categoryGood: "Uses Existing Microsoft Investment",
            good: "Extend your Microsoft 365 environment without introducing another disconnected platform.",
        },
        {
            categoryBad: "Higher Management Effort ",
            bad: "IT teams spend more time managing another platform, users, permissions, and integrations. ",
            categoryGood: "Lower Administration Effort",
            good: "Manage users, permissions, and access through your existing Microsoft ecosystem. ",
        },
        {
            categoryBad: "Complex Deployment",
            bad: " New systems require implementation, training, and ongoing support. ",
            categoryGood: " Faster Deployment",
            good: "Start managing assets using a familiar Microsoft-based experience.",
        },
    ],
    features: [
       {
            categoryBad: "Basic Tracking Limitations",
            bad: "Many tools focus only on asset records without connecting workflows, collaboration, and lifecycle management.",
            categoryGood: "Complete Asset Lifecycle Management ",
            good: "Manage assets from acquisition and assignment to maintenance, renewal, and retirement. ",
        },
        {
            categoryBad: "Limited Automation ",
            bad: "Manual approvals, reminders, and updates require additional configuration.",
            categoryGood: "Workflow Automation",
            good: "Automate approvals, notifications, assignments, and lifecycle processes.",
        },
        {
            categoryBad: "Separate Reporting Systems ",
            bad: "Asset insights and operational reports may require additional tools. ",
            categoryGood: "Reporting & Analytics",
            good: "Gain visibility into asset utilization, inventory status, ownership, and lifecycle performance.",
        },
    ],
};

const XIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" strokeWidth="2.2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const CheckIcon = ({ color = "#1565C0" }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ChevronIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

export default function ComparisonSection() {
    const [activeTab, setActiveTab] = useState("adoption");
    const rows = panelData[activeTab];

    return (
        <section id = 'comparison' style={{
            padding: "2.5vw 3%",
            background: "#eff2fb",
            fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        }}>
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .compare-section * { box-sizing: border-box; }

        .ctab-btn {
          padding: 9px 22px;
          border-radius: 40px;
          border: 1.5px solid ${colors.gray300};
          background: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 1.1vw;
          font-weight: 600;
          color: #333;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          font-family:Assistant;
        }
        .ctab-btn:hover {
            background: linear-gradient(135deg,#1285f5 24%,#2323ce 80%);
            border: 1px solid #3445e8;
            border-radius: 1.5vw;
            color: #fff;
        }
        .ctab-btn.active {
            background: linear-gradient(135deg,#1285f5 24%,#2323ce 80%);
            border: 1px solid #3445e8;
            border-radius: 1.5vw;
            color: #fff;
        }

        .compare-table {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(11,31,58,0.10);
          width: 100%;
        }

        .col-headers {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .col-head-left {
          background: #F1F5F9;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .col-head-right {
          background: linear-gradient(135deg, #1285f5 24%, #2323ce 80%);
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .badge-icon {
          width: 2.4vw;
    height: 2.4vw;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
        }

        .badge-icon p{
            font-size: 1.3vw;
        }

        .badge-label-left {
       font-family: 'Assistant';
    font-size: 1.4vw;
    font-weight: 700;
    color: #1E293B;
        }
        .badge-label-right {
    font-size: 1.4vw;
    font-weight: 700;
    color: #fff;
    font-family: 'Assistant';
        }

        .recommended-pill {
          margin-left: auto;
          background: #c10161;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          border-radius: 4px;
          padding: 3px 9px;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: 'Assistant';
        }

        .compare-row-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .compare-row-group:nth-child(even) .cr-right { background: #F0F7FF; }
        .compare-row-group:nth-child(odd) .cr-left { background: #fff; }
        .compare-row-group:nth-child(odd) .cr-right { background: #E8F4FE; }

        .cr-category {
            grid-column: 1 / -1;
    background: #F8FAFC;
    padding: 9px 28px;
    border-top: 1px solid #EEF2F7;
    text-align: left;
        }
        .cr-category span {
    font-size: 1vw;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000;
    font-family: 'Assistant';
        }

        .cr-left, .cr-right {
          padding: 15px 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid rgba(0,0,0,0.05);
          
        }

        .cr-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cr-text-bad {
      font-size: 1.2vw;
    font-family: 'ASSISTANT';
    line-height: 1.5;
    color: #64748B;
    text-align: left;
    
        }
        .cr-text-good {
            font-size: 1.2vw;
    line-height: 1.5;
    color: #0B1F3A;
    font-weight: 500;
    text-align: left;
    font-family: 'ASSISTANT';
        }

        .cta-btn {
          background: ${colors.accent};
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(0,180,216,0.35);
        }
        .cta-btn:hover {
          background: ${colors.accent2};
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(0,180,216,0.5);
        }

        @media (max-width: 768px) {
          .col-headers,
          .compare-row-group {
            grid-template-columns: 1fr;
          }
          .cr-category {
            grid-column: 1 !important;
          }
          .col-head-right, .col-head-left{
            padding: 22px 20px;
          } 
          .tabs-scroll {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 4px;
          }
          .tabs-inner {
            flex-wrap: wrap !important;
          }
            .ctab-btn{
            font-size:3.2vw;
            }
            .ctab-btn.active{
                border-radius: 40px;
            }
                  .badge-label-right{
    font-size: 3.5vw;
  }
    .badge-label-left{
        font-size: 3.5vw;

    }
        .badge-icon{
            width: 8.4vw;
    /* height: 6.5vw; */
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
    }

     .badge-icon p{
            font-size: 4.5vw;
        }

    .cr-category span{
        font-size: 3.5vw;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000;
    font-family: 'Assistant';
    }
    .cr-text-bad{
        font-size: 3.5vw;
    }
        .cr-text-good{
        font-size: 3.5vw;
        }
        
    }

      `}</style>

            <div className="compare-section">
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "16px" }}>

                    <h2 className="HR_heading">
                        Microsoft 365 Asset Management vs Standalone Asset Management Software
                    </h2>

                    <p className="organizationsText">
                        See why organizations choose a Microsoft 365-native asset management approach over disconnected asset tracking tools.
                    </p>

                </div>

                {/* Tabs */}
                <div className="tabs-scroll" style={{ marginBottom: "40px" }}>
                    <div className="tabs-inner" style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginTop: "32px",
                    }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`ctab-btn${activeTab === tab.id ? " active" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="compare-table">
                    {/* Column Headers */}
                    <div className="col-headers">
                        <div className="col-head-left">
                            <div className="badge-icon" style={{ background: "#E2E8F0" }}><p>🏢</p></div>
                            <span className="badge-label-left">Standalone Asset Management Software</span>
                        </div>
                        <div className="col-head-right">
                            <div className="badge-icon" style={{ background: "rgba(0,180,216,0.2)" }}>
                                <img src="https://ik.imagekit.io/cubiclogics/App%20Logos/White-logos/AM365-White.png" alt="Asset365" />
                            </div>
                            <span className="badge-label-right">Asset 365 — Microsoft 365 Native Asset Management</span>
                            <span className="recommended-pill">Recommended</span>
                        </div>
                    </div>

                    {/* Rows */}
                    {rows.map((row, i) => (
                        <div key={i} className="compare-row-group">
                            <div className="cr-category" style={{ gridColumn: "1" }}>
                                <span>{row.categoryBad}</span>
                            </div>
                             <div className="cr-category" style={{ gridColumn: "2" }}>
                                <span>{row.categoryGood}</span>
                            </div>
                            <div className="cr-left">
                                <div className="cr-icon"><XIcon /></div>
                                <div className="cr-text-bad">{row.bad}</div>
                            </div>
                            <div className="cr-right">
                                <div className="cr-icon"><CheckIcon /></div>
                                <div className="cr-text-good">{row.good}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "40px" }}>
                    <DemoButtons LMS365="LMS365"
                        demobtnText="See Asset 365 in Action" />
                </div>
            </div>
        </section>
    );
}
