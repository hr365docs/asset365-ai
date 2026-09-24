import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import Privacypolicy from "./Header and Footer/Privacypolicy";
import Termandcondition from "./Header and Footer/Termandcondition";
import EULA from "./Header and Footer/EULA";
import Thankyou from "./Thankyou";

import { CelebrateOffer } from "./CelebrateOffer";
import ProductsAddon from "./ProductsAddon";
import ET365 from "./ET365";
import Asset365ai from "./Asset365ai";
function NavBar() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Asset365ai/>,
      // element: <Homepage />,
    },

    {
      path: "/black-day-offer",
      element: <CelebrateOffer page={"BlackFriday"} Type="Image" />,
      // loader: "",
      // key: "employee-directory-365",
    },
    {
      path: "/cubic-anniversary-offer",
      element: <CelebrateOffer page={"CubicAnniversary"} Type="Image" />,
      // loader: "",
      // key: "employee-directory-365",
    },
  
    {
      path: "/privacy-policy",
      element: <Privacypolicy />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/terms-and-conditions",
      element: <Termandcondition />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/end-user-license-agreement-eula",
      element: <EULA />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/thank-you",
      element: <Thankyou />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/product-addons",
      element: <ProductsAddon />,
      // loader: "",
      // key: "helpdesk-365",
    },
  ]);
  return (
    <>
      <div>
        {/* <Header/> */}
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default NavBar;
