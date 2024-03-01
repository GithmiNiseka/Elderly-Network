import React , { useState } from "react"
import { team } from "../../dummydata"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

// Use the imported icons as needed


const TeamCard = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
  <>
      {team.map((val) => (
        <div className="items shadow" key={val.id}>
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              
            <i className="fab fa-facebook icon">
                <FontAwesomeIcon  icon={faFacebook } /></i>
              <i className="fab fa-twitter icon"><FontAwesomeIcon icon={faTwitter } /></i>
              <i className="fab fa-instagram icon"><FontAwesomeIcon  icon={faInstagram } /> </i>
              <i className="fab fa-tiktok icon"><FontAwesomeIcon  icon={faTiktok } /></i>
            </div>
            <i className="fab fa-tiktok icon" style={{position:'relative',left:'300px',top:'-25px',background:'#000',color:'#fff',width:'50px'}}><FontAwesomeIcon  icon={faTiktok } /></i>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <h4><b>{val.work}</b></h4>
            <p>{val.description}</p>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
       Get Appointment
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        
        <Typography sx={{ p: 1 }} style={{ textAlign:'center'}}> Appointment Form</Typography>
        <hr style={{width:'60%',position:'relative',left:'100px'}}/>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '28ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Typography sx={{ p: 1 }}>  <TextField   size="small" id="outlined-basic" label="Full Name" variant="outlined"  style={{ width: '450px', fontSize: '18px' }}/></Typography>
        <Typography sx={{ p: 1 }}>  <TextField   size="small" id="outlined-basic" label="Email" variant="outlined"  style={{ width: '450px', fontSize: '18px' }} /></Typography>
        <Typography sx={{ p: 1 }}>  <TextField   size="small" id="outlined-basic" label="Contact Number" variant="outlined"  style={{ width: '450px', fontSize: '18px' }} /></Typography>
        <Typography sx={{ p: 1 }}>  <TextField   size="small" id="outlined-basic" label="Address" variant="outlined"  style={{ width: '450px', fontSize: '18px' }}/></Typography>
        <Typography sx={{ p: 1 }}>  <TextField   size="small" id="outlined-basic" label="Date" variant="outlined"   style={{ width: '450px', fontSize: '18px' }} /></Typography>
        <Typography sx={{ p: 1 }}>  <TextField   size="small" id="outlined-basic" label="Time" variant="outlined"  style={{ width: '450px', fontSize: '18px' }}  /></Typography>
        <button>Submit</button>  <button style={{position:'relative',left:'-50px',color:'#999999',}} onClick={handleClose}>Cancel</button>
      </Box>
      </Popover>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
