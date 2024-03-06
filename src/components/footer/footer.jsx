import React, { useState } from "react";
import '../../assets/styles/App.css'
import './footer.css'
import 'remixicon/fonts/remixicon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Foot() {
   return (
      <footer className="footer">
         <div className="row">
            <div className="footer-col">
               <h4>Ikuti Kami</h4>
               <div className="social-links">
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
               </div>
            </div>


            <div className="footer-col">
               <div className="footnav" >
                  <h4>Jelajahi</h4>
                  <ul>
                     <li><a href="#">Tentang Kami</a></li>
                     <li><a href="#cities">Kota Wisata</a></li>
                     <li><a href="/search">Pencarian Destinasi</a></li>
                  </ul>
               </div>
               <div className="footlogo">
                  <h4 id="uhuyy"></h4>
                  <img className="logo_foot" src={"/src/assets/image/footlogo.png"} alt="MlancongNangJatim" />
               </div>
            </div>

         </div>
      </footer>
   )
}