import React, { Component } from 'react';
import Keycap from "../src/images/keycaps.jpg"

export class Keycapimage extends Component {

  render() {
    return(
        <div className="keyboard">
            <a href="#/Keycaps"><img alt="keycap image" src={Keycap}/></a>
            <text>KeyCaps</text>
        </div>
      
    );
  }

}

export default Keycapimage;