import React, {Component} from 'react'
import DishDetail from "./DishdetailComponent";
import MenuCard from "./MenuCardComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from './AboutComponent'
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactComponentLocalForm from "./ContactComponentLocalForm";
import OrganizationHierarcy from "./OrganizationHierarcy";
import {addComment, fetchDishes} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
        employees: state.employees
    }
};

const mapDispatchToProps = ( dispatch )=> ({
    addComment: (dishId, rating, author, comments) => dispatch(addComment(dishId, rating, author, comments)),
    // fetchDishes: () => {dispatch(fetchDishes())}
    fetchDishes: () => dispatch(fetchDishes())
});



class  Main extends Component {
    constructor(props) {
        super(props);

    }
    // onDishSelect(dishId) {
    //     this.setState({selectedDish: dishId})
    //
    // }

    componentDidMount( ) {
        this.props.fetchDishes();
    }

    render(){
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
                      dishesLoading={this.props.dishes.isLoading}
                      dishesErrMess={this.props.dishes.errMess}
                      promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                ></Home>
            );
        };

        const  DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId))[0]}
                            isLoading={this.props.dishes.isLoading}
                            errMess={this.props.dishes.errMess}
                            comments={this.props.comments.filter((comment) => {
                                return comment.dishId === parseInt(match.params.dishId)} )}
                            addComment={this.props.addComment}></DishDetail>
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
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}></Route>
                    <Route exact path="/menu" component={ () => <MenuCard dishes={this.props.dishes}/>  } />
                    <Route exact path="/menu/:dishId" component={DishWithId}></Route>
                    <Route exact path="/contactus" component={Contact}></Route>
                    <Route exact path="/contactusLocalForm" component={ContactComponentLocalForm}></Route>
                    <Route exact path="/orgList" component={() => <OrganizationHierarcy employees={this.props.employees}/> }></Route>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
