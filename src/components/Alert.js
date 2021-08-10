import React, { Component } from 'react';
import { Row,Toast, Button, Col, Container } from 'react-bootstrap';
class Alert extends Component {
	constructor(props) {
    super(props);
		this.state = {show:true};
    }
    setShow = (boolean) => {
       this.setState({show:boolean})
    }
	
    render() {
  
        return (
		<Row>
      <Col xs={6}>
        <Toast onClose={() => this.setShow(false)} show={this.state.show} delay={3000}>
          <Toast.Header>           
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>Please Turun on Location</Toast.Body>
        </Toast>
      </Col>
    </Row>
        )
    }
}

export default Alert;