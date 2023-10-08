import React ,{useState, useRef} from 'react'
import {createPortal} from "react-dom";
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  
  const [inputText, setInputText] = useState("");
  const [textArea, setTextArea] = useState("");
  const handleButtonClick = () => {
    //const textArea = document.getElementById("textarea");
    setTextArea(inputText);
    //textArea.innerText += inputText;
    setInputText("");
  }
  
  return (
    
    <div id="main">
      <input id="input" value={inputText} onChange={(e) => setInputText(e.target.value)}></input><br/>
      {createPortal(<PortalButton buttonclick={handleButtonClick} />, document.getElementById("portal-button"))}<br/>
      {createPortal(<PortalTextArea value={textArea}/>, document.getElementById("portal-textfield"))}
    </div>
  )
}


export default App;
