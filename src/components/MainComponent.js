import React, {Component} from 'react'
import {DISHES} from '../shared/dishes'
import DishDetail from "./DishdetailComponent";
import MenuCard from "./MenuCardComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect} from 'react-router-dom';

class  Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES
        };

    }
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId})

    }
    render(){
        const HomePage = () => {
            return (
                <Home></Home>
            );
        };

        return (
            <div className="App">

                {/*<Menu dishes={this.state.dishes}></Menu>*/}
                <Header/>
                {/*<MenuCard dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></MenuCard>*/}
                {/*<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>*/}
                <Switch>
                    <Route path="/home"  component={HomePage}></Route>
                    <Route exact path="/menu" component={() => <MenuCard dishes={this.state.dishes}/> } />
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default Main;
