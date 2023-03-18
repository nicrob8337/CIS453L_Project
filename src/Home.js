import React, { Component } from "react";
import Keyboardimage from "./Keyboardimage";
import Keycap from "./Keycapimage";

class Home extends Component{
    render(){
        return(
            <div className="home">
                <h2>The best in-stock Mechanical Keyboard products</h2>
                <p className="phrase">Spend less time searching for what's in stock and more time building!</p>
                <div className="images">
                    <Keyboardimage/>
                    <Keycap/>
                </div>
                
            </div>
        );
    }
}

export default Home;