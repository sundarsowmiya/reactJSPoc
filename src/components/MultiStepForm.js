import React, { Component } from 'react';
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";

class MultiStepForm extends Component {
    state = {
        step: 1,
        businessName: '',
        email: '',
        seller: '',
        address: '',
        country: '',
		lat:'',
		lang:''
    }
	componentDidMount() {		
		const success = position => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			this.setState({
			  lat: latitude,
			  lang: longitude
			});
		};
	  const error = () => {
		console.log("Unable to retrieve your location");
	  };
	  navigator.geolocation.getCurrentPosition(success, error);
		
	}
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
	loadValues = (values) => {
        this.setState({...values})
		this.nextStep();
    }	

    render() {
        const { step, businessName, seller, email, address, country,password,lat,lang } = this.state;
        const inputValues = { businessName, seller, email, address, country,password,lat,lang };
        switch (step) {
            case 1:
                return <UserDetails
                    loadValues={this.loadValues}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                />
            case 2:
                return <AddressDetails
                    loadValues={this.loadValues}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                />
            case 3:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                />
            default:
                return <div>nothing</div>
        }
    }
}

export default MultiStepForm;