import React from "react";
import { useState } from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';


const Validform = () =>{

const [usefromData, setusefromData] = useState({firstname:"", lastname:"", email:"",number:"", password:"", confirmpassword:"", comment:"",});
const  [error, setError]= useState({});

function handleChange(event){
    const {name, value} = event.target;
    setusefromData({...usefromData, [name]: value });
    console.log("usefromData",usefromData);
}


function onSubmit(event){
    console.log('usefromData',usefromData)
    event.preventDefault();

    const newError = validateForm (usefromData);
    setError(newError);
}



function validateForm(usefromData){
    const error = {};
    if (!usefromData.firstname.trim()) {
        error.firstname = 'Name is required';
    }

    if (!usefromData.lastname.trim()) {
        error.lastname = 'Name is required';
    }

    
    if (!usefromData.email.trim()) {
        error.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(usefromData.email)) {
        error.email = 'Email is invalid';
    }
    if (!usefromData.number.trim()) {
        error.number = 'Number is required';
    }
    if (!usefromData.password.trim()) {
        error.password = 'password is required';
    }

    if (!usefromData.confirmpassword.trim()) {
        error.confirmpassword = 'confirmpassword is required';
    }

    if (!usefromData.comment.trim()) {
        error.comment = 'comment is required';
    }

    return error;

}


     return(
        <section>
            <Container>
                <Row className="justify-content-center">
                    <Col sm={9}>
                        <Form className="form-manage" onSubmit={onSubmit}>
                            <Row>
                                <Col sm={6}>
                                <label>Firstname</label>
                                    <input type="text" name="firstname" onChange={handleChange} value={usefromData.firstname} id="firstname" />
                                    {error.firstname && <span className="error">{error.firstname}</span>}
                                </Col>

                                <Col sm={6}>
                                <label>Lastname</label>
                                    <input type="text" name="lastname" onChange={handleChange} value={usefromData.lastname} id="lastname" />
                                    {error.lastname && <span className="error">{error.lastname}</span>}
                                </Col>

                            </Row>

                            <Row>
                                <Col sm={6}>
                                <label>Email</label>
                                    <input type="email" name="email" onChange={handleChange} value={usefromData.email} id="email" />
                                    {error.email && <span className="error">{error.email}</span>}
                                </Col>

                                <Col sm={6}>
                                <label>Number</label>
                                    <input type="text" name="number" onChange={handleChange} value={usefromData.number} id="number" />
                                    {error.number && <span className="error">{error.number}</span>}
                                </Col>

                            </Row>


                            <Row>
                                <Col sm={6}>
                                <label>Password</label>
                                    <input type="text" name="password" onChange={handleChange} value={usefromData.password} id="password" />
                                    {error.password && <span className="error">{error.password}</span>}
                                </Col>

                                <Col sm={6}>
                                <label>Confirmpassword</label>
                                    <input type="text" name="confirmpassword" onChange={handleChange} value={usefromData.confirmpassword} id="Confirmpassword" />
                                    {error.confirmpassword && <span className="error">{error.confirmpassword}</span>}
                                </Col>

                            </Row>


                            <Row>
                                <Col sm={12}>
                                <label>Textarea</label>
                                <textarea type="textarea" name="comment" onChange={handleChange} value={usefromData.comment}></textarea>
                                {error.comment && <span className="error">{error.comment}</span>}
                                </Col>

                            </Row>


                            <Row>
                            <Col sm={4}>
                            <Button type="submit" class="btn btn-primary">Submit</Button>
                            </Col>

                        </Row>



                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
     )
}




export default Validform;