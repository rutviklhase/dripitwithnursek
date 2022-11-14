import React from "react";
import { ReactDOM } from "react";
import CoverText from "../CoverText";
import Benefits from "../Benefits/Benefits";
import './Home.scss'
import $ from 'jquery'



export default function Home(){

    return(
        <div className="HomeMain">
            <div className="container--body">
                    <CoverText/>
            </div>
                    <Benefits/>
        </div>

    )
}
