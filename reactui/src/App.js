import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Compbuttons from "./components/Compbuttons";
import CodeEditor from "./components/editor";
// import AceEditor from "./components/editor";
import FissionButton from "./components/fissionButton";
import PopoverExampleAnimation from "./components/sidebarmenu";
import ButtonExample from "./components/compbuttons";

class App extends Component {
  render() {
    return (
      <div className="App">
         <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">FISSION</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="collapsible.html">Sign-in</a></li>
            </ul>
            </div>
        </nav>
        <FissionButton />
        <div id="infobox">This is info on how to use the app</div>
             
        <CodeEditor />
         <ButtonExample />
       <PopoverExampleAnimation />
      
                  </div>
    );
  }
}

export default App;
