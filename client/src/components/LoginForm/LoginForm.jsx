import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleAdminSubmit(e) {
    e.preventDefault();
    fetch("/admin_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/admin");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  function handleTeacherSubmit(e) {
    e.preventDefault();
    fetch("/teacher_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/teacher");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  function handleStudentSubmit(e) {
    e.preventDefault();
    fetch("/student_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          console.log(user);
        });
        navigate("/student");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  function handleParentSubmit(e) {
    e.preventDefault();
    fetch("/parent_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/parent");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="form-container">
      <h3 className="text-center p-6 text-4xl font-medium ">LOGIN</h3>
      {/* <h1 className="text-center p-6 text-4xl font-medium text-black">Select User: </h1> */}
      <Box
        sx={{
          borderBottom: 2,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ color: "white", fontWeight:'bolder' }} label="Admin" {...a11yProps(0)} />
          <Tab sx={{ color: "white", fontWeight:'bolder' }} label="Teacher" {...a11yProps(1)} />
          <Tab sx={{ color: "white", fontWeight:'bolder' }} label="Student" {...a11yProps(2)} />
          <Tab sx={{ color: "white", fontWeight:'bolder' }} label="Parent" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <form className=" w-2/3 my-6 mx-auto flex flex-col">
        <label style={{color:'#ACBABF'}} htmlFor="username" className="text-xl">
          Username:
        </label>
        <input
          required
          className=" mt-2 h-8 rounded-lg text-black"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label style={{color:'#ACBABF'}} htmlFor="password" className="mt-5 text-xl">
          Password:
        </label>
        <input
          className="mt-2 h-8 rounded-lg text-black"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.map((error) => {
          return (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          );
        })}
        {/* <h2 className="text-center mt-6 py-6 text-xl ">Log in as:</h2> */}
        <div className="flex justify-center">
          <TabPanel value={value} index={0}>
            <button
              type="submit"
              onClick={handleAdminSubmit}
              // className="bg-[#1C1AB1] hover:bg-blue-700 mt-2 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded"
              className="bg-[#1C1AB1] hover:bg-blue-700 mt-2  mx-auto text-white font-bold py-2 px-4 rounded"
            >
              Log in
            </button>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <button
              type="submit"
              onClick={handleTeacherSubmit}
              className="bg-[#1C1AB1] hover:bg-blue-700 mt-2  mx-auto text-white font-bold py-2 px-4 rounded"
            >
              Log in
            </button>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <button
              type="submit"
              onClick={handleStudentSubmit}
              className="bg-[#1C1AB1] hover:bg-blue-700 mt-2  mx-auto text-white font-bold py-2 px-4 rounded"
            >
              Log in
            </button>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <button
              type="submit"
              onClick={handleParentSubmit}
              className="bg-[#1C1AB1] hover:bg-blue-700 mt-2  mx-auto text-white font-bold py-2 px-4 rounded"
            >
              Log in
            </button>
          </TabPanel>
        </div>
      </form>
    
    </div>
  );
}
export default LoginForm;