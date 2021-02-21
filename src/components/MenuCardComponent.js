import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader} from 'reactstrap';


class MenuCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
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

        return(
            <div className="container">
                <div className="raw">
                    {menu}
                </div>
                <div className="raw">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default  MenuCard;