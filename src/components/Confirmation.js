import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class Confirmation extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { inputValues: { businessName, email, sellerId, countryId } } = this.props;

        return (
            <Container>
                <Form>
                    <div className="row  d-flex justify-content-center" style={{ marginTop: '140px' }} >
                        <div className="col-lg-6 mb-4 grid-margin">
                            <div className="card h-100">
                                <h4 className="card-header">Seller Pannel Register</h4>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <Form.Group as={Col} controlId="Address">
                                            <Form.Label className="label">Address </Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue={this.props.inputValues.Address}
                                                name="Address"
                                                required
                                                onChange={this.props.handleChange}
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className="mb-3">
                                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                                            <Form.Label>Default file input example</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </div>

                                    <div className="mb-3">
                                        <Form.Group as={Col} controlId="location">
                                            <Form.Label className="label">Location</Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue={this.props.inputValues.location}
                                                name="location"
                                                required
                                                onChange={this.props.handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <Button variant="btn btn-secondary" className="mr-3" onClick={this.back}> Back </Button>
                                    <Button variant="btn btn-primary" onClick={this.saveAndContinue}> Submit </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>

                {/* <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary">Confirm</Button> */}
            </Container>
        )
    }
}

export default Confirmation;