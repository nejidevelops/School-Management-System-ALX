import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";

function AddAssessment() {
  const [assessments, setAssessments] = useState([]);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [subjectName, setSubjectName] = useState("undefined");
  const [name, setName] = useState("");
  const [total, setTotal] = useState(100);

  useEffect(() => {
    fetch(`/subject_assessments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssessments(data);
        setSubjectName(data[0].subject);
      });
  }, []);

  function handleAssessmentSubmit(e) {
    e.preventDefault();
    fetch("/assessments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        subject_id: id,
        total,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setAssessments([...assessments, data]);
        });
        setName("");
        //   navigate(-1)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleAssessmentDelete(id) {
    fetch(`/assessments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setErrors(data.errors);
        }
        const updatedAssessments = assessments.filter(
          (assessment) => assessment.id !== data.id
        );
        setAssessments(updatedAssessments);
      });
  }

  if (assessments.length === 0)
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
          There are currently No Assessments for this Subject this Subject in
          Edupo School
        </h1>
        <div className="w-3/5 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
          <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
            Add New Assessment
            <hr></hr>
          </h1>
          <form className="flex flex-col text-center font-black p-4">
          <TextField
            id="Assessment Name"
            label="Assessment Name"
            variant="outlined"
            className="w-1/3 mx-auto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="Total"
            type="number"
            label="Total"
            variant="outlined"
            className="w-1/3 mx-auto mt-3"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
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
            <Button
              variant="contained"
              color="success"
              type="submit"
              className="w-1/3 mt-4 mx-auto"
              onClick={handleAssessmentSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </>
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
        {subjectName} Assessments
      </h1>
      {/* <div className="w-2/3 mx-auto"> */}
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Assessment Name</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assessments.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="right">
                    <button
                      onClick={() => navigate(`/edit-assessment/${row.id}`)}
                    >
                      <EditIcon />
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    <button onClick={() => handleAssessmentDelete(row.id)}>
                      <DeleteForeverRoundedIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

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

      <div className="w-3/5 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
        <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
          Add New Assessment
          <hr></hr>
        </h1>
        <form className="flex flex-col text-center font-black p-4">
          {/* <label htmlFor="name" className="text-lg">
            Assessmemt Name:
          </label>
          <input
            required
            className=" mt-2 h-8 rounded-lg text-black bg-slate-300 w-2/3 pl-2 mx-auto"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="total" className="text-lg mt-3">
            Total:
          </label>
          <input
            required
            className=" mt-2 h-8 rounded-lg text-black bg-slate-300 w-2/3 pl-2 mx-auto"
            type="number"
            name="total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          /> */}
          <TextField
            id="Assessment Name"
            label="Assessment Name"
            variant="outlined"
            className="w-1/3 mx-auto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="Total"
            type="number"
            label="Total"
            variant="outlined"
            className="w-1/3 mx-auto mt-3"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            type="submit"
            className="w-1/3 mt-4 mx-auto"
            onClick={handleAssessmentSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default AddAssessment;
