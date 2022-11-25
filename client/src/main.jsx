import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user";
import {  SubjectProvider } from './context/subject';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider >
        <SubjectProvider>
          <App />
        </SubjectProvider> 
      </UserProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
