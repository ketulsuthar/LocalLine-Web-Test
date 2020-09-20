import React from 'react';

import Input from './Components/input';
import Label from './Components/label';
import Button from './Components/button';
import Select from './Components/select';

import './details.css';

const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];


const details = (props) => {
    let business_name = '';
    let location = '';
    let lastDeliveryDate = '';
    let monthSalesLabel = 'SALES';
    let monthOrderLabel = 'ORDER';
    let phoneNumber = '(123)456-7890';
    let totalSales = 0.0;
    let monthSales = 0.0;
    let orderThisMonth = 0;
    let buyerAverageOrder = 0.0;

    if(props.custobj.business_name){
        business_name = props.custobj.business_name ;
        location = props.custobj.city + ", " + props.custobj.province ;
        if(props.custobj.customer_info.last_delivery_date){
            let date = new Date(props.custobj.customer_info.last_delivery_date);
            const month = date.getMonth();
            monthSalesLabel = months[month] + " " + monthSalesLabel;
            monthOrderLabel = months[month] + " " + monthOrderLabel;
            lastDeliveryDate = months[month] + " " + date.getDay() + ", " + date.getFullYear();
        }
        orderThisMonth =  props.custobj.customer_info.orders_this_month;
        buyerAverageOrder = props.custobj.customer_info.buyer_average_order;
        monthSales = totalSales = buyerAverageOrder * orderThisMonth;

        
    }
    
    return(
        <div className="Row">
            <div className="Header">
                <span>{business_name}</span>
                <svg onClick={props.click} className="SVG"  fill="#34077d;" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>
            <div className="Column">
                <Label
                    name="LOCATION"
                ></Label>
                <Input value={location}></Input>
                <Label
                    name="PRODUCT CATALOG"
                ></Label>
                <Select
                    text="Select a Catalog"
                ></Select>
                <Button
                    class="Btn Send-Cat"
                    text="SEND CATALOG"
                ></Button>
                <Label
                    name="AVERAGE ORDER"
                ></Label>
                <Input value={`$${buyerAverageOrder}`}></Input>
                <Label
                    name={monthSalesLabel.toUpperCase()}
                ></Label>
                <Input value={`$${monthSales}`}></Input>
            </div>
            <div className="Column">
                <Label
                    name="PHONE"
                ></Label>
                <Input value={phoneNumber}></Input>
                <Label
                    name="LAST DELIVERY"
                ></Label>
                <Input value={lastDeliveryDate}></Input>
                <Button
                    class="Btn Add-Note"
                    text="ADD NOTE"
                ></Button>
                <Label
                    name={monthOrderLabel.toUpperCase()}
                ></Label>
               <Input value={orderThisMonth}></Input>
                <Label
                    name="TOTAL SALES"
                ></Label>
                <Input value={`$${totalSales}`}></Input>
            </div>
            <div  className="Footer">
                <hr></hr>
            </div>
        </div>
    );
}

export default details;