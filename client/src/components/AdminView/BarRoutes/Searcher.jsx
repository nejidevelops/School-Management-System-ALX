import { FindInPage, Search } from '@material-ui/icons'
import React from 'react'

function Searcher() {
  return (
    <div style={{border:"1px solid black", borderRadius:"10px", marginTop:"10px", marginLeft:"20px"}}>
    <Search />
     <input type="text" placeholder='Search...' />
    </div>
  )
}

export default Searcher