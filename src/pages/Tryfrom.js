import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

const Tryform = () => {

    const [formData, setFormData] = useState({ name: "", email: "", number: "", website: "", comment:""});
    const [error, setError] = useState({});

    function handleChange(event){
        const {name, value} = event.target;
        setFormData({...formData, [name]: value });
        console.log('formData',formData)
        setError("")
    }

    function onSubmit(event){
        console.log('formData',formData)
        event.preventDefault();
        
        const newError = validateForm (formData);
        setError(newError);

    }


    function validateForm(formData){
        const error = {};
        if (!formData.name.trim()) {
            error.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            error.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error.email = 'Email is invalid';
        }
        if (!formData.number.trim()) {
            error.number = 'Number is required';
        }
        if (!formData.website.trim()) {
            error.website = 'WebSite is required';
        }

        if (!formData.comment.trim()) {
            error.comment = 'WebSite is required';
        }

        return error;

    }

    return (
        <Container>
        <Form className="start-fr" onSubmit={onSubmit}>
            <Row>
                <Col sm={6}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}  />
                {error.name && <span className="error">{error.name}</span>}
                </Col>

                <Col sm={6}>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {error.email && <span className="error">{error.email}</span>}
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                <label>Number</label>
                <input type="text" name="number" value={formData.number} onChange={handleChange} />
                {error.number && <span className="error">{error.number}</span>}
                </Col>

                <Col sm={6}>
                <label>Website</label>
                <input type="text" name="website" value={formData.website} onChange={handleChange} />
                {error.website && <span className="error">{error.website}</span>}
                </Col>
            </Row>

            <Row>
            <Col sm={12}>
            <label>Comment</label>
                <textarea type="text" name="comment" value={formData.comment} onChange={handleChange}></textarea>
                {error.comment && <span className="error">{error.comment}</span>}
                </Col>
            </Row>


            <Row>
            <Col sm={12}>
            <Button variant="primary" type="submit">Submit</Button>
                </Col>
            </Row>



            </Form>
        </Container>
    )
}


export default Tryform;