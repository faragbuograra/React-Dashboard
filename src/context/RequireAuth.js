import { useLocation, Navigate, Outlet } from "react-router-dom";


  const RequireAuth = ({ children }) => {
    const token = localStorage.getItem('token');
    
    const location = useLocation();
    if (!token)
       {
    
return <Outlet/>
} else {

return <Navigate to="../login"  state={{ from: location }} replace   />
}


   
}

export default RequireAuth;