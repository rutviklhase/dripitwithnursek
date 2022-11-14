import React from "react";
import { ReactDOM } from "react";
import LogoNav from '../../assets/LOGOW.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './NavBar.scss'

export default function NavBar()
{
    return(
        <div className = "NavBar">
            
            <nav>
            <img src={LogoNav} className="LogoNav"/>
                <ul className="NavList">
                    <li><a href="/">Home </a></li>
                    <li><a href="/location">Locations</a></li>
                    <li><a href="/services">Services</a></li>
                    <li>Book Services</li>
                </ul>
            </nav>
        </div>
    )
}