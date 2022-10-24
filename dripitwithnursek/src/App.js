import React from "react";
import { ReactDOM } from "react";
import NavBar from "./components/NavBar";
import Cover from "./assets/Cover2.jpg"
import CoverText from "./components/CoverText";
import Benefits from "./components/Benefits";

export default function App(){
    return(
        <div>
            <NavBar/>
            <body className="BodyClass">
                <div className="container">
                    <CoverText/>
                </div>
                <img src={Cover} className="CoverImage"></img>
            </body>
            
            
            <Benefits/>
        </div>
    )
}
