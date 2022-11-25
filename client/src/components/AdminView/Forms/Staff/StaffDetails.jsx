import { Grid } from '@material-ui/core';
import React from 'react'
import Sidebar from '../../BarRoutes/Sidebar'; 
const StaffDetails = ({staff}) => {

  return (
    <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={4} xs={2} lg={9}>
        <div className='kardi'>
    <div className='kardi-inner'>
      <div className='kardi-front'>
        <img src={staff.image} alt='' />
      
      </div>
      <div className='kardi-back'>
     
        <ul>
        <li>
            <strong>full_name:</strong> {staff.full_name}
          </li>
          <li>
            <strong>department:</strong> {staff.department}
          </li>
          <li>
            <strong>post:</strong> {staff.post}
          </li>
          <li>
            <strong>phone_no:</strong> {student.phone_no}
          </li>
        </ul>
      </div>
    </div>
  </div>
</Grid>
</Grid>
  )
}
export default StaffDetails;