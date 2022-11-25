import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./View.css";
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
import Sidebar from "../BarRoutes/Sidebar";
import { Delete, Edit } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

function StudentData() {

  
  const [studentData, setStudentData] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    fetch("/students")
      .then((response) => response.json())
      .then((human) => {
        setStudentData(human)
        console.log(human)
      });
  }, []);
 
  function handleStudentDelete(id){
    fetch(`/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setErrors(data.errors);
        }
        const updatedStudents = studentData.filter(
          (student) => student.id !== data.id
        );
        setStudentData(updatedStudents);
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
        <p>Student Table</p>
       </div>
          <TableContainer component={Paper} style={{marginLeft:"20px", marginTop:"20px", height:"500px"}}>
          
            <Table aria-label="simple table" >
              <TableHead style={{background:"#C0C0C0"}}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Parent</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Admission Number</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>FullName</TableCell>
                  <TableCell>Email</TableCell>
                  {/* <TableCell>Password</TableCell> */}
                  <TableCell>Username</TableCell>
                  <TableCell>Edit</TableCell> 
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentData.map((human, index) => (
                  <TableRow key={index}>
                    <TableCell>{human.id}</TableCell>
                    <TableCell><img src={human.image} alt="profile" style={{height:"35px"}}/> </TableCell>
                    <TableCell>{human.parent}</TableCell>
                    <TableCell>{human.phone_no}</TableCell>
                    <TableCell>{human.admission_no}</TableCell>
                    <TableCell> {human.subject}</TableCell>
                    <TableCell> {human.full_name}</TableCell>
                    <TableCell>{human.email}</TableCell>
                    {/* <TableCell> {human.password}</TableCell> */}
                    <TableCell> {human.username}</TableCell>
                    <TableCell>  <button onClick={() => navigate(`/studentedit/${human.id}`)}><Edit/></button></TableCell>
                    <TableCell>  <button onClick={() => handleStudentDelete(human.id)}><Delete/> </button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="w-2/3 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
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
      </div>
            
          </TableContainer>

          {/* <DataGrid
  rows={rows}
  columns={columns}
  pageSize={8}
  rowsPerPageOptions={[5]}
  checkboxSelection
  style={{marginLeft:"50px", marginTop:"20px", height:"600px"}} 
 /> */}
          {/* <div>
            <div className="container">
              <p>Student data</p>
              <div classname="wrapper">
              {studentData.map ((human, index)=> {
                return(
                  <>
                  <ul key={index}>
                  <li>{human.gender}</li>
                  <li>{human.image}</li>
                   <li>{human.parent_id}</li>
                  <li>{human.phone_no}</li>
                   <li>{human.admission_no}</li>
                  <li>{human.subject_id}</li>
                  <li>{human.full_name}</li>
                  <li>{human.email}</li>
                  <li>{human.password}</li>
                   <li>{human.classroom_id}</li>
                  <li>{human.username}</li>
                  
                </ul>
                </>
                )
              })}



              </div>
            </div>
          </div> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default StudentData;
