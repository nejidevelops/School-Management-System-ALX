import { Dashboard, Group, Person, School, Settings } from '@material-ui/icons'
import { useNavigate } from "react-router-dom";
import React from 'react'
import './Side.css'




function Sidebar() {
  let navigate = useNavigate();
  
  return (
    <div className='sidebar'>
    <div className="sidebarWrapper">
      <div className='sidebarMenu'>
        <p  className='sidebarTitle'>Home and Forms</p>
        <ul className='sidebarList'>
          <li className='sidebarListItem active'onClick={() => {
          navigate("/dashboard");
        }}>
            <Dashboard className='sidebarIcon' />
            Dashboard
          </li>
          
          <li className='sidebarListItem'  onClick={() => {
          navigate("/addteacher");
        }}>
            <Person className='sidebarIcon'/>
            Teacher
          </li>
          <li className='sidebarListItem'  onClick={() => {
          navigate("/addstudent");
        }}>
            <School className='sidebarIcon'/>
            Student
          </li>
          <li className='sidebarListItem'  onClick={() => {
          navigate("/addparent");
        }}>
            <Person className='sidebarIcon'/>
            Parent
          </li>
          <li className='sidebarListItem ' onClick={() => {
          navigate("/addstaff");
        }} >
            <Group className='sidebarIcon'/>
            Staff
          </li>
        </ul>
      </div>
      <div className='sidebarMenu'>
        <p  className='sidebarTitle'>Data Tables</p>
        <ul className='sidebarList'>
          
          <li className='sidebarListItem'  onClick={() => {
          navigate("/teachertable");
        }}>
            <Person className='sidebarIcon'/>
            Teacher Table
          </li>
          <li className='sidebarListItem'  onClick={() => {
          navigate("/studenttable");
        }}>
            <School className='sidebarIcon'/>
            Student Table
          </li>
          <li className='sidebarListItem'  onClick={() => {
          navigate("/parenttable");
        }}>
            <Person className='sidebarIcon'/>
            Parent Table
          </li>
          {/* <li className='sidebarListItem'  onClick={() => {
          navigate("/stafftable");
        }}>
            <Group className='sidebarIcon'/>
            Staff Table
          </li> */}
        </ul>
      </div>
      {/* <div className='sidebarMenu'>
        <p className='sidebarTitle'>Admin</p>
        <ul className='sidebarList'>
          
          <li className='sidebarListItem'  onClick={() => {
          navigate("/settings");
        }}>
            <Settings className='sidebarIcon'/>
            Settings
          </li>
          
        </ul>
      </div> */}
    </div>
   
    </div>
  )
}

export default Sidebar