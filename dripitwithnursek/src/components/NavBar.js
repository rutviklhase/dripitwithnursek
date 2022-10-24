import React from "react";
import { ReactDOM } from "react";
import LogoNav from '../assets/LOGOW.png'

export default function NavBar()
{
    return(
        <div className = "NavBar">
            <nav>
                <img src={LogoNav} className="LogoNav"/>
                <ul className="NavList">
                    <li>Home </li>
                    <li>Locations</li>
                    <li>Services</li>
                    <li>Book Services</li>
                </ul>
            </nav>
        </div>
    )
}