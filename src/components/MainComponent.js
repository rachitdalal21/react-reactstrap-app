import React, {Component} from 'react'
import {DISHES} from '../shared/dishes'
import DishDetail from "./DishdetailComponent";
import MenuCard from "./MenuCardComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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

                {/*<Menu dishes={this.state.dishes}></Menu>*/}
                <Header/>
                <MenuCard dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></MenuCard>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                <Footer/>
            </div>
        );
    }


}

export default Main;
