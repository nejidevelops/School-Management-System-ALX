import { Button, Grid, Input } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Sidebar from "../../BarRoutes/Sidebar";
import "./Parent.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ParentEditForm() {
  let navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const [parent, setParent] = useState({
    address: "",
    phone_no: "",
    full_name: "",
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    fetch(`/parents/${id}`)
      .then((res) => res.json())
      .then((parent) => {
        setParent(parent);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent({ ...parent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");

    axios
      .patch(`/parents/${id}`, {
        address: parent.address,
        phone_no: parent.phone_no,
        full_name: parent.full_name,
        email: parent.email,
        password: parent.password,
        username: parent.username,
        role: "parent",
      })
      .then((response) => {
        setParent(response);
        navigate("/parenttable");
      });
  };

  return (
    <div className="bigParent">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10} lg={9}>
          <div className="parentTopic">
            <p>Add Parent</p>
          </div>
          <div className="parentform">
            <form onSubmit={handleSubmit} className="mzaziform">
              <div classname="parent-right">
                <div className="formInput">
                  {/* <h1
                    style={{ marginLeft: "190px", marginBottom: "10px" }}
                    className="heading"
                  >
                    PARENT FORM
                  </h1> */}
                  <label style={{ marginTop: "15px" }}>Address:</label>
                  {/* <input type="text" placeholder="Address" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter address"
                      name="address"
                      type="text"
                      value={parent.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Phone Number:</label>
                  {/* <input type="text" placeholder="Phone_number" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter phone number"
                      name="phone_no"
                      type="text"
                      value={parent.phone_no}

                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Full Name:</label>
                  {/* <input type="text" placeholder="Full Name" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter full name"
                      name="full_name"
                      type="text"
                      value={parent.full_name}

                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="parent-left">
                <div className="formInput">
                  <label>Email:</label>
                  {/* <input type="text" placeholder="Email"onChange={handleChange} /> */}
                  <div>
                    <Input
                      placeholder="Enter email address"
                      name="email"
                      type="text"
                      value={parent.email}

                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Password:</label>
                  {/* <input type="password" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Username:</label>
                  {/* <input type="text" placeholder="Full Name" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter username"
                      name="username"
                      type="text"
                      value={parent.username}

                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="formInput">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: "450px",
                    marginBottom: "25px",
                    marginLeft: "30px",
                    alignItems: "center",
                  }}
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ParentEditForm;
