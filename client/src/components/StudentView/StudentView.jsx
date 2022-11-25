import React from 'react';
//import axios from 'axios'
import StudentGrid from './StudentGrid';
import { useState, useEffect } from "react";
import MyAssignments from './MyAssignments';
import MyAssesments from './MyAssessments';
import "./Student.css"
// import {useParams } from "react-router-dom";
function StudentView() {
  const [student, setStudent] = useState({})
  useEffect(() => {
    console.log("whYY")
    fetch("studentId")
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        console.log("hey", data)
      });
  }, []);
  // const [isLoading, setIsLoading] = useState(true)
  // const params = useParams();
  //  const { id } = params;
  //get request
  // useEffect(() => {
  //   fetch("/student_id")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setStudent(data)
  //       console.log(data)
  //       // setIsLoading(false)
  //     });
  // }, []);
  return (
    <div className='container'>
         {/* <p>Welcome</p> */}
         <StudentGrid student={student} />
<MyAssignments />
<MyAssesments />
      </div>
  )
}
export default StudentView;