import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=()=>{
    return (
        <div id="portal-textfield">
            <textarea id="textarea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
    )
}
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose
