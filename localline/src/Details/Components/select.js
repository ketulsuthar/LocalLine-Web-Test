import React from 'react';
import '../details.css';

const select = (props) => {
    return(
        <select className="DropDown" id="catalog" name="catalog">
            <option value="0">{props.text}</option>
        </select>
    );
}

export default select;