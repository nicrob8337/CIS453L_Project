import React, { Component } from 'react';
import keyboard from "../src/images/batman-keyboard.jpg"

export class Keyboardimage extends Component {

  render() {
    return(
        <div className="keyboard">
            <img alt="keyboard image" src={keyboard}/>
        </div>
      
    );
  }

}

export default Keyboardimage;