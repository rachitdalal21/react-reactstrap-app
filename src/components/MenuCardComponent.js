import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from "react-router-dom";
import {Loading} from "./LoadingComponet";

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
        const menu = this.props.dishes.dishes.map( (dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Link to={`/menu/${dish.id}`}>
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardImgOverlay className="ml-5">
                                <CardTitle heading>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Link>
                </div>
            )
        });
        console.log("Menu Card render is Called");
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
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Menu
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="raw">
                        {menu}
                    </div>
                </div>
            );
        }

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
