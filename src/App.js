// import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import React, {Component} from 'react'
import Menu from './components/MenuComponent'
import {DISHES} from './shared/dishes'
import MenuCard from "./components/MenuCardComponent";

class  App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          dishes: DISHES
        };
    }
  render(){
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Re-iterate Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            {/*<Menu dishes={this.state.dishes}></Menu>*/}
            <MenuCard dishes={this.state.dishes}></MenuCard>
        </div>
    );
  }


}

export default App;
