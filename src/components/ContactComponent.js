import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Label, FormFeedback} from "reactstrap";
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
            msg:'',
            touched: {
                firstName:false,
                lastName:false,
                email: false,
                telNum: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }
    handleInputChange(event){
        const target = event.target;
        const value =  target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name


        // Following code  will not work/ It will not update the state
        // this.setState({
        //     name: value
        // })

        // ES6 computed property name
        // this.setState({
        //     [name]: value
        // });

        // It is equivalent to this ES5 code:
        let te = {};
        te[name] = value;
        console.log(te)
        this.setState(te);
    }

    handleSubmit(event){
        console.log("The form state is : "+JSON.stringify( this.state));
        alert("The form state is : "+JSON.stringify(this.state));
        event.preventDefault();

        setTimeout(function () {

        }, 1000)
    }

    handleBlur = (field) =>  (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })
    };

    validate(firstName, lastName, telNum, email){
      const error = {
          firstName: '',
          lastName:'',
          telNum:'',
          email:'',
      }

      if( this.state.touched.firstName && firstName.length < 3 ) {
          error.firstName = 'First name should be greater than 3 characters';

      }
      else if( this.state.touched.firstName && firstName.length >  12 ){
          error.firstName = 'First name should be less than 12 characters';
      }
     if( this.state.touched.lastName && lastName.length < 3 ) {
        error.lastName = 'Last name should be greater than 3 characters';

    }
    else if( this.state.touched.lastName && lastName.length >  12 ){
        error.lastName = 'Last name should be less than 12 characters';
    }

    const reg = /^\d+$/g;
    if( this.state.touched.telNum && !reg.test(telNum)) {
        error.telNum = 'Tel. num should contain number only';
    }
        const reg1 = /^\d+$/g;
    if( this.state.touched.email && email.split('').filter((x) => x === '@').length !== 1) {
        error.email = 'Email should contain a @ sign';
    }
    return error;
    };

    render () {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telNum, this.state.email)
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
                                           valid={errors.firstName === ''}
                                           invalid={errors.firstName !== ''}
                                           value={this.state.firstName}
                                           onBlur={this.handleBlur('firstName')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.firstName}
                                    </FormFeedback>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-md-2" htmlFor="lastName">Last Name</Label>
                                <div  className="col-md-10">
                                    <Input type="text" name="lastName"
                                           id="lastName"
                                           placeholder="Last Name"
                                           valid={errors.lastName === ''}
                                           invalid={errors.lastName !== ''}
                                           value={this.state.lastName}
                                           onBlur={this.handleBlur('lastName')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.lastName}
                                    </FormFeedback>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" className="col-md-2">Telephone</Label>
                                <div className="col-md-10">
                                    <Input type="number" name="telNum" id="telNum"
                                           placeholder="Tel. Number"
                                           value={this.state.telNum}
                                           valid={errors.telNum === ''}
                                           invalid={errors.telNum !== ''}
                                           onBlur={this.handleBlur('telNum')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.telNum}
                                    </FormFeedback>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" className="col-md-2">Email</Label>
                                <div className="col-md-10">
                                    <Input type="email" name="email" id="email"
                                           placeholder="Add Email ID"
                                           value={this.state.email}
                                           valid={errors.email === ''}
                                           invalid={errors.email !== ''}
                                           onBlur={this.handleBlur('email')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
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
                <div className="container">
                    <div className="row row-content">
                        <h3>Form Content</h3>
                        <div>
                            Name : <p> {this.state.firstName}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;
