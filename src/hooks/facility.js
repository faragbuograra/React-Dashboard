import {Navigate, Outlet, useLocation} from 'react-router-dom'

import { useAuth } from './useAuth';

const FacilityAccess = ()=> {
   const facility = localStorage.getItem('facility')

    const location = useLocation();
    if (facility==''){    
            return <Outlet/> 
    }else{
        return <Navigate to="/"/>
    }
              
                    
         
}

export default FacilityAccess
