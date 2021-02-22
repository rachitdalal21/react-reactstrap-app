import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader} from 'reactstrap';
import DishDetail from "./DishdetailComponent";


class MenuCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }

        console.log("Menu Card Constructor is Called")
    }

    componentDidMount() {
        console.log("Menu Card component did mount is Called")
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardHeader>{dish.name}</CardHeader>
                    <CardBody>
                        <CardTitle>{dish.title}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            )
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish})

    }
    render() {
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                            {/*<cardText>{dish.description}</cardText>*/}
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        console.log("Menu Card render is Called")
        return(
            <div className="container">
                <div className="raw">
                    {menu}
                </div>
                <div className="raw">
                    {/*{this.renderDish(this.state.selectedDish)}*/}
                    <DishDetail dish={this.state.selectedDish}></DishDetail>
                </div>
            </div>
        );
    }
}

export default  MenuCard;