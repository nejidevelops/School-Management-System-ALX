import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./View.css";
import Sidebar from "../BarRoutes/Sidebar";
// import Searcher from "../BarRoutes/Searcher";

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

function ParentData() {

  let navigate = useNavigate();

  const [parentData, setParentData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/parents")
      .then((response) => response.json())
      .then((person) =>
        // console.log(person)
        setParentData(person)
      );
  }, []);

  function handleParentDelete(id) {
    fetch(`/parents/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setErrors(data.errors);
        }
        const updatedParents = parentData.filter(
          (parent) => parent.id !== data.id
        );
        setParentData(updatedParents);
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
        <p>Parent Table</p>
       </div>
          <TableContainer
            component={Paper}
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <Table aria-label="simple table">
              <TableHead style={{background:"#C0C0C0"}}>
                <TableRow>
                <TableCell>ID</TableCell>
                  <TableCell>Addresss</TableCell>

                  <TableCell>Phone Number</TableCell>

                  <TableCell>FullName</TableCell>
                  <TableCell>Email</TableCell>
                  {/* <TableCell>Password</TableCell> */}
                  <TableCell>Username</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {parentData.map((person, index) => (
                  <TableRow key={index}>
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.address} </TableCell>

                    <TableCell>{person.phone_no}</TableCell>

                    <TableCell> {person.full_name}</TableCell>
                    <TableCell>{person.email}</TableCell>
                    {/* <TableCell> {person.password}</TableCell> */}
                    <TableCell> {person.username}</TableCell>
                    <TableCell>
                      {" "}
                      <button
                        onClick={() => navigate(`/parentedit/${person.id}`)}
                      >
                        <Edit />
                      </button>{" "}
                    </TableCell>
                    <TableCell>
                      {" "}
                      <button
                        onClick={() => {
                          handleParentDelete(person.id);
                        }}
                      >
                        <Delete />
                      </button>{" "}
                    </TableCell>
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

          {/* <div>
            <div className="container">
              <p>Parent data</p>
              <div classname="wrapper">
              {parentData.map ((person, index)=> {
                return(
                  <>
                  <ul key={index}>
                  <li>{person.address}</li>
                  <li>{person.phone_no}</li>
                  <li>{person.full_name}</li>
                  <li>{person.email}</li>
                  <li>{person.password}</li>
                  <li>{person.username}</li>
                </ul>
                </>
                )
              })}



              </div>
            </div>
          </div> */}

          {/* <Searcher/> */}
          {/* <DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
  style={{marginLeft:"20px", marginTop:"20px", height:"500px"}}
 /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default ParentData;
