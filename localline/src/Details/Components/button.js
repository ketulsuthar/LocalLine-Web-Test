import React from 'react';
import '../details.css';

const button = (props) => {
    return(
        <button className={props.class}>{props.text}</button>
    );
}

export default button;