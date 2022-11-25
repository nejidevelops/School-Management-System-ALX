import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AdminView from "./components/AdminView/AdminView";
import Sidebar from "./components/AdminView/BarRoutes/Sidebar";
import Dashboard from "./components/AdminView/Dashboard/Dashboard";
import ParentData from "./components/AdminView/DataTables/ParentData";
import StudentData from "./components/AdminView/DataTables/StudentData";
import TeacherData from "./components/AdminView/DataTables/TeacherData";
import ParentEditForm from "./components/AdminView/Forms/Parent/ParentEditForm";

import ParentForm from "./components/AdminView/Forms/Parent/ParentForm";
import StaffDetails from "./components/AdminView/Forms/Staff/StaffDetails";
import StudentEditForm from "./components/AdminView/Forms/Student/StudentEditForm";
import StudentForm from "./components/AdminView/Forms/Student/StudentForm";
import TeacherEditForm from "./components/AdminView/Forms/Teacher/TeacherEditForm";
import TeacherForm from "./components/AdminView/Forms/Teacher/TeacherForm";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import ParentStudentAssessments from "./components/ParentView/ParentStudentAssessments";
import ParentStudentAssignments from "./components/ParentView/ParentStudentAssignments";
import ParentView from "./components/ParentView/ParentView";

import StudentView from "./components/StudentView/StudentView";
import AddAssessment from "./components/TeacherView/AddAssessment";
import AddAssignment from "./components/TeacherView/AddAssignment";
import ChangeAssessmentScore from "./components/TeacherView/ChangeAssessmentScore";
import ChangeAssignmentScore from "./components/TeacherView/ChangeAssignmentScore";
import EditAssessment from "./components/TeacherView/EditAssessment";
import EditAssignment from "./components/TeacherView/EditAssignment";
import SubjectStudents from "./components/TeacherView/SubjectStudents";
import TeacherStudentAssessments from "./components/TeacherView/TeacherStudentAssessments";
import TeacherStudentAssignments from "./components/TeacherView/TeacherStudentAssignments"
import TeacherView from "./components/TeacherView/TeacherView";
// import Syllabus from "./components/TeacherView/Syllabus";
// import SubjectList from "./components/TeacherView/SubjectList";





function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/admin_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/teacher_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/student_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/parent_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <main className="min-h-[92vh]">
      <Navbar user={user} setUser={setUser} />
    
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherView />} />
          <Route path="/student" element={<StudentView />} />
          <Route path="/parent" element={<ParentView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />

          {/* ADMIN ROUTES */}
          
        <Route  path='/dashboard' element={<Dashboard/>}/>
        <Route  path='/addstudent' element={<StudentForm/>}/>
        <Route  path='/addteacher' element={<TeacherForm/>}/>
        <Route  path='/addparent' element={<ParentForm/>}/>
        <Route  path='/addstaff' element={<StaffDetails/>}/>
        <Route  path='/studenttable' element={<StudentData/>}/>
        <Route  path='/parenttable' element={<ParentData/>}/>
        <Route  path='/teachertable' element={<TeacherData/>}/>
        <Route  path='/studentedit/:id' element={<StudentEditForm/>}/>
        <Route  path='/teacheredit/:id' element={<TeacherEditForm/>}/>
        <Route  path='/parentedit/:id' element={<ParentEditForm/>}/>




{/* END OF ADMIN ROUTES */}



          <Route path="/par-stu-assignments/:id" element={<ParentStudentAssignments/>} />
          <Route path="/par-stu-assessments/:id" element={<ParentStudentAssessments/>} />

          <Route path="/subject-students/:id" element={<SubjectStudents/>} />

          <Route path="/my-students-assessments/:id" element={<TeacherStudentAssessments/>} />
          <Route path="/my-students-assignments/:id" element={<TeacherStudentAssignments/>} />

          <Route path="/change-assessment-score/:id" element={<ChangeAssessmentScore/>} />
          <Route path="/change-assignment-score/:id" element={<ChangeAssignmentScore/>} />

          <Route path="/add-assignment/:id" element={<AddAssignment/>} />
          <Route path="/add-assessment/:id" element={<AddAssessment/>} />


          <Route path="/edit-assignment/:id" element={<EditAssignment/>} />
          <Route path="/edit-assessment/:id" element={<EditAssessment/>} />





        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
