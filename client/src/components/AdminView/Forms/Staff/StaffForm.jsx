import { Button, Grid, Input, TextField, Typography } from "@material-ui/core";
import React from "react";
import Sidebar from "../../BarRoutes/Sidebar";
import "./Staff.css";

function StaffForm() {
  return (
    <div className="bigStaff">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10} lg={9}>
          
          <div className="topic"><p>Add Staff</p></div>



          <form className="staff_form">
            <div className="grey">
              Name: <Input placeholder="Name" />
            </div>
            <div className="grey">
              Position: <Input placeholder="Position" />
            </div>
            <div className="grey">
            Department: <Input placeholder="Name" />
            </div>
            <div className="grey">
              Phone Number: <Input placeholder="Name" />
            </div>
            <div className="upload">
            <Button variant="contained">Send</Button>
            </div>
            
          </form>
          <div className="cards">
          Flex box cards
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default StaffForm;
