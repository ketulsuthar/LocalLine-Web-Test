import React from 'react';
import Pagination from './pagination';
import '../Customer/customer.css';
import './common.css';


const footer = (props) => {
    return(
        <div className="Pagination-Div">
           <Pagination></Pagination>
        </div>
    );
};


export default footer;