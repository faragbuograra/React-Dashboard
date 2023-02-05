import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(  localStorage.getItem('user' ) ?  localStorage.getItem('user'  ) : null);
    const [accessToken, setaccessToken] = useState(null);
    const [role, setrole] = useState( localStorage.getItem('role' ) ?  localStorage.getItem('role'  ) : null);
const login = (user,accessToken,role,refresh_token) =>{
  
    setaccessToken(accessToken)
   
    setUser(user)
    setrole(localStorage.getItem('role'))
}
const logout =() =>{
    setUser(null)
}
   return (
        <AuthContext.Provider value={{ user ,role,accessToken,login,logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth =() =>{
    return useContext(AuthContext)
}
