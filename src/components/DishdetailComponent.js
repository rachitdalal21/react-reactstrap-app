import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardImg, CardText, CardTitle} from "reactstrap";
import Moment from 'moment'

class DishDetail extends Component {
    componentDidMount() {
        console.log("Dish Details componentDidMount is Called")
    }
    componentDidUpdate() {
        console.log("Dish Details componentDidUpdate is Called")
    }

    renderDish(dish){
        debugger;
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

    );

    }

    renderComments(comments) {
        if (comments.length > 0) {

            const comment = comments.map((comment) => {
                const date = Moment(new Date(comment.date)).format("MMM DD, YYYY")
                return (
                    <div key={comment.id}>
                        <li>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {date}</p>
                        </li>
                    </div>
                );

            })
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>

            );
        } else {
            return (
                <div>Please add comments to view!!!</div>
            );
        }
    }

    render(){
        console.log("Dish Details component render is Called")
        const selectedDish = this.props.dish;
        if (selectedDish && selectedDish !== null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            {this.renderDish(selectedDish)}
                        </div>
                        <div className="col-12 col-md-5">
                            {this.renderComments(selectedDish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }

    }
}
export default DishDetail;