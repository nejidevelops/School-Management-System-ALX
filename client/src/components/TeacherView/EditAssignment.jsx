import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";

function EditAssignment() {
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [name, setName] = useState("");
  const [due_date, setDate] = useState("");

  useEffect(() => {
    fetch(`/assignments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDate(data.due_date);
      });
  }, []);

  function handleAssignmentSubmit(e) {
    e.preventDefault();
    fetch(`/assignments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        due_date,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          navigate(-1);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
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
      <div className="w-3/5 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
        <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
          Edit Assignment
          <hr></hr>
        </h1>
        <form className="flex flex-col text-center font-black p-4">
          <TextField
            id="Assignment Name"
            label="Assignment Name"
            variant="outlined"
            className="w-1/3 mx-auto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="Due Date"
            type="date"
            label="Due Date"
            variant="outlined"
            className="w-1/3 mx-auto mt-3"
            value={due_date}
            onChange={(e) => setDate(e.target.value)}
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
            onClick={handleAssignmentSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default EditAssignment;
