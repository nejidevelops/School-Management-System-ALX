import { Button, Grid, Input } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import "./TForm.css";
import Sidebar from "../../BarRoutes/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function TeacherEditForm() {
  let navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const [file, setFile] = useState("");
  // console.log(file);
  const [teacher, setTeacher] = useState({
    gender: "",
    image: "",
    phone_no: "",
    address: "",
    full_name: "",
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    fetch(`/teachers/${id}`)
      .then((res) => res.json())
      .then((teacher) => {
        setTeacher(
            teacher
        )
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");

    axios
        .patch(`/teachers/${id}`, {
        gender: teacher.gender,
        image: teacher.image,
        phone_no: teacher.phone_no,
        address: teacher.address,
        full_name: teacher.full_name,
        email: teacher.email,
        password: teacher.password,
        username: teacher.username,
      })
      .then((response) => {
        setTeacher(response);
        navigate("/teachertable");
      });
  };

  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>

        <Grid item sm={4} xs={2} lg={9}>
          <div className="teacherTopic">Add Teacher</div>

          <div className="bigMzazi">
            <form onSubmit={handleSubmit} className="teachform">
              {/* <div><h1>TEACHER FORM</h1></div> */}

              <div className="parent-form-wrapper-left">
                <div className="formInput">
                  <label>Gender:</label>
                  {/* <input type="text" placeholder="Address" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter gender"
                      style={{ width: "80%" }}
                      name="gender"
                      type="text"
                      value={teacher.gender}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Image:</label>
                  {/* <input type="text" placeholder="Phone_number" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter image link"
                      style={{ width: "80%" }}
                      name="image"
                      type="text"
                      value={teacher.image}

                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Phone:</label>
                  {/* <input type="text" placeholder="Full Name" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter phone number"
                      style={{ width: "80%" }}
                      name="phone_no"
                      type="text"
                      value={teacher.phone_no}

                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Address:</label>
                  {/* <input type="text" placeholder="Full Name" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter address"
                      style={{ width: "80%" }}
                      name="address"
                      type="text"
                      value={teacher.address}

                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="parent-form-wrapper-right">
                <div className="formInput">
                  <label>Name:</label>
                  {/* <input type="text" placeholder="Full Name" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter full name"
                      style={{ width: "80%" }}
                      name="full_name"
                      type="text"
                      value={teacher.full_name}

                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Email:</label>
                  {/* <input type="text" placeholder="Email"onChange={handleChange} /> */}
                  <div>
                    <Input
                      placeholder="Enter email address"
                      style={{ width: "80%" }}
                      name="email"
                      type="text"
                      value={teacher.email}

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
                      style={{ width: "80%" }}
                      name="password"
                      value={teacher.password}

                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formInput">
                  <label>Username:</label>
                  {/* <input type="password" onChange={handleChange}/> */}
                  <div>
                    <Input
                      placeholder="Enter username"
                      style={{ width: "80%" }}
                      name="username"
                      type="text"
                      value={teacher.username}

                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="formbutton">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      width: "150px",
                      marginTop: "40px",
                      // marginBottom: "5px",
                      marginLeft: "-9px",
                      alignItems: "center",
                    }}
                    type="submit"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TeacherEditForm;
