import React from "react";
import { ReactDOM } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cover from "./assets/Cover2.jpg"
import CoverText from "./components/CoverText";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./pages/Services";



export default function App(){
    return(
        <Router>
            <div>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                </head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
                </style>
                <NavBar/>
                
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/services">
                            <Services/>
                        </Route>
                        <Route path="/locations">
                            <Services/>
                        </Route>
                        <Route path="/bookservices">
                            <Services/>
                        </Route>
                        
                    </Switch>
               

                <Footer/>
            </div>
            </Router>

    )
}
