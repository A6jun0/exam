import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div><br /><br />
        <TextField id="outlined-basic" label="bookname" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="genre" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="author" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="published on" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="published by" variant="outlined" /><br /><br />
        <Button variant='contained'color='success'>submit</Button>
    </div>
  )
}

export default Add