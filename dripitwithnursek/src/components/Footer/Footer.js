import React from "react";
import { ReactDOM } from "react";
import './Footer.scss'
import LOGOW from '../../assets/LOGOW.png'

export default function Footer(){
    return(
        <div className="Footer">
            <div className="FooterContent">
                <div className = "contactme">
                    <ul className = "contactmelist">
                        <li className = "ListHeader"> Contact Me </li>
                        <li> (818)-209-3709 </li>
                        <li>dripitwithnursek@gmail.com</li>
                    </ul>
                </div>

                <div className="socialmedia">
                    <ul className = "socialmedialist">
                        <li className = "ListHeader"> Social Media</li>
                        <li> Instagram</li>
                        <li> Facebook</li>
                        <li> LinkedIn</li>
                    </ul>
                </div>

                <div className = "locations">
                    <ul className = "locationslist">
                        <li className = "ListHeader">Locations</li>
                        <li>Valencia</li>
                        <li>Santa Clarita and Surrounding Areas</li>
                        <li>San Fernando and Surrounding Areas</li>
                    </ul>
                </div>


            </div>
            <div className="footerlogo">
                    <img src={LOGOW} className="footerlogofile"/>
                </div>
        </div>

    )
}