import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./View.css";
import Sidebar from "../BarRoutes/Sidebar";

import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

function TeacherData() {
  const [teacherData, setTeacherData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/teachers")
      .then((response) => response.json())
      .then((human) => setTeacherData(human));
  }, []);

  function handleTeacherDelete(id) {
    fetch(`/teachers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setErrors(data.errors);
        }
        const updatedTeachers = teacherData.filter(
          (teacher) => teacher.id !== data.id
        );
        setTeacherData(updatedTeachers);
      });
  }

  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={4} xs={2} lg={9}>
        <div className="studentTopic">
        <p>Teacher Table</p>
       </div>
          <TableContainer
            component={Paper}
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <Table aria-label="simple table">
              <TableHead style={{background:"#C0C0C0"}}>
                <TableRow>
                <TableCell>ID</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>FullName</TableCell>
                  <TableCell>Email</TableCell>
                  {/* <TableCell>Password</TableCell> */}
                  <TableCell>Username</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teacherData.map((human, index) => (
                  <TableRow key={index}>
                    <TableCell>{human.id}</TableCell>
                    <TableCell>{human.gender}</TableCell>
                    <TableCell>
                      <img
                        src={human.image}
                        alt="profile"
                        style={{ height: "35px" }}
                      />
                    </TableCell>
                    <TableCell>{human.phone_no}</TableCell>
                    <TableCell>{human.address} </TableCell>

                    <TableCell> {human.full_name}</TableCell>
                    <TableCell>{human.email}</TableCell>
                    {/* <TableCell> {human.password}</TableCell> */}
                    <TableCell> {human.username}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => navigate(`/teacheredit/${human.id}`)}
                      >
                        <Edit />
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          handleTeacherDelete(human.id);
                        }}
                      >
                        {" "}
                        <Delete />{" "}
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default TeacherData;
