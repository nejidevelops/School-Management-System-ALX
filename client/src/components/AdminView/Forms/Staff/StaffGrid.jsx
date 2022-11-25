import React from 'react';
import StaffDetails from './StaffDetails';

const StaffGrid = ( { isLoading, staff}) => {
 
     console.log(staff)
  return isLoading ? (
       <h1>Loading...</h1>
       ) : (
    <section className='kardi'>
     <StaffDetails staff={staff}/> 
    

  </section>
       )
}
export default StaffGrid;