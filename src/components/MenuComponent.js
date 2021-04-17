import React, {Component} from 'react'
import {Media} from 'reactstrap';
import {Loading} from "./LoadingComponet";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }
// ANOTHER WAY USING NORMAL HTML CSS CODE: IF NOT USED REACT-STRAP
// <div className="popat" key={dish.name}>
//     <img src={dish.image} alt={dish.name} className="img-alignment"/>
//     <h3>{dish.name}</h3>
//     <p>{dish.description}</p>
// </div>

    render() {
        const menu = this.props.dishes.dishes.map( (dish) => {
            return (
                <div className="col-12 mt-5" key={dish.id}>
                    <Media tag="li">
                        <Media left Middle className="displayflx">
                            <Media object src={dish.image} alt={dish.name}></Media>
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                            </Media>
                        </Media>
                    </Media>
                </div>
            )
        });

        if( this.props.dishes.isLoading ) {
            return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
            );
        }
        else if ( this.props.dishes.errMess ) {
        return (
            <div className="container">
                <div className="row">
                    {this.props.dishes.errMess}
                </div>
            </div>
        );
        }
        else {
            return(
                <div className="container">
                    <div className="raw">
                        <Media list>
                            {menu}
                        </Media>
                    </div>
                </div>
            );
        }

    }
}

export default Menu;
