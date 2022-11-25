import React from 'react'
function Home() {
  return (
    <div>
      <div className='row'>
          <div
            className="bg-image hover-overlay ripple"
            style={{backgroundImage: "url('https://www.thoughtco.com/thmb/TCFXTqf8HO5k1XwR7UjqWiGnygI=/3000x1868/filters:fill(auto,1)/womangraduating-57471d735f9b58723d59fe16.jpg')",
            height: '100vh', width:"100%" }}>
          <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
              <div className="h-100">
              <h1 style={{fontWeight:'bold', fontFamily:'cursive', color:'white', fontSize:'50px', marginTop:'130px', display:'inherit', marginLeft:'200px'}}> OUR MANAGEMENT SYSTEM</h1>
              <div style={{fontWeight:'normal', fontFamily:'cursive', color:'white', fontSize:'20px', marginTop:'17px', display:'inherit', marginLeft:'200px'}} className='paragraph'>
              <p>Welcome to our school management application, that serves as our database and suite of portals for our beloved<p></p> 
              parents, teachers and students. The main essence of this system is to; avail student specific data to teachers, in addition <p></p>to enabling them to easily assign tasks,
               be it assignments or assessments. This system also enables them to keep track of student<p></p> progress. Enables students to have access to assignments and assignments as well as keep a record of their performance.
               <p></p>And finally, this application enables parents to view the performance and keep a track of the progress of the students<p></p> they have enrolled in the school.
               </p>
              </div>
              </div>
            </div>
          </div>
          <div>
          <div style={{backgroundColor:'#0B0B45'}} className="row row-cols-1 row-cols-md-4 g-4">
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">ADMIN</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
              As the Super User, Our Admin is the School's Record Keeper. Admin is Responsible for registering, editing and deleting Teacher Profiles, Student Profiles, and Parent Profiles. All registrations must go through our admin first
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Administrator: Steve Jobs</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">TEACHER</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">Our teachers will be responsible for classroom Management. They will be Assigning their Students Assignments and assessments and also grade them accordingly.</p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Head of teachers: Maya Angelou</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">STUDENT</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
              With the Many Courses offered by Edupo School, our students will be partaking one course at a time and upon registration, they will have access to their given assessments, assignments and grades via the student's portal.
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Student President: Elon Musk</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">PARENT</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
              Edupo encourages transparency. Parents with students enrolled at edupo School will also be directly involved by being given an opportunity to log in and view their children's progress.
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Parent Representative: Diana Rose</small>
            </div>
          </div>
        </div>
      </div>
          </div>
      </div>
    </div>
  )
}
export default Home