import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Cudsdata } from "./Cudjsondata";
import { Vipindata } from "./Vipinjsondata";

const Crud = () => {
    const [formData, setformData] = useState({
        id: "",
        name: "",
        country: "",
        comment: "",
        tandc:"",
      })
      const [reqId, setreqId] = useState("")
      const [reqName, setreqName] = useState("")
      const [reqCountry, setreqCountry] = useState("")
      const [reqComment, setreqComment] = useState("")
      const [reqTandc, setreqTandc] = useState("")
      const [btnText, setbtnText] = useState("")
      const [tandc, settandc] = useState(false)

    useEffect(() => {
        console.log('Cudsdata',Cudsdata)
    }, [])

    const handleChange = event => {
        const { name, value } = event.target;
        setformData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        console.log("formData vvv", formData); // log the form data object to the console
      };

    return (
        <section>
            <Container>
                <h2><center>Opreaction with live</center></h2>
                <Row className="justify-content-center">
                


                    <Col sm={9}>
                        <div className="mng-halfss">
                            <table className="userss-table ">
                                <tbody>
                                    <tr>
                                        <th><b>Id</b></th>
                                        <th><b>Name</b></th>
                                        <th><b>Country</b></th>
                                        <th><b>Comment</b></th>
                                        <th><b>Term & Condition</b></th>
                               
                                    
                                    </tr>
                                        {Vipindata.filter((item, index, self) =>
                                            index === self.findIndex((t) => (
                                                t.name === item.name
                                            ))).map((user)=>{
                                            return(
                                                <React.Fragment>
                                                <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.country}</td>
                                                <td>{user.comment}</td>
                                                <td>{user.tandc}</td>
                                                </tr>
                                                </React.Fragment>
                                            )
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )


}




export default Crud;