import React from 'react';

import Dashboard from './Views/DashBoard/Dashboard';
import Index from './components/navbar/Index';
import { Route, Routes } from 'react-router-dom';
import  AppBar  from './components/AppBar/AppBar';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Users from './Views/Users/Users';
import Customers from './Views/Customers/Customers';
import NewUser from './Views/Users/NewUser';
import OrderType from './Views/OrderType/OrderType';
import NewOrderType from './Views/OrderType/NewOrderType';
import Location from './Views/Localiton/Location';
import NewLocation from './Views/Localiton/NewLocation';

import FeedBack from './Views/FeedBack/FeedBack';
import Settings from './Views/Settings/Settings';
import Orders from './Views/Order/Orders';
import Login from './Views/Login/Login';
import { useTranslation } from 'react-i18next';
import System from './Views/System/System';

import RequireAuth from './context/RequireAuth';

function App() {
  const themeColor = useSelector((state) => state.theme.value)

  let location = useLocation()

  const {t,i18n} = useTranslation();
 let language =i18n.language
 
  return (
    <div className="App" style={{backgroundColor:themeColor.mood}} dir={`${language == 'ar'?'rtl':''}`}>
   <div className="flex h-100" >



{location.pathname === '/login'  ? null : <Index/>}
<div >

{location.pathname === '/login'  ? null : <AppBar/>}
<Routes>
<Route path="/login"  element={ <Login/>}></Route>

<Route  element={<RequireAuth />}>
<Route path="/"  element={ <Dashboard/>}></Route>
<Route path="/Customers"  element={ <Customers/>}></Route>
<Route path="/DashBoard"  element={ <Dashboard/>}></Route>
<Route path="/Users" element={ <Users/>}></Route>
<Route path="/Users/NewUser"  element={ <NewUser/>} ></Route>
{/* <Route path="/Notifications"  element={ < ListNotification/>} ></Route>
<Route path="/Notifications/NewNotification"  element={ <Notification/>} ></Route> */}
<Route path="/OrderType"  element={ <OrderType/>} ></Route>
<Route path="/OrderType/NewOrderType"  element={ <NewOrderType />} ></Route>
<Route path="/Locations"  element={ <Location />} ></Route>
<Route path="/Locations/NewLocation"  element={ <NewLocation />} ></Route>
<Route path="/FeedBack"  element={ <FeedBack/>} ></Route>
<Route path="/Settings"  element={ <Settings/>} ></Route>
<Route path="/Orders"  element={ <Orders/>} ></Route>
<Route path="/System"  element={ <System/>} ></Route>
</Route>
</Routes>

</div>

</div>
    </div>
  );
}

export default App;
