import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";

class Contact extends Component  {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName:'',
            telNum:'',
            email:'',
            agree: false,
            contactType: 'Tel.',
            msg:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange(event){
        const target = event.target;
        const value =  target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log("The form state is : "+JSON.stringify( this.state));
        alert("The form state is : "+JSON.stringify(this.state));
        event.preventDefault();
    }
    render () {
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" className="col-md-2">First Name</Label>
                                <div className="col-md-10">
                                    <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange}/>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-md-2" htmlFor="lastName">Last Name</Label>
                                <div  className="col-md-10">
                                    <Input type="text" name="lastName"
                                           id="lastName"
                                           placeholder="Last Name"
                                           value={this.state.lastName}
                                           onChange={this.handleInputChange}/>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" className="col-md-2">Telephone</Label>
                                <div className="col-md-10">
                                    <Input type="number" name="telNum" id="telNum"
                                           placeholder="Tel. Number"
                                           value={this.state.telNum}
                                           onChange={this.handleInputChange}/>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" className="col-md-2">Email</Label>
                                <div className="col-md-10">
                                    <Input type="email" name="email" id="email"
                                           placeholder="Add Email ID"
                                           value={this.state.email}
                                           onChange={this.handleInputChange}/>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <div className="col-md-2"></div>
                                <div className="col-md-offset-2 col-md-4">
                                    <Input type="checkbox" name="agree" id="agree"
                                        value={this.state.agree}
                                        onChange={this.handleInputChange}>
                                    </Input>
                                    <Label> May we contact you? </Label>
                                </div>
                                <div className="col-md-offset-10 col-md-2">
                                    <Input type="select" name="contactType" id="contactType"
                                           value={this.state.contactType}
                                           onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                    {/*<Label> May we contact you? </Label>*/}
                                </div>
                            </FormGroup>
                            <div className="row mb-3">
                                <Label className="col-md-2" htmlFor="msg">Your Feedback</Label>
                                <div  className="col-md-10">
                                    <Input type="textarea" name="msg"
                                           id="msg"
                                           rows="12"
                                           placeholder="Add your feedback"
                                           value={this.state.feedback}
                                           onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <FormGroup row >
                                <Button type="submit" color="primary">Send Feedback!</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;