import {Navigate, Outlet, useLocation} from 'react-router-dom'

import { useAuth } from './useAuth';

const RoleAccess = ({grantedRoles})=> {
    const  auth  = useAuth();
   const role = localStorage.getItem('role')
  
   

    const location = useLocation();
    if (!auth && role){
        if( grantedRoles.some((grantedRole) => role === grantedRole)){
            return <Outlet/>
        }else{
            return <Navigate to="/login"/>
        }
    }else{
        return <Navigate to="/login"/>
    }
              
                    
         
}

export default RoleAccess
