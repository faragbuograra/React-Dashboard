import * as React from 'react';
import Box from '@mui/material/Box';
import InventoryIcon from '@mui/icons-material/Inventory';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import { Icon, Link } from '@mui/material';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MapIcon from '@mui/icons-material/Map';
import { useTranslation } from 'react-i18next';
const drawerWidth = '20vw';

function Index(props) {
  const { window } = props;
  const location = useLocation()
 let a =location.pathname.split('/')[1]
 const {t,i18n} = useTranslation();
 let language =i18n.language
  
  const themeColor = useSelector((state) => state.theme.value)
  const [mobileOpen, setMobileOpen] = React.useState(false);
const links =[
  {
    name:t('DashBoard'),
    icon:<HomeIcon  style={{ color: a ==  'DashBoard' ? themeColor.active:themeColor.main}} />,
    href:'DashBoard',
    list:null
  },
  {
    name:t('Users'),
    icon:<GroupIcon style={{ color: a ==  'Users' ? themeColor.active:themeColor.main}}/>,
    href:'Users',
    list:null,
    list1:[t('NewUser')],
    list:['NewUser'],
  },
  {
    name:t('Customers'),
    icon:<GroupIcon  style={{ color: a ==  'Customers' ? themeColor.active:themeColor.main}}/>,
    href:'Customers'
  },
  {
    name:t('Orders'),
    icon:<InventoryIcon style={{ color: a ==  'Orders' ? themeColor.active:themeColor.main}}/>,
    href:'Orders',
    list:null
    
  },
  {
    name:t('OrderType'),
    icon:<MailIcon style={{ color: a ==  'OrderType' ? themeColor.active:themeColor.main}}/>,
    href:'OrderType',
    list:['NewOrderType'],
    list1:[t('NewOrderType')],
  },
  // {
  //   name:t('Notifications'),
  //   icon:<NotificationsActiveIcon style={{ color: a ==  'Notifications' ? themeColor.active:themeColor.main}}/>,
  //   href:'Notifications',
  //   list:['NewNotification'],
  //   list1:[t('NewNotification')],
  // },
  
 
  {
    name:t('Locations'),
    icon:<MapIcon style={{ color: a ==  'Locations' ? themeColor.active:themeColor.main}}/>,
    href:'Locations',
    list:['NewLocation'],
    list1:[t('NewLocation')],
  },
  {
    name:t('FeedBack'),
    icon:<UnsubscribeIcon style={{ color: a ==  'Feedback' ? themeColor.active:themeColor.main}}/>,
    href:'Feedback',
    list:null
 
   
  },
  {
    name:t('Settings'),
    icon:<SettingsSuggestIcon style={{ color: a ==  'Settings' ? themeColor.active:themeColor.main}}/>,
    href:'Settings',
 
    list:null
   
  },
]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:themeColor.mood,height:'100vh'}}>
       <br />
      <Link
    href={`${process.env.PUBLIC_URL}/#`}

      
      display='flex'
      lineHeight='100%'
      fontWeight='bold'
      justifyContent='center'
      alignItems='center'
      className="center" 
      style={{ textDecoration: 'none',
      '&:hover': {
        background: "#f00",
     }, }}
      >
     
      <h1 className="center" style={{color:themeColor.active}} >
     {/* TecCube  */}
     Marsuol
      </h1>
     
    </Link>
    <br /> <br />
     <Divider />
      <List dir={`${language == 'ar'?'rtl':''}`} >
        {links.map((text, index) => (
          <>
          
          <NavLink to={'/'+text.href} key={text.name} replace={false}   style={{ textDecoration: 'none'}}>
             <ListItem    sx={{ 
            color:themeColor.primary,
            }}  >
            <ListItemButton style={{textAlign:`${language == 'ar'?'right':'left'}`}} >
              <ListItemIcon style={{color:themeColor.main}}>
              {text.icon}
              </ListItemIcon>

              <ListItemText  primary={text.name} style={{ color: a ==  text.href ? themeColor.active:themeColor.main}} />

            
              {a ==  text.href && text.list != null ? <ArrowDropDownIcon />: null}
              {a ==  text.href && text.list == null  ?<div className='line' style={{background:themeColor.active}} >
              
              </div> : null}
            </ListItemButton>
          </ListItem>
        </NavLink>
      
 
          {a ==  text.href && text.list != null && text.list.map((text1, index) => (
    <NavLink to={text.href+'/'+text.list} key={text1} replace={false}   style={{ textDecoration: 'none'}}>
    <ListItem className='sub'   sx={{ 
   color:themeColor.primary,
   }}  >
   <ListItemButton style={{textAlign:`${language == 'ar'?'center':'left'}`}} >


     <ListItemText primary={text.list1} style={{ color:  location.pathname.split('/')[2] ==  text1 ? themeColor.active:themeColor.main}} />

     { location.pathname.split('/')[2] ==  text.href ?<div className='line' style={{background:themeColor.active}}>
     
     </div> : null}
   
   </ListItemButton>
 </ListItem>
 </NavLink>
             ))}
          </>
       
         
        ))}
           
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} dir={`${language == 'ar'?'ltr':''}`} style={{backgroundColor:themeColor.mood}}     >
    
    <Icon
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } ,background:'red'}}
          />
      <Box
        component="nav"
      
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }  }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
       
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
 
        variant="permanent"
        
        anchor= {language == 'ar'?'right':'left'}
          sx={{
        
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}



export default Index;