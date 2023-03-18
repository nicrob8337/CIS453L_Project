import React, { Component } from 'react';
import Keycap from "../src/images/keycaps.jpg"

export class Keycapimage extends Component {

  render() {
    return(
        <div className="keyboard">
            <img alt="keycap image" src={Keycap}/>
        </div>
      
    );
  }

}

export default Keycapimage;