import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SecondStep = () => {
  return (
    <div>
       <div className='d-fl-center fl-column'>
        <h1>Lets set up home for all your work</h1>
        <h3>You can always create another workspace later</h3>
       <TextField id="standard-basic" label="Workspace Name" variant="standard" />
       <br />
       <TextField id="standard-basic" label="Workspace URL" variant="standard" />
       <br />
      <Button variant="contained">Create Workspace</Button>

    </div>
    </div>
  )
}

export default SecondStep
