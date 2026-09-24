import * as React from "react";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Footer from "./Header and Footer/Footer";
import Header from "./Header and Footer/Header";
import ScrollToTop from "./Utiilities/ScrolltoTop";
import { MyContext } from "../App";
function Homepage() {
  const AppName = React.useContext(MyContext)
  return (
    <>
       <ScrollToTop/>
      <Header />
      <div className="HR_panel MT5vw">
        {/* ED365 */}
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/employee-directory-365">
              Employee Directory 365
            </Link>
          </label>
          <p className="MB_pera">
            Office 365 employee directory displays information about employee in
            the organization in visually manner and allows you to find any user
            in just fraction of seconds with various filters to select,
            departments, skills, Job title, manager, location, etc..
          </p>
        </div>
        <div>
     
        </div>
        {/* HD365 */}
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/helpdesk-365">
              Helpdesk 365
            </Link>
          </label>
          <p className="MB_pera">
            Office HelpDesk 365 is simple, customizable, Office 365 hosted help
            desk software, that ensures your organization can handle every issue
            properly
          </p>
        </div>
        {/* AM365 */}
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/asset-management-365">
              Asset 365
            </Link>
          </label>
          <p className="MB_pera">
            Asset management App, Microsoft asset management is fixed asset
            management & Azure asset management software which helps in finding
            location, usage, cost, life, renewals of services in couple of
            clicks and automates your asset’s lifecycles
          </p>
        </div>
        {/* TM365 */}
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/time-off-manager-365">
              Time Off Manager 365
            </Link>
          </label>
          <p className="MB_pera">
            {AppName} leave management solution on cloud is a highly configurable
            can address leave management needs of any organisation, be it small
            or big.
          </p>
        </div>
        {/* EO365 */}
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/employee-onboarding-365">
              Employee Onboarding 365
            </Link>
          </label>
          <p className="MB_pera">
          {AppName} Employee Onboarding experience leads to pleasure experience
            for new joinee as well as no burden on HR team. With the help of
            {AppName} On-boarding app, there is no more paper work, employees
            integrate into their teams quicker
          </p>
        </div>
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/performance-management-365">
              Performance Management 365
            </Link>
          </label>
          <p className="MB_pera">
            Your teams drive your business. Drive productivity and engagement of
            employees for outstanding business results with Performance
            Management for SharePoint and Microsoft 365
          </p>
        </div>
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/sharepoint-timesheet">
              Timesheet 365
            </Link>
          </label>
          <p className="MB_pera">
          Microsoft 365 timesheet app is powerful, yet easy to use with functions like daily projectized and operational tasks, weekly reports linked with project and companies.


          </p>
        </div>
        <div className="HR_HomePagesection">
          <label>
            <Link className="MB_heading" to="/sharepoint-contract-management-software">
              CLM 365
            </Link>
          </label>
          <p className="MB_pera">
          Contract Lifecycle Management Software – CLM 365 - Contract Management  is ready to revolutionize your experience in managing contracts. Boost your team’s productivity and efficiency with SharePoint Contract Management software.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Homepage;
