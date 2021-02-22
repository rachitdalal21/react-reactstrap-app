import React, {Component} from 'react'
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import DishDetail from "./DishdetailComponent";
import MenuCard from "./MenuCardComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect} from 'react-router-dom';

class  Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };

    }
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId})

    }
    render(){
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
                      promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                      leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                ></Home>
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
                    <Route exact path="/contactus" component={Contact}></Route>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default Main;
