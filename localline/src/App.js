import React, {Component} from 'react';
import './App.css';
import Customer from './Customer/customer';
import Footer from './Common/tablefooter';
import Header from './Common/tableheader';

class App extends Component{

  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <Header/>
          <Customer/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
