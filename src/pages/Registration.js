import React, { useEffect, useState } from "react";
import { Usersdata } from "./Jsondata";

const Registration = () => {

  const [data, setdata] = useState([])
  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [country, setcountry] = useState("")
  const [comment, setcomment] = useState("")
  const [tandc, settandc] = useState(false)

  const [reqId, setreqId] = useState("")
  const [reqName, setreqName] = useState("")
  const [reqCountry, setreqCountry] = useState("")
  const [reqComment, setreqComment] = useState("")
  const [reqTandc, setreqTandc] = useState("")
  const [btnText, setbtnText] = useState("")

  useEffect(() => {
    console.log('Usersdata', Usersdata)
  }, [])


  const [formData, setformData] = useState({
    id: "",
    name: "",
    select: "",
    comment: "",
  });


  const handleChange = event => {
    const { name, value } = event.target;
    setformData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("formData", formData); // log the form data object to the console
  };




  return (
    <div>
      <h1 style={{ color: 'red' }}> CRUD Operation With Json Server</h1>
      <div style={{ width: '30%', float: 'left', marginLeft: '60px' }}>
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
                  <select name="select" value={formData.select} onChange={handleChange}>
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
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div style={{ width: '50%', float: 'right', marginRight: '80px' }}>
        <table className="users-table">
          <tbody>
            <tr>
              <th>Id </th>
              <th>Name </th>
              <th>Country</th>
              <th>Comment</th>
              <th>Term & Condition</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {Usersdata ? Usersdata.map((item, index) =>
              <tr key={index}>
                <td>{item.id} </td>
                <td>{item.name} </td>
                <td>{item.country}</td>
                <td> {item.comment}</td>
                <td>{item.tandc + ""}</td>
                <td><button
                //   onClick={(e) => { editrecord(item) }}
                >Edit</button> </td>
                <td> <button
                //   onClick={(e) => { deleterecord(item.id) }}
                >Delete</button> </td>

              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

    </div>
  )
}


export default Registration;