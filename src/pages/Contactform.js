import React from "react";
import { Row,Col,Container,Form, Button  } from 'react-bootstrap';
const Contactform = () => {
    return(

        <Container>
            <Row>
         
        <Form>
        <Row>
        <Col sm={6} className="beat-mn">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
        </Col>
     
        <Col sm={6} className="beat-mn">
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
        </Col>
        </Row>

        <Row>
        <Col sm={6} className="beat-mn">
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        </Col>
        </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>

      
    </Form>

    </Row>
    </Container>
    )
}


export default Contactform;