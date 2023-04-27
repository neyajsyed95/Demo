import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
// import { BiAccessibility } from "react-icons/bi";

function Formsss() {
    const [formData, setFormData] = useState({ name: '', email: '', number: '', site: '' });
    const [errors, setErrors] = useState({});
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors("")
    }
    function onSubmit(event) {
        event.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
           
        }
    }
    function validateForm(formData) {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.number.trim()) {
            errors.number = 'Number is required';
        }
        if (!formData.site.trim()) {
            errors.site = 'Site is required';
        }
        return errors;
    }
    return (
        <section className="form-valid">
            <Container>
                <Row>
                    <Form onSubmit={onSubmit}>
                        <Row>
                            <Col sm={6}>
                                <label>
                                <AiOutlineUser />
                                    Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </label>
                            </Col>
                            <Col sm={6}>
                                <label>
                                <AiOutlineMail />
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <label>
                                    Number:
                                    <input type="text" name="number" value={formData.number} onChange={handleInputChange} />
                                    {errors.number && <span className="error">{errors.number}</span>}
                                </label>
                            </Col>
                            <Col sm={6}>
                                <label>
                                    Website:
                                    <input type="text" name="site" value={formData.site} onChange={handleInputChange} />
                                    {errors.site && <span className="error">{errors.site}</span>}
                                </label>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>
        </section>
    )
}
export default Formsss;