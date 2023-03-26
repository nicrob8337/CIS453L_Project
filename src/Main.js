import React, { Component } from "react";
import {Route, Routes,  NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Keyboards from "./Keyboards";
import Keycaps from "./Keycaps";
import Footer from "./footer";

class Main extends Component {
    render(){
        return(
            <HashRouter>
            <div>
                <h1>ThocStock</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/keyboards">Keyboards</NavLink></li>
                    <li><NavLink to="/keycaps">Keycaps</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/keyboards" element={<Keyboards/>}/>
                    <Route path="/keycaps" element={<Keycaps/>}/>
                </Routes>
                </div>
            </div>
            <Footer/>
            </HashRouter>
        );
    }
}

export default Main;