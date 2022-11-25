import { Button, Grid, Input } from "@material-ui/core";
import React, { useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import "./TForm.css";
import Sidebar from "../../BarRoutes/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherForm() {
  let navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");

    axios
      .post("/teachers", {
        gender: teacher.gender,
        image: teacher.image,
        phone_no: teacher.phone_no,
        address: teacher.address,
        full_name: teacher.full_name,
        email: teacher.email,
        password: teacher.password,
        username: teacher.username,
        role: "teacher",
      })
      .then((response) => {
        setTeacher(response);
        navigate("/teachertable")
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
                    marginTop:"40px",
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

            {/* <form className="teachform">
          <p className="heading">TEACHER FORM</p>
          <div className="displayer">
          Gender:<Input placeholder="Enter gender "  style={{marginLeft:"20px"}}/>
          </div>
          <div className="displayer">
          Image:<Input placeholder="Enter image link"  style={{marginLeft:"20px"}}/>
          </div>

          <div className="displayer">
          Phone:<Input placeholder="Enter phone number"  style={{marginLeft:"20px"}}/>
          </div>
          <div className="displayer">
          Address:<Input placeholder="Enter address"  style={{marginLeft:"20px"}}/>
          </div>
          <div className="displayer">
          Name:<Input placeholder="Enter fullname"  style={{marginLeft:"20px"}}/>
          </div>
          <div className="displayer">
          Email:<Input placeholder="Enter email address"  style={{marginLeft:"20px"}}/>
          </div>

          <div className="displayer">
          Password:<Input placeholder="Enter password"  style={{marginLeft:"20px"}}/>
          </div>
          <div className="displayer">
          <Button
                      variant="contained"
                      color="primary"
                      style={{
                        width: "200px",
                        
                        marginLeft: "19px",
                        alignItems: "center",
                      }}
                      type="submit"
                    >
                      Send
                    </Button>

          </div>
          </form> */}
          </div> 
          {/* <div className="new"> */}

          {/* <div className="">
              <div className="">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://i.pinimg.com/564x/a9/cc/d7/a9ccd7f3b82fc8b70c6d75a299302001.jpg"
                  }
                  alt="profile"
                />
              </div>
              <div className="">
                <form>
                  <div className="formInput">
                    <label>Gender:</label>
                    <input type="text" placeholder="Gender" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="file">
                      Upload Image:{" "}
                      <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>

                  <div className="formInput">
                    <label>Phone Number:</label>
                    <input type="text" placeholder="Phone_number" />
                  </div>
                  <div className="formInput">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="formInput">
                    <label>Full Name:</label>
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="formInput">
                    <label>Email:</label>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="formInput">
                    <label>Password:</label>
                    <input type="password" />
                  </div>
                  <div className="formInput">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        width: "450px",
                        
                        marginLeft: "55px",
                        alignItems: "center",
                      }}
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div> */}
          {/* </div> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default TeacherForm;
