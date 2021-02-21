import React, {Component} from 'react'
import {Media} from 'reactstrap';

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
        const menu = this.props.dishes.map( (dish) => {
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

export default Menu;