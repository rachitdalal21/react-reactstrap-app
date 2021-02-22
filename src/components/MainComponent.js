import {Navbar, NavbarBrand} from "reactstrap";
import React, {Component} from 'react'
import {DISHES} from '../shared/dishes'
import DishDetail from "./DishdetailComponent";
import MenuCard from "./MenuCardComponent";

class  Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };

    }
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId})

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
                <MenuCard dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></MenuCard>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            </div>
        );
    }


}

export default Main;
