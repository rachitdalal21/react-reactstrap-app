// import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import React, {Component} from 'react'
import Menu from './components/MenuComponent'

class  App extends Component {
  render(){
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Re-iterate Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu></Menu>
        </div>
    );
  }


}

export default App;
