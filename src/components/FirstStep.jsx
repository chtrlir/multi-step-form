import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const FirstStep = () => {
  return (
    <div className='d-fl-center fl-column'>
        <h1>Welcome!! First Things First</h1>
        <h3>You can always change them later</h3>
       <TextField id="standard-basic" label="Full Name" variant="standard" />
       <br />
       <TextField id="standard-basic" label="Display Name" variant="standard" />
       <br />
      <Button variant="contained">Create Workspace</Button>

    </div>
  )
}

export default FirstStep
