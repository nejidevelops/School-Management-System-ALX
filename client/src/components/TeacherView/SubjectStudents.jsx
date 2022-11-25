import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SubjectStudents() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [students, setStudents] = useState([]);
  const [subjectName, setSubjectName] = useState("undefined");

  useEffect(() => {
    fetch(`/subject_students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setSubjectName(data[0].subject);
      });
  }, []);

  if (students.length === 0)
    return (
      <h1 className="text-center p-3 text-black text-xl font-bold">
        <div className="text-center mt-3">
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/teacher")}
          >
            <ArrowBackIcon />
            Back to My Subjects
          </Button>
        </div>
        There are currently No students who take this Subject in Edupo School
      </h1>
    );

  return (
    <>
      <div className="text-center mt-3">
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/teacher")}
        >
          <ArrowBackIcon />
          Back to My Subjects
        </Button>
      </div>

      <h1 className="text-center p-3 text-black text-xl font-bold">
        My Students currently Taking {subjectName}
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="right">Subject Name</TableCell>
              <TableCell align="right">View Assignments</TableCell>
              <TableCell align="right">View Assessments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.full_name}
                </TableCell>
                <TableCell align="right">{row.subject}</TableCell>

                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() =>
                      navigate(`/my-students-assignments/${row.id}`)
                    }
                  >
                    View Assignments
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() =>
                      navigate(`/my-students-assessments/${row.id}`)
                    }
                  >
                    View Assessments
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default SubjectStudents;
