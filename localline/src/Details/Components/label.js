import React from 'react';
import '../details.css';

const label = (props) => {
    return(
        <label className="Label">{props.name}</label>
    );
}

export default label;