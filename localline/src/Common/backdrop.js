import React from 'react';


const backdrop = (props) => (
    // props.show ? <div className="Backdrop" onClick={() => props.click}></div> : null
    props.show ? <div className="Backdrop"></div> : null
);

export default backdrop;