import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";


function EditAssessment() {
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [name, setName] = useState("");
  const [total, setTotal] = useState(100);

  useEffect(() => {
    fetch(`/assessments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setTotal(data.total);
      });
  }, []);

  function handleAssessmentSubmit(e) {
    e.preventDefault();
    fetch(`/assessments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        total,
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
      <div className="w-2/3 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
        <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
          Edit Assessment
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
}

export default EditAssessment;
