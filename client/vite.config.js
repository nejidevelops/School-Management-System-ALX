import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/admin_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/admin_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/admin_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teacher_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teacher_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teacher_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/parent_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/parent_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/parent_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_parent": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/students": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/par_stu_assesments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/par_stu_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teacher_subjects": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/subject_students": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_assesments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/subject_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/subject_assessments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/assessments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/logged_student_assignments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/logged_student_assessments": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/new_subject_teacher": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/subject_teachers": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/parents": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teachers": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/studentId": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/staffs": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
