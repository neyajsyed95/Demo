import React from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Datafile } from "./Jsonfile";
import Crud1 from "./Crudtable1";


const Services = () => {

   

    return (
        <section>
            <Container>
                <Row>
                {
                    Datafile.map((item)=>{
                    return(
                        <Col sm={4}>
                        <img src={item.img} />
                        <h2>{item.heading}</h2>
                        <p>{item.para}</p>
                        <Button>{item.btn}</Button>
                        </Col>
                    )
                })
            }

            <Crud1 />
                </Row>
            </Container>
        </section>
    )
}



export default Services;

