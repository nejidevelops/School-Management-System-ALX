import { Button, Container, Grid, Input, TextField } from "@material-ui/core";
import { DriveFolderUpload, Email } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Sidebar from "../../BarRoutes/Sidebar";
import axios from "axios";
import "./Student.css";
import { useNavigate, useParams } from "react-router-dom";

function StudentEditForm() {
  let navigate = useNavigate()

  const params = useParams();
  const { id } = params;

  const [file, setFile] = useState("");
  const [data, setData] = useState({
    gender: "",
    image: "",
    parent_id: 1,
    phone_no: "",
    admission_no: "",
    subject_id: "",
    full_name: "",
    email: "",
    password: "",
    classroom_id: "",
    username: "",
  });


  useEffect(() => {
    fetch(`/students/${id}`)
      .then((res) => res.json())
      .then((student) => {
        // console.log(student)
        setData(
            student
        )
        // console.log(data)
        // setName(data.name);
        // setTotal(data.total);
      });
  }, []);

//   console.log(data)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");

    axios
      .patch(`/students/${id}`, {
        gender: data.gender,
        image: data.image,
        parent_id: data.parent_id,
        phone_no: data.phone_no,
        admission_no: data.admission_no,
        subject_id: data.subject_id,
        full_name: data.full_name,
        email: data.email,
        password: data.password,
        classroom_id: data.classroom_id,
        username: data.username,
      })
      .then((response) => {
        // setData(response);
        console.log(response)
        navigate("/studenttable")
      });
  };

  return (
    <div className="bigParent">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10} lg={9}>
          {/* <h1>Student Form</h1> */}
          <div className="studentTopic">Edit Student</div>
          <div className="new">
          
            <form className="formstd" onSubmit={handleSubmit}>
            
              <div className="juu_left">
                <div className="area">
                  {/* <label>Gender: </label> */}
                  {/* <input value={data.gender}
                    name="gender"
                      type="text"
                      placeholder="Gender"
                      onChange={handleChange}/> */}
                     Gender: <Input placeholder="Enter gender"  style={{marginLeft:"20px"}}
                     value={data.gender}
                      name="gender"
                      type="text"
                      onChange={handleChange}
                     />
                </div>
                <div className="area">
                  {/* <label>Image:</label> */}
                  {/* <input value={data.image}
                    name="image"
                      type="text"
                      placeholder="Image"
                      onChange={handleChange}/> */}
                     Image: <Input   style={{marginLeft:"30px"}}
                     value={data.image}
                      name="image"
                      type="text"
                      placeholder="Enter image link"
                      onChange={handleChange}
                     />
                </div>
                <div className="area">
                  {/* <label>Parent ID</label> */}
                  {/* <input value={data.parent_id}
                    name="parent_id"
                      type="text"
                      placeholder="ParentId"
                      onChange={handleChange}/> */}
                     Parent: <Input placeholder="Enter Parent ID"  style={{marginLeft:"30px"}}
                      name="parent_id"
                      type="text"
                      value={data.parent_id}
                      onChange={handleChange}
                     />
                </div>
                <div className="area">
                  {/* <label>Phone_number</label> */}
                  {/* <input value={data.phone_no}
                    name="phone_no"
                      type="text"
                      placeholder="Phone Number"
                      onChange={handleChange}/> */}
                      Phone:<Input placeholder="Enter phone no"  style={{marginLeft:"30px"}}
                        name="phone_no"
                      type="text"
                      value={data.phone_no}
                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                  {/* <label>Admission Number</label> */}
                  {/* <input value={data.admission_no}
                    name="admission_no"
                      type="text"
                      placeholder="admission_no"
                      onChange={handleChange}/> */}
                    RegNo:<Input   style={{marginLeft:"30px"}}
                      name="admission_no"
                      value={data.admission_no}
                      type="text"
                      placeholder="Enter admission_no"
                      onChange={handleChange}
                    />
                </div>
                <div className="area">
                  {/* <label>Subject</label> */}
                  {/* <input value={data.subject_id}
                    name="subject_id"
                      type="text"
                      placeholder="Subject Id"
                      onChange={handleChange}/> */}
                      Subject:<Input   style={{marginLeft:"30px"}}
                        name="subject_id"
                      type="text"
                      value={data.subject_id}

                      placeholder="Enter Subject Id"
                      onChange={handleChange}
                      />
                </div>
              </div>
              <div className="chini_right">
              <div className="area">
                  {/* <label>FullName</label>
                  <input value={data.full_name}
                    name="full_name"
                      type="text"
                      placeholder="Full name"
                      onChange={handleChange}/> */}
                      Name:  <Input   style={{marginLeft:"30px"}}
                        name="full_name"
                      type="text"
                      value={data.full_name}

                      placeholder=" Enter Full name"
                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                  {/* <label>Email</label>
                  <input value={data.email}
                    name="email"
                      type="text"
                      placeholder="Email"
                      onChange={handleChange}/> */}
                      Email:  <Input  style={{marginLeft:"30px"}}
                        name="email"
                      type="text"
                      value={data.email}

                      placeholder="Enter Email"
                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                  {/* <label>Password</label>
                  <input value={data.password}
                    name="password"
                      type="password"
                      onChange={handleChange}/> */}
                      Password:<Input placeholder="Enter Password"  style={{marginLeft:"30px"}}
                        name="password"
                      type="password"
                    //   value={data.password}

                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                  {/* <label>Classroom ID</label>
                  <input value={data.classroom_id}
                    name="classroom_id"
                      type="text"
                      placeholder="Classroom  ID"
                      onChange={handleChange}/> */}
                      Classroom:<Input  style={{marginLeft:"30px"}}
                        name="classroom_id"
                      type="text"
                      value={data.classroom_id}

                      placeholder="Enter Classroom  ID"
                      onChange={handleChange}
                      />
                </div>
                
                <div className="area">
                  {/* <label>Username</label>
                  <input value={data.username}
                    name="username"
                      type="text"
                      placeholder="Username"
                      onChange={handleChange}/> */}
                      Username:<Input   style={{marginLeft:"30px"}}
                        name="username"
                      type="text"
                      value={data.username}

                      placeholder="Enter Username"
                      onChange={handleChange}
                      />
                        <div className="formbutton">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: "150px",
                    marginTop:"90px",
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
                
                
              </div>
              

            </form>
          </div>

        </Grid>
      </Grid>
    </div>
  );
}

export default StudentEditForm;
