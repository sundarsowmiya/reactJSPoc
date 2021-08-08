import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
const schema = yup.object().shape({
  businessName: yup.string().required('businessName is required').max(50, 'Must be 50 characters or less'),
  email: yup.string().required('email is required').email('Invalid email address'),
  password: yup.string().required('password is required').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

class AddressDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  person: []
		};
	}
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
            <Formik
      validationSchema={schema}
       onSubmit={(values, actions) => {
		 this.props.loadValues(values);
       }}  
      initialValues={{
        businessName: this.props.inputValues.businessName,
        password: this.props.inputValues.password,
        email: this.props.inputValues.email
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                <div className="row  d-flex justify-content-center" style={{ marginTop: '140px' }} >
                    <div className="col-lg-6 mb-4 grid-margin">
                        <div className="card h-100">
                            <h4 className="card-header">Seller Pannel Register</h4>
                            <div className="card-body">
                                <div className="mb-3">
                                    <Form.Group as={Col} controlId="businessName">
                                        <Form.Label className="label">Business Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="businessName"
											value={values.businessName}
											onChange={handleChange}
											isValid={touched.businessName && !errors.businessName}
											isInvalid={touched.businessName && !!errors.businessName}
                                        />
										{touched.businessName && errors.businessName ? (
								<Form.Control.Feedback type="invalid">{errors.businessName}</Form.Control.Feedback>
                        ) : null}
                                    </Form.Group>
                                </div>

                                <div className="mb-3">
                                    <Form.Group as={Col} controlId="formEmail">
                                        <Form.Label className="label">Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
											value={values.email}
											onChange={handleChange}
											isValid={touched.email && !errors.email}
											isInvalid={touched.email && !!errors.email}
                                        />
										{touched.email && errors.email ? (
								<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        ) : null}
                                    </Form.Group>
                                </div>

                                <div className="mb-3">
                                    <Form.Group as={Col} controlId="password">
                                        <Form.Label className="label">Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
											value={values.password}
											onChange={handleChange}
											isValid={touched.password && !errors.password}
											isInvalid={touched.password && !!errors.password}
                                        />
										{touched.password && errors.password ? (
								<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        ) : null}
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
                                <Button variant="btn btn-secondary" className="mr-3" onClick={this.back}> Back </Button>
                                <Button variant="primary" type="submit" >Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
			)}
			</Formik>
        </Container>
        );
    }
}

export default AddressDetails;