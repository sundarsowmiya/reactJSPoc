import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';


class AddressDetails extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        return (<Container>
            <Form>
                <div className="row  d-flex justify-content-center" style={{ marginTop: '140px' }} >
                    <div className="col-lg-6 mb-4 grid-margin">
                        <div className="card h-100">
                            <h4 className="card-header">Seller Pannel Register</h4>
                            <div className="card-body">
                                <div className="mb-3">
                                    <Form.Group as={Col} controlId="BusinessName">
                                        <Form.Label className="label">Business Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={this.props.inputValues.businessName}
                                            name="BusinessName"
                                            required
                                            onChange={this.props.handleChange}
                                        />
                                    </Form.Group>
                                </div>

                                <div className="mb-3">
                                    <Form.Group as={Col} controlId="formEmail">
                                        <Form.Label className="label">Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            defaultValue={this.props.inputValues.email}
                                            name="email"
                                            required
                                            onChange={this.props.handleChange}
                                        />
                                    </Form.Group>
                                </div>

                                <div className="mb-3">
                                    <Form.Group as={Col} controlId="password">
                                        <Form.Label className="label">Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            defaultValue={this.props.inputValues.password}
                                            name="password"
                                            required
                                            onChange={this.props.handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
                                <Button variant="btn btn-secondary" className="mr-3" onClick={this.back}> Back </Button>
                                <Button variant="btn btn-primary" onClick={this.saveAndContinue}> Next </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Container>
        );
    }
}

export default AddressDetails;