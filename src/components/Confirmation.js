import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
const schema = yup.object().shape({
  address: yup.string().required('address is required'),
  file: yup.mixed().required('file is required').test('fileType', 'Unsupported File Format', function (value) {
    if(value){
	const SUPPORTED_FORMATS = ['application/pdf','image/jpg', 'image/jpeg', 'image/png'];
    return SUPPORTED_FORMATS.includes(value.type)
	}
  }),
	lat: yup.string().required('latitude is required'),
	lang: yup.string().required('longitude is required'),
});



class Confirmation extends Component {
	constructor(props) {
    super(props);
		this.state = {};
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
	
    render() {
  

        return (
            <Container>
                <Formik
		enableReinitialize		
      validationSchema={schema}
       onSubmit={(values, actions) => {
		   console.log(values);
		   //this.props.nextStep();
       }}  
      initialValues={{
        address: '',
        file: '',
        lat: this.props.inputValues.lat,
		lang:this.props.inputValues.lang
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
		setFieldValue
      }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    <div className="row  d-flex justify-content-center" style={{ marginTop: '140px' }} >
                        <div className="col-lg-6 mb-4 grid-margin">
                            <div className="card h-100">
                                <h4 className="card-header">Seller Pannel Register</h4>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <Form.Group as={Col}>
                                            <Form.Label className="label">Address </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="address"
												value={values.address}
												onChange={handleChange}
												isValid={touched.address && !errors.address}
												isInvalid={touched.address && !!errors.address}
											/>
										{touched.address && errors.address ? (
								<Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                        ) : null}
                                        </Form.Group>
                                    </div>

                                    <div className="mb-3">
                                        <Form.Group as={Col} className="mb-3">
                                            <Form.Label>Proof Document</Form.Label>
                                            <Form.Control
												id="file"
												name="file"
												type="file"
												onChange={(event) => {
												  setFieldValue("file", event.currentTarget.files[0]);
												}}
												onBlur={handleBlur}
												isValid={touched.file && !errors.file}
												isInvalid={touched.file && !!errors.file}
											/>
										{touched.file && errors.file ? (
								<Form.Control.Feedback type="invalid">{errors.file}</Form.Control.Feedback>
                        ) : null}
                                        </Form.Group>
                                    </div>

                                    <div className="mb-3">
                                        <Form.Group as={Col}>
                                            <Form.Label className="label">Latitude</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lat"
												value={values.lat}
												onChange={handleChange}
												isValid={touched.lat && !errors.lat}
												isInvalid={touched.lat && !!errors.lat}
											/>
										{touched.lat && errors.lat ? (
								<Form.Control.Feedback type="invalid">{errors.lat}</Form.Control.Feedback>
                        ) : null}
                                        </Form.Group>
                                    </div>
									<div className="mb-3">
                                        <Form.Group as={Col}>
                                            <Form.Label className="label">Longitude</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lang"
												value={values.lang}
												onChange={handleChange}
												isValid={touched.lang && !errors.lang}
												isInvalid={touched.lang && !!errors.lang}
											/>
										{touched.lang && errors.lang ? (
								<Form.Control.Feedback type="invalid">{errors.lang}</Form.Control.Feedback>
                        ) : null}
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <Button variant="btn btn-secondary" className="mr-3" onClick={this.back}> Back </Button>
                                    <Button variant="primary" type="submit" >Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
			)}
			</Formik>
                {/* <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary">Confirm</Button> */}
            </Container>
        )
    }
}

export default Confirmation;