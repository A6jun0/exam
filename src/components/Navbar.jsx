import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div><center>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Library
          </Typography>
          <Button color="inherit"> <Link to='/Add' style={{ color: 'white', Align: 'right', textDecoration: 'none' }}>ADD</Link></Button>
         
        </Toolbar>
      </AppBar>
    </Box>
    </center>

    </div>
  )
}

export default Navbar