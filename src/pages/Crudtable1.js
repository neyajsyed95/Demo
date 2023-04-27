import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Cudsdata } from "./Cudjsondata";
import { Vipindata } from "./Vipinjsondata";

const Crud1 = () => {
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
                <Row>
                    <Col sm={6}>
                        <div className="mng-half">
                            <form onSubmit={handleSubmit}>
                                <table className="users-table">
                                    <tbody>
                                        <tr>
                                            <th colSpan="2"><center>User Registration Form</center></th>
                                        </tr>
                                        <tr>
                                            <td><b>Id</b></td>
                                            <td>

                                                <input type="text" name="id" value={formData.id} onChange={handleChange} />
                                                <br />
                                                {reqId === "required" && <span className="txt-red">Please enter id</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <b> Name</b></td>
                                            <td>

                                                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                                <br />
                                                {reqName === "required" && <span className="txt-red">Please enter name</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <b>Country</b> </td>
                                            <td>
                                                <select name="country" value={formData.country} onChange={handleChange}>
                                                    <option value="">--Please select--</option>
                                                    <option value="india">INDIA</option>
                                                    <option value="usa">USA</option>
                                                    <option value="uk">UK</option>
                                                </select>


                                                <br />
                                                {reqCountry === "required" && <span className="txt-red">Please select country</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <b>Comment</b> </td>
                                            <td>
                                                <textarea name="comment" value={formData.comment} onChange={handleChange}></textarea>
                                                <br />
                                                {reqComment === "required" && <span className="txt-red">Please enter comment</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" checked={tandc} name="tandc" onChange={handleChange.checked} /> <b> Term & condition </b>
                                                <br />
                                                {reqTandc === "required" && <span className="txt-red">Please check term & condition</span>}
                                            </td>
                                        </tr>

                                        
                                        <tr>
                                            <td colSpan="2">
                                                <Button type="submit">Submit</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </Col>


                    <Col sm={6}>
                        <div className="mng-halfss">
                            <table className="userss-table ">
                                <tbody>
                                    <tr>
                                        <th><b>Id</b></th>
                                        <th><b>Name</b></th>
                                        <th><b>Country</b></th>
                                        <th><b>Comment</b></th>
                                        <th><b>Term & Condition</b></th>
                                        <th><b>Edit</b></th>
                                        <th><b>Delete</b></th>
                                    </tr>
                                        <tr>
                                            <td>{formData.id} </td>
                                            <td>{formData.name} </td>
                                            <td>{formData.country}</td>
                                            <td> {formData.comment}</td>
                                            <td> {formData.tandc}</td>
                                            <td><Button
                                            //   onClick={(e) => { editrecord(item) }}
                                            >Edit</Button> </td>
                                            <td> 
                                            <Button
                                              onClick={ ()=>setformData('')}
                                            >Delete</Button> 
                                            </td>

                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )


}




export default Crud1;