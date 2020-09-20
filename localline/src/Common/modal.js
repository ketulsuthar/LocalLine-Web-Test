import React  from 'react';
import Backdrop from "./backdrop";
import './common.css';


const model =(props) => {
    return(
        <div>
            <Backdrop show={props.show} />
            {/* <Backdrop show={props.show} index = {props.index} click={props.click} /> */}
            <div
                className="Modal"
                style={{
                    borderRadius:'0.5rem',
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </div>
    );
}

export default model;