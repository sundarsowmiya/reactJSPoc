import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class UserDetails extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        return (<Container >
            <Form>
                <div className="row  d-flex justify-content-center" style={{ marginTop: '140px' }}>
                    <div className="col-lg-6 mb-4 grid-margin">
                        <div className="card h-100">
                            <h4 className="card-header">Seller Pannel Register</h4>
                            <div className="card-body">
                                <div className="mb-3">
                                    <Form.Label className="label" >Seller Types</Form.Label>
                                    <select controlId="sellerId" className="browser-default custom-select">
                                        <option>Choose Seller Types</option>
                                        <option value="1">public owned</option>
                                        <option value="2">private owned</option>
                                        <option value="3">state owned</option>
                                        <option value="4">individual</option>
                                        <option value="5">charity</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <Form.Label className="label">Country</Form.Label>
                                    <select controlId="countryId" className="browser-default custom-select">
                                        <option>Choose Country</option>
                                        <option value="1">Country 1</option>
                                        <option value="2">Country 2</option>
                                        <option value="3">Country 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
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

export default UserDetails;