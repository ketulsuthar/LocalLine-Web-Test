import React from 'react';
import '../details.css';

const input = (props) => {
    return(
        <input className="Input-Cls" type="text" value={props.value} readOnly></input>
    );
}

export default input;