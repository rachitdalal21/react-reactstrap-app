import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap";
import {LocalForm, Control, Errors} from "react-redux-form";


class CommentForm extends Component{
    constructor(props){
        super(props)
        debugger;
        this.state = {
            isModalOpen: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }
    handleSubmit(values){
        //console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.modalToggle();
    }

    render(){
        const required = (val) => val && val.length;
        const minLength = (len) => (val) => val  &&  (val.length >= len) ;
        const maxLength = (len) => (val) => !val || (val.length <= len) ;

        return (
            <div>
            <Button outline color="secondary" onClick={this.modalToggle}>
            <span className="fa fa-pencil fa-lg">
            </span>
                <span>Submit Comment</span>
            </Button>
                <div className="row row-content">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.modalToggle}>
                        <ModalHeader toggle={this.modalToggle}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12">
                                <LocalForm onSubmit={this.handleSubmit}>
                                    <Row className ="form-group">
                                        <Label htmlFor="rating" md={12}>Rating</Label>
                                        <Col md={12}>
                                            <Control.select id="rating" name ="rating" model =".rating"
                                                            className = "form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className ="form-group">
                                        <Label htmlFor="name" md={12}>Your Name</Label>
                                        <Col md={12}>
                                            <Control.text name ="name" model =".name"
                                                          placeholder ="Your Name" id="name" className="form-control"
                                                          validators={{
                                                              required, minLength: minLength(3), maxLength: maxLength(15)
                                                          }}></Control.text>

                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 3 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="from-group">
                                        <Label htmlFor="comment" md={12}>Comment</Label>
                                        <Col md={12}>
                                        <Control.textarea model=".comment" name="comment"
                                                          id="comment" row="12" className="form-control"validators={{
                                            required
                                        }}></Control.textarea>
                                            <Errors
                                                className="text-danger"
                                                model=".comment"
                                                show="touched"
                                                messages={{
                                                    required: 'Required'
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }

}
export default CommentForm;
