import "./index1.scss";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { Color } from "../../Theme/Color";
import { ChangeColor } from "../../features/theme";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { Logout, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";



const AppBar = () => {
  const data=[]
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value)
function DarkMode() {
if(localStorage.getItem('BackGround')=='#112240'){
  localStorage.setItem('BackGround','#ffffff')
  localStorage.setItem('mood','#ffffff')
  localStorage.setItem('text','#000000')
   dispatch(ChangeColor ({ main: Color.Primary, Hover: Color.Hover, active: Color.active,BackGround:'#ffffff',mood: '#ffffff',text:'#000000' }))
}else{
  localStorage.setItem('BackGround','#112240')
  localStorage.setItem('mood','#0A1930')
  localStorage.setItem('text','#ffffff')
   dispatch(ChangeColor ({ main: Color.Primary, Hover: Color.Hover, active: Color.active,BackGround:'#112240',mood: '#0A1930',text:'#ffffff' }))
}

}  const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
function len() {
  const l=localStorage.getItem('lang')
  if(l=='en'){
localStorage.setItem('lang','ar')
window.location.reload()
}
if(l=='ar'){
  localStorage.setItem('lang','en')
  window.location.reload()
  }
if(l==undefined){
  localStorage.setItem('lang','ar')
  window.location.reload()
}
}

  return (
    <div className="navbar" style={{backgroundColor:themeColor.mood}} >
      <br></br>
      <div className="wrapper">
        <div >
          {/* <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon /> */}
        </div>
        <div>
        <div className="items"  style={{color:themeColor.text}}>
          <div className="item" onClick={()=>len()}>
            <LanguageOutlinedIcon className="icon mx-2"  />
            {localStorage.getItem('lang')!='ar'?'English':'العربية'}
          </div>
          <div className="item"  onClick={() => DarkMode()}>
          <IconButton sx={{ ml: 1 }}  color="inherit">
        {localStorage.getItem('BackGround')!='#112240' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">{data?.unopenfeedbacks}</div>
          </div>
{/*           
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div> */}
         
          <div className="item">
          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
     
        {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
  
        <Link to="/System">
        <MenuItem>
        
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          System
         
        </MenuItem>
        </Link>
        <Link to="/login">
        <MenuItem onClick={()=>localStorage.clear()
        }>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Link>
      </Menu>
          </div>
        </div>
          </div>
       
      </div>
    </div>
  );
};

export default AppBar;