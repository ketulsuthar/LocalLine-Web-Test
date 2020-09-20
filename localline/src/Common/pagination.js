import React from 'react';
import './common.css';


const pagination = (props) => {
    return(
        <div className="Pagination">
            <a href="#" className="LT"></a>
            <a href="#" className="active">1</a>
            <a href="#" className="GT"></a>
        </div>
    );
}

export default pagination;