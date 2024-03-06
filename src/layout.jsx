import { useLocation } from "react-router-dom";
import Foot from "./components/footer/footer";
import Nav from "./components/navbar/navbar";
import ScrollToTop from "./components/scrolltopbutton/scrolltopbutton";
import NavHome from "./components/navhome/navhome";
import { useEffect, useRef, useState } from "react";

function Layout({ children }) {
  const location = useLocation();
  const currentRoute = location.pathname;
  const isHome = currentRoute === "/";
  return (
    <div className="layout">
      {isHome && <NavHome />}

      {!isHome && <Nav />}
      <main>{children}</main>
      <Foot />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
