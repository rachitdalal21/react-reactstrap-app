import React, {Component} from 'react'
import DishDetail from "./DishdetailComponent";
import MenuCard from "./MenuCardComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactComponentLocalForm from "./ContactComponentLocalForm";

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

class  Main extends Component {
    constructor(props) {
        super(props);

    }
    // onDishSelect(dishId) {
    //     this.setState({selectedDish: dishId})
    //
    // }

     render(){
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
                      promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                ></Home>
            );
        };

        const  DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId))[0]}
                            comments={this.props.comments.filter((comment) => {
                                return comment.dishId === parseInt(match.params.dishId)
                            } )} ></DishDetail>
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
                    <Route exact path="/menu" component={() => <MenuCard dishes={this.props.dishes}/> } />
                    <Route exact path="/menu/:dishId" component={DishWithId}></Route>
                    <Route exact path="/contactus" component={Contact}></Route>
                    <Route exact path="/contactusLocalForm" component={ContactComponentLocalForm}></Route>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default withRouter(connect(mapStateToProps)(Main));
