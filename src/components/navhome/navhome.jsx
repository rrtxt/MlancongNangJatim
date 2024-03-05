import React, { useState } from "react";
import "./navhome.css";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

export default function NavHome() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <header
      className={`navhome-header  ${isScrolled ? "scrolled" : ""} ${
        isMenuVisible ? "show-menu" : ""
      }`}>
      <nav
        className={`nav container ${isMenuVisible ? "show-menu" : ""}`}
        id="nav-menu">
        <div className="nav__data">
          {/* <a href="#" className="nav__logo">
          </a> */}
          <Link to="/" className="nav__logo">
            <img
              src={"/src/assets/image/navlogo.png"}
              alt="MlancongNangJatim"
            />
          </Link>

          <div
            className={`nav__toggle ${isMenuVisible ? "show-icon" : ""}`}
            id="nav-toggle"
            onClick={toggleMenu}>
            <i className="ri-menu-line nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>

        {/* <!--=============== NAV MENU ===============--> */}
        <div
          className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`}
          id="nav-menu">
          <ul className="nav__list">
            {/* <!--=============== DROPDOWN 2 ===============--> */}
            <li className="dropdown__item">
              <div className="nav__link">
                Jenis Wisata{" "}
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-plant-line"></i>Lingkungan
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-opera-line"></i>Budaya
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-game-line"></i>Atraksi HIburan
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-map-pin-add-line"></i> See more
                  </a>
                </li>
              </ul>
            </li>

            <div className="nav__link"> Kota </div>

            <li>
              <Link to="/search" className="nav__link">
                <i className="ri-search-2-line"></i>{" "}
              </Link>
              {/* <a href="#" className="nav__link">
              </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
