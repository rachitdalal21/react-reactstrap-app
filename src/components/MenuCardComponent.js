import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class MenuCard extends Component {
    constructor(props) {
        super(props);
        console.log("props ", props)
        console.log("Menu Card Constructor is Called")
    }

    componentDidMount() {
        console.log("Menu Card component did mount is Called")
    }
    // function RenderMenuItem ({dish, onClick}) {
    //     return (
    //         <Card
    //             onClick={() => onClick(dish.id)}>
    //             <CardImg width="100%" src={dish.image} alt={dish.name} />
    //             <CardImgOverlay>
    //                 <CardTitle>{dish.name}</CardTitle>
    //             </CardImgOverlay>
    //         </Card>
    //     );
    // }



    render() {
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
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
            </div>
        );
    }
    // const Menu = (props) => {
    //
    //     const menu = props.dishes.map((dish) => {
    //         return (
    //             <div className="col-12 col-md-5 m-1"  key={dish.id}>
    //                 <RenderMenuItem dish={dish} onClick={props.onClick} />
    //             </div>
    //         );
    //     });
    //
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 {menu}
    //             </div>
    //         </div>
    //     );
    // }


}

export default  MenuCard;