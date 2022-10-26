import React from "react";
import { ReactDOM } from "react";
import Benefit1 from "../../assets/benefits/1.jpg"
import Benefit2 from "../../assets/benefits/2.jpg"
import Benefit3 from "../../assets/benefits/3.jpg"
import Benefit4 from "../../assets/benefits/4.jpg"
import './Benefits.scss'

export default function Benefits(){
    return(
        <div className="Benefits">
            <div className="Benefits--Head">
                <p className="Benefits--Head--1">What This Does to you.</p>
                <p>An Endless List of Health Benefits.</p>
            </div>
            <div className="Benefits--Grid">
                <ul className="BenefitsList">
                    <li><img src={Benefit1} className="Benefit1"/></li>
                    <li><img src={Benefit2} className="Benefit2"/></li>
                    <li><img src={Benefit3} className="Benefit3"/></li>
                    <li><img src={Benefit4} className="Benefit4"/></li>
                </ul>
            </div>
            <div className="Benefits--Location">
                <p className="Benefits--Location--P">And Much More.</p>
                <p className="Benefits--Location--P2">First 15 Miles from My Residence in Valencia is Free!</p>
            </div>

        </div>
    )
}