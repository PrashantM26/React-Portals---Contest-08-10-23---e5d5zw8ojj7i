import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  
  const [inputText, setInputText] = useState("");
  const handleButtonClick = () => {
    const textArea = document.getElementById("textarea");
    textArea.innerText += inputText;
  }
  
  return (
    
    <div id="main">
      <input id="input" value={inputText} onChange={(e) => setInputText(e.target.value)}></input><br/>
      createPortal(<PortalButton buttonclick={handleButtonClick} /><br/>
      <PortalTextArea value={}/>
    </div>
  )
}


export default App;
