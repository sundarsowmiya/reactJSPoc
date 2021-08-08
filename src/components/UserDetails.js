import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
const schema = yup.object().shape({
  seller: yup.string().required('seller is required'),
  country: yup.string().required('country is required'),
});
class UserDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  country: [{id:'1',name:'India'}]
		};
	  }
	componentDidMount(){
		
		axios.get(`http://13.232.72.245:3200/countries`)
          .then(result => {
            console.log(result.data.data);  
			this.setState({country:result.data.data});			
          })
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
        return (<Container >
            <Formik
      validationSchema={schema}
       onSubmit={(values, actions) => {
		 this.props.loadValues(values); 
       }}  
      initialValues={{
        seller: this.props.inputValues.seller,
        country: this.props.inputValues.country
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
                <div className="row  d-flex justify-content-center" style={{ marginTop: '140px' }}>
                    <div className="col-lg-6 mb-4 grid-margin">
                        <div className="card h-100">
                            <h4 className="card-header">Seller Pannel Register</h4>
                            <div className="card-body">
                                <div className="mb-3">
                                    <Form.Label className="label" >Seller Types</Form.Label>
                                    
									<Form.Select name='seller'  className="browser-default custom-select" value={values.seller}  onChange={handleChange}
								isValid={touched.seller && !errors.seller}
								isInvalid={touched.seller && !!errors.seller}>
									<option value="">Choose Seller Types</option>
									<option value="1">public owned</option>
									<option value="2">private owned</option>
									<option value="3">state owned</option>
									<option value="4">individual</option>
									<option value="5">charity</option>
									</Form.Select>
									{touched.seller && errors.seller ? (
								<Form.Control.Feedback type="invalid">{errors.seller}</Form.Control.Feedback>
                        ) : null}
                                </div>

                                <div className="mb-3">
                                    <Form.Label className="label">Country</Form.Label>                                    
									<Form.Select name='country'  className="browser-default custom-select" value={values.country}  onChange={handleChange}
								isValid={touched.country && !errors.country}
								isInvalid={touched.country && !!errors.country}>
									<option value="">Choose Country</option>
									{(this.state.country || []).map((item, i) =>{
										return(
										  <option key={item.id} value={item.id}>{item.name}</option>
										)
									  })}									
									</Form.Select>
									{touched.country && errors.country ? (
								<Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
                        ) : null}
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
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

export default UserDetails;