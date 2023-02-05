import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../app/Selice/authSelice'
import { setCredentials } from '../../features/user'
import { useDispatch } from 'react-redux'
import { SwapCalls } from '@mui/icons-material'
import { swal } from '../../components/swal'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [login,{isloading}] = useLoginMutation()
  const emailref = React.useRef()
  const passref = React.useRef()
  const errref = React.useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    emailref.current.focus()
  }, [])
  useEffect(() => {
setError('')
  }, [email, password])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = await login({email,password}).unwrap()
      
      dispatch(setCredentials({...userData,email,}))

      swal('success','Login Successfully','success')
      navigate('/dashboard')
      } 
    catch (error) { 
      if(error.status === 401){
        swal('error','Invalid Credentials','error')
        setError('Invalid Credentials')}
      else if(error.status === 400){
        swal('error','Please fill all the fields','error')
        setError('Please fill all the fields')}
      else if (error.status === 500) {
        swal('error','Server Error','error')
        setError('Server Error')
      }else if(error.status === 404){
        swal('error','User Not Found','error')
        setError('User Not Found')
  
    }else if(!error.status){
      swal('error','Serve Down','error')
      setError('Serve Down')
    }
    }
  }    
  return (
    <>
    <body id="particles-js"></body>
    <div className="animated bounceInDown">
    <div className="container">
      <span className="error animated tada" id="msg"></span>
      <form name="form1" className="box" onSubmit={handleSubmit}>
{isloading ? <h1>Loading...</h1> : null}
        <h1>Marsual</h1>
          <input type="email"  
                    id="email1"
                    ref={emailref}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    autoComplete="off"
                    required/>
          <i id="eye"></i>
          <input type="password"  
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required/>
            
          <input type="submit"  className="btn1" name="login" /> 
        </form>
           <a href="#" className="dnthave"></a>
    </div> 
         <div className="footer">
        <span>Made By Clean code </span>
      </div>
  </div>
 
    </>
  

  )
}

export default Login;