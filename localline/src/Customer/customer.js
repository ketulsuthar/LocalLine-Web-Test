import React, {Component} from 'react';
import Modal from '../Common/modal';
import Details from '../Details/details';
import './customer.css';
import APICall from '../Utils/util';

class Customer extends Component {

    constructor(){
        super();
        this.state = {
            showModal: 0,
            customers :[],
            customer :{}
        };
    } 

    componentDidMount() {
        const custs = APICall();
        custs.then(c => {
          this.setState({ customers : c.sort((a,b)=> a.business_name > b.business_name ? 1:-1)});
        })
    }

    hideModal = () => {
        const prevState = this.state.showModal;
        this.setState({showModal: !prevState});
    };

    getModal = (customer) => {   
        const prevState = this.state.showModal;
        this.setState({showModal: !prevState,customer:customer});
    }

    removeCustomer = (index) => {
        const array = [...this.state.customers]
        array.splice(index, 1);
        this.setState({customers: array});
        
    }

    render(){
        return(
            <div>
                {this.state.customers.map((customer,index) => (
                  
                        <div key={index} className="Customer">
                            <div className="Content">
                                <p className="Start">{customer.business_name}</p>
                                <sup className="End">{customer.city}</sup>
                            </div>
                            <div className="View">
                                <button className="Button" onClick={() =>this.getModal(customer)}>View</button>
                                <svg fill="#b3b3b3" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" onClick={() => this.removeCustomer(index)}>
                                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                        </div>
                 
                 ))}
                <Modal show = {this.state.showModal} > 
                    <Details
                        custobj = {this.state.customer}
                        click={this.hideModal}
                    ></Details>
                </Modal>
            </div>
        );
    }   
}

export default Customer;