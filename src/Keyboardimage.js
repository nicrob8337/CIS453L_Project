import React, { Component } from 'react';
import keyboard from "../src/images/batman-keyboard.jpg"


export class Keyboardimage extends Component {

  
  render() {
    
    return(
        <div className="keyboard">
          <div>
          <a href="#/Keyboards"><img alt="keyboard image" src={keyboard}/></a>
          </div>
            <div>
            <text>Keyboards</text>
            </div>
            
        </div>
      
    );
  }

}

export default Keyboardimage;