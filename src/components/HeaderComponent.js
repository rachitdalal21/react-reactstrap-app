import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button,
    Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input
} from 'reactstrap';
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }
    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }
    handleLogin(event) {
        this.toggleModal();
        alert("username - "+ this.username.current.value + " Password : "+ this.password.current.value);
        event.preventDefault();
    }
    render(){
        return (
    <React.Fragment>
    <Navbar dark color="primary" expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-right" href="/">
                <img src="assets/images/logo.png" height="30" width="40"
                     alt="Ristorante con Fusion"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg">
                        </span>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg">
                        </span>
                        About Us
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/menu">
                        <span className="fa fa-list fa-lg">
                        </span>
                        Menu
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-address-card fa-lg">
                        </span>
                        Contact Us
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" to="/contactusLocalForm">
                        <span className="fa fa-address-card fa-lg">
                        </span>
                        Contact Us(LF)
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/orgList">
                        <span className="fa fa-arrow-circle-o-right fa-lg">
                        </span>
                        Org List
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" Navbar>
                <NavItem>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg">Login</span>
                    </Button>
                </NavItem>
            </Nav>
            </Collapse>
        </div>
    </Navbar>
    <Jumbotron>

        < div className="container">
        <div className="row row-header">
        <div className="col-12 col-sm-6">
        <h1>Ristorante con Fusion</h1>
        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
        </div>
        </div>
        </div>
    </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup row>
                        {/*<div className="row-content">*/}
                            <Label htmlFor="username" className="col-md-3">User Name: </Label>
                            <Input className="col-md-7" type="text" name="username"
                                   ref={(input)=> this.username = input } />
                        {/*</div>*/}
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="password" className="col-md-3">Password: </Label>
                        <Input className="col-md-7" type="password" name="password"
                               ref={(input) => this.password = input}/>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary" >Login</Button>
                </Form>
                {/*<Form>*/}
                {/*    <div className="formSetup" >*/}
                {/*        <Label for="username" className="label-form">User Name: </Label>*/}
                {/*        <Input className="input-form" type="text" name="username"*/}
                {/*               id = "username"/>*/}
                {/*    </div>*/}
                {/*    <div className="formSetup" >*/}
                {/*        <Label for="password" className="label-form">Password: </Label>*/}
                {/*        <Input className="input-form" type="password" name="password"*/}
                {/*               id = "password"/>*/}
                {/*    </div>*/}
                {/*</Form>*/}
            </ModalBody>
        </Modal>
    </React.Fragment>
        );
    }
}

export default Header;