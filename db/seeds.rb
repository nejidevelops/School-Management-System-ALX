# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Admin"
admin = Admin.create(username: "admin", email: "angelastephen14@gmail.com", role: "admin", password: "admin")
puts "Done Seeding Admin"

puts "Seeding Teachers..."
teacher1 = Teacher.create(username: "james", email: "james@gmail.com", role: "teacher", password: "james", gender: "Male", full_name: "James Bond", address:"33 westlands", phone_no: "0788223355", image: "https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
teacher3 = Teacher.create(username: "grace", email: "grace@gmail.com", role: "teacher", password: "grace", gender: "Female",  full_name: "Grace Knight", address:"32 Eastlands", phone_no: "0744992233", image: "https://images.unsplash.com/photo-1601611900876-391151003440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
teacher2 = Teacher.create(username: "jose", email: "jose@gmail.com", role: "teacher", password: "jose", full_name: "Joseph Otwoma", address:"31 South-B", phone_no: "0755627892", gender: "Male", image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
puts "Done Seeding Teachers"


puts "Seeding Parents..."
parent1 = Parent.create(role: "parent", address:"23 west", phone_no: "0755663344", full_name:"John Awiti",email:"jon@gmail.com",password:"jon", username: "jon")
parent2 = Parent.create(username: "okech", address:"22 North", phone_no: "0733443322", email: "okech@gmail.com", role: "parent", password: "okech", full_name: "Okech Johnson")
parent3 = Parent.create(username: "tim", address:"21 South", phone_no: "0744553344", email: "tim@gmail.com", role: "parent", password: "tim", full_name: "Tim Kut")
puts "Done Seeding Parents"

puts "seeding Staffs"
staff1 = Staff.create(full_name: "WednesdayAddams", department: "finance", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", phone_no: "0788888888", post: "Cler")
puts "Done seeding staff"


puts "Seeding Subjects..."
subject1 = Subject.create(name: "Web Development")
subject2 = Subject.create(name: "Cyber Security")
subject3 = Subject.create(name: "Data Science")
subject4 = Subject.create(name: "Networking")
puts "Done Seeding Subjects"


puts "Seeding Classrooms"
classroom1 = Classroom.create(name: 'Pegion', teacher_id: 1)
classroom2 = Classroom.create(name: 'Dove', teacher_id: 2)
classroom3 = Classroom.create(name: 'Sparrow', teacher_id: 3)
puts "Done Seeding Classrooms"


puts "Seeding Students..."
student = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 1, phone_no: "0707777772", admission_no: "12543", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "angela", classroom_id: 1, username: "angela")
student2 = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 2, phone_no: "0723454543", admission_no: "12549", subject_id: 1, full_name: "Mariam Ali", email: "ali@gmail.com", password: "ali", classroom_id: 1, username: "ali")
student3 = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 1, phone_no: "12345678", admission_no: "12544", subject_id: 2, full_name: "Olivia Akinyi", email: "olivia@gmail.com", password: "olivia", classroom_id: 2, username: "olivia")
student4 = Student.create(role: "student",  gender: "Male", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", parent_id: 2, phone_no: "0788643233", admission_no: "12545", subject_id: 2, full_name: "Dennis Mburu", email: "dennis@gmail.com", password: "dennis", classroom_id: 2, username: "dennis")
puts "Done Seeding Students"


puts "Seeding Subject_Teachers"
subject_teacher1 = SubjectTeacher.create(teacher_id: 1, subject_id: 1)
subject_teacher2 = SubjectTeacher.create(teacher_id: 1, subject_id: 2)
subject_teacher1 = SubjectTeacher.create(teacher_id: 2, subject_id: 3)
subject_teacher1 = SubjectTeacher.create(teacher_id: 2, subject_id: 4)
puts "Done Seeding Subject teachers"



puts "Seeding Assignments"
assignment1 = Assignment.create(name: "tribute page", subject_id: 1, due_date: "2022-11-04" )
assignment2 = Assignment.create(name: "Login Authentication", subject_id: 1, due_date: "2022-11-04" )
assignment3 = Assignment.create(name: "OWASP top 10 summary", subject_id: 2, due_date: "2022-11-04" )
assignment4 = Assignment.create(name: "Attack Types Essay", subject_id: 2, due_date: "2022-11-04" )
puts "Done Seeding Assignments"


puts "Seeding Assessments"
assessment1 = Assessment.create(name: "Project - E-Commerce Site", subject_id: 1, total: 100)
assessment2 = Assessment.create(name: "Project - Blog Website", subject_id: 1, total: 100)
assessment3 = Assessment.create(name: "Build Simple key-Logger", subject_id: 2, total: 100)
assessment4 = Assessment.create(name: "Malware Reverse Engineering", subject_id: 2, total: 100)
puts "Done Seeding Assessments"


puts "Seeding Student Assignment"
student_assignment1 = StudentAssignment.create(student_id:1, assignment_id:1)
student_assignment2 = StudentAssignment.create(student_id:1, assignment_id:2)
student_assignment3 = StudentAssignment.create(student_id:2, assignment_id:1)
student_assignment4 = StudentAssignment.create(student_id:2, assignment_id:2)
student_assignment5 = StudentAssignment.create(student_id:3, assignment_id:3)
student_assignment6 = StudentAssignment.create(student_id:3, assignment_id:4)
student_assignment7 = StudentAssignment.create(student_id:4, assignment_id:3)
student_assignment8 = StudentAssignment.create(student_id:4, assignment_id:4)
puts "Done Seeding Student Assignments"


puts "Seeding Student Assessments"
student_assessment1 = StudentAssesment.create(student_id: 1, assessment_id: 1)
student_assessment2 = StudentAssesment.create(student_id: 2, assessment_id: 2)
student_assessment3 = StudentAssesment.create(student_id: 3, assessment_id: 3)
student_assessment4 = StudentAssesment.create(student_id: 4, assessment_id: 4)
puts "Done Seeding Student Assessments"


puts "Completed All Seeding"