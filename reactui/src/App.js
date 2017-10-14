import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Compbuttons from "./Compbuttons";
import CodeEditor from "./components/editor";


class App extends Component {
  render() {
    return (
      <div className="App">
         <nav>
          <div className="nav-wrapper">
            <a href="#" class="brand-logo">FISSION</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="collapsible.html">Sign-in</a></li>
            </ul>

            </div>
        </nav>
        <div id ="editorbox"></div>
        <div id = "buttonbox"></div>
        <div id="sidemenu"></div>
     
       <CodeEditor />
                  </div>
    );
  }
}

export default App;
