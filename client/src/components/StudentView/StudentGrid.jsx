import React from 'react';
// import EditStudentDetails from './EditStudentDetails';
import StudentDetails from './StudentDetails'
const StudentGrid = ( { isLoading, student}) => {
     console.log(student)
  return isLoading ? (
       <h1>Loading...</h1>
       ) : (
    <section className='kard'>
     <StudentDetails student={student}/>
  </section>
       )
}
export default StudentGrid;