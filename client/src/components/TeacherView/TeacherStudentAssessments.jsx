import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function TeacherStudentAssessments() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [assesments, setAssesments] = useState([]);
  const [subjectAssesments, setSubjectAssesments] = useState([]);
  const [errors, setErrors] = useState([]);
  const [assessment_id, setAssessmentID] = useState(1);
  const [student, setStudent] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    fetch(`/par_stu_assesments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssesments(data);
      });
  }, []);

  useEffect(() => {
    fetch(`/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data.full_name);
        setSubject(data.subject);
        fetch(`/subject_assessments/${data.subject_id}`)
          .then((res) => res.json())
          .then((data) => {
            setSubjectAssesments(data);
          });
      });
  }, []);

  function handleAddStudentAnAssesment(e) {
    e.preventDefault();
    fetch("/student_assesments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: id,
        assessment_id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setAssesments([...assesments, data]);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleAssesmentDelete(id) {
    fetch(`/student_assesments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setErrors(data.errors);
        }
        const updatedAssesments = assesments.filter(
          (assesment) => assesment.id !== data.id
        );
        setAssesments(updatedAssesments);
      });
  }

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
      {/* <div>TeacherStudentAssessments</div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="right">Assessment</TableCell>
              <TableCell align="right">Subject</TableCell>

              <TableCell align="right">Out Of</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Change Score</TableCell>
              <TableCell align="right">UN-assign</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assesments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.student}
                </TableCell>
                <TableCell align="right">{row.assessment}</TableCell>
                <TableCell align="right">{row.subject}</TableCell>

                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.score ? row.score : 0}</TableCell>
                <TableCell align="right">
                  {row.score >= 40 ? (
                    <h1 className="text-green-600 font-black">PASS</h1>
                  ) : (
                    <h1 className="text-red-500 font-black">FAIL</h1>
                  )}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/change-assessment-score/${row.id}`)
                    }
                  >
                    Change Score
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleAssesmentDelete(row.id)}
                  >
                    UN-ASSIGN
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="w-2/3 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
        <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
          Give Student an Assessment
          <hr></hr>
        </h1>
        <form className="flex flex-col text-center font-black p-4">
          <p className="m-2  font-bold text-xl text-black">
            Name:{" "}
            <span className="text-lg font-light text-neutral-900 ml-4">
              {student}
            </span>
          </p>
          <p className="m-2  font-bold text-xl text-black">
            Subject:{" "}
            <span className="text-lg font-light text-neutral-900 ml-4">
              {subject}
            </span>
          </p>
          <label htmlFor="assesment" className="text-lg text-black mt-2">
            Select Assessment:
            <br></br>
            <select
              name="assesment"
              value={assessment_id}
              onChange={(e) => setAssessmentID(e.target.value)}
              className="mt-3 p-1 bg-neutral-200 rounded"
            >
              {subjectAssesments.map((assesment) => (
                <option key={assesment.id} value={assesment.id}>
                  {assesment.name}
                </option>
              ))}
            </select>
          </label>
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
          <Button
            variant="contained"
            color="success"
            type="submit"
            className="w-1/3 mt-4 mx-auto"
            onClick={handleAddStudentAnAssesment}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default TeacherStudentAssessments;
