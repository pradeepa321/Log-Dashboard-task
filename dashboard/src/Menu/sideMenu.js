import React, { useState } from 'react';
import './sideMenu.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import icon1 from '../ApacheLogs/apache log.png';
import icon2 from '../ApacheLogs/ngnix.png';

const SideMenu = () => {

    const [anchorEl, setAnchorEl] =useState(null);
    const [anchorE2, setAnchorE2] =useState(null);
    const open = Boolean(anchorEl,anchorE2)
    const opens = Boolean(anchorE2)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handlesClick = (event) => {
      setAnchorE2(event.currentTarget);
    };
    const handlesClose = () => {
      setAnchorE2(null);
    };
    const navigate = useNavigate();
    const accessLog = () => {
      navigate('/accesslogs')
    }
    const errorlog = () => {
      navigate('/errorlogs')
    }
    const attackllog = () => {
        navigate('/attacklog')
    }
    const ngaccesslog = () => {
        navigate('/ngaccesslog')
    }
    const ngerrorlog = () => {
        navigate('/ngerrorlog')
    }
    const dashboard = () => {
      navigate('/')
    }

    return (
        <div className='menubar'>
          <div className='btn'>
            <button onClick={() =>dashboard()}>Dashboard</button>
          </div>
      <div className='menu'>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className='menubtn'
        >
        <img src={icon1} className='icons' alt='apache' width={30} /> 
        Apache Logs
        </Button>
    
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
            
            <MenuItem onClick={accessLog}>Access Logs</MenuItem>
          <MenuItem onClick={errorlog}>Error Logs</MenuItem>
          <MenuItem onClick={attackllog}>Attack showLogs</MenuItem>
           
         
        </Menu>
      
      <div className='menu'>
        <Button
          id="basic-button"
          aria-controls={opens ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={opens ? 'true' : undefined}
          onClick={handlesClick}
          className='menubtn'
        >
        <img src={icon2} className='icons' alt='apache' width={30} /> 
        Nginx Logs
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorE2}
          open={opens}
          onClose={handlesClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={ngaccesslog}>Access Logs</MenuItem>
          <MenuItem onClick={ngerrorlog}>Error</MenuItem>
        </Menu>
      </div>
      </div>
      </div>
      
    )
}

export default SideMenu