import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg, CardText, CardTitle} from "reactstrap";
import Moment from 'moment'
import {Link} from "react-router-dom";

class DishDetail extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log("Dish Details componentDidMount is Called")
    }
    componentDidUpdate() {
        console.log("Dish Details componentDidUpdate is Called")
    }

    renderDish(dish){
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
        const comments = this.props.comments;
        if (selectedDish && selectedDish !== null) {
            return(
                <div className="container">
                    <div className="raw">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            {this.renderDish(selectedDish)}
                        </div>
                        <div className="col-12 col-md-5">
                            {this.renderComments(comments)}
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