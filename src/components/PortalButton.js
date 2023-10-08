import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=()=>{
    return (
        <div id="portal-button">
            <button id="button" onClick={handleButtonClick}>Click</button>
        </div>
        
    )
}
export default PortalButton;

//portal-button id will be used here for portal purpose
