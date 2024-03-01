import React, { useState } from "react";
import '../../assets/styles/App.css'
import './footer.css'
import 'remixicon/fonts/remixicon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
               <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
           </div>
  
           <div className="footer-col">
              <h4>Jelajahi</h4>
              <ul>
                 <li><a href="#">Tentang Kami</a></li>
                 <li><a href="#">Kota Wisata</a></li>
                 <li><a href="#">Pencarian Destinasi</a></li>
              </ul>
           </div>
  
        </div>
     </footer>
    )
}