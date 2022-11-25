import React, { useState } from 'react'
import Calendar from "react-calendar"
function SchoolEvent() {
  const [date, setDate]=useState(new Date())
const onChange= date =>{
  setDate(date)
}
  return (
    <div style={{  padding:"3px", borderRadius:"20px"}}>
    <Calendar  value={date} />
    <p style={{border:"1px solid grey", marginTop:"16px", borderRadius:"10px"}}>{date.toString()}</p>
    </div>
  )
}
export default SchoolEvent