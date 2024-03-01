import React, { useState } from "react";
import './navbar.css'
import 'remixicon/fonts/remixicon.css';

export default function Nav() {
    const [isMenuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!isMenuVisible);
    };
  
    return (
      <header className="header">
        <nav className={`nav container ${isMenuVisible ? "show-menu" : ""}`} id="nav-menu">
          <div className="nav__data">
            <a href="#" className="nav__logo">
              <i className="ri-planet-line"></i> Company
            </a>
  
            <div className={`nav__toggle ${isMenuVisible ? "show-icon" : ""}`} id="nav-toggle" onClick={toggleMenu}>
              <i className="ri-menu-line nav__burger"></i>
              <i className="ri-close-line nav__close"></i>
            </div>
          </div>

                {/* <!--=============== NAV MENU ===============--> */}
                <div className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">

                 
                       

                        {/* <!--=============== DROPDOWN 2 ===============--> */}
                        <li className="dropdown__item">
                            <div className="nav__link">
                                Jenis Wisata <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <ul className="dropdown__menu">
                                <li>
                                    <a href="#" className="dropdown__link">
                                    <i className="ri-plant-line"></i> Lingkungan
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="dropdown__link">
                                    <i className="ri-artboard-2-line"></i> StayCation
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="dropdown__link">
                                    <i className="ri-game-line"></i>Atraksi HIburan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown__link">
                                    <i className="ri-game-line"></i> See more...
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <div className="nav__link"> Kota  </div>

                        <li>
                            <a href="#" className="nav__link"><i className="ri-search-2-line"></i> </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        )
    }
