
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Loding from '../../components/lodaing/Loding';
import { swal } from '../../components/swal';
import { useState } from 'react';


function Setings()
{

 const [state,setState] = useState([])
 let data=[]
  let error=[]
  let isLoading=[]

// const {refetch}=useGetSystemInfoQuery()
  const themeColor = useSelector((state) => state.theme.value)
// function OnClick() {
//   updateSystemInfo(state).unwrap().then
//   (res=>swal(
//     'success', 'success',res.status
//   ))
//     refetch()
// }
// useEffect(() => {
//   setState(data?.data[0])
//   }, [data?.data[0]]
  // )
  return (
    <div style={{height:"90vh",width:"70vw",margin:'20px'}}>
      {error?swal(
        'error', 'error',error.status
      ):''}
    {isLoading?  <Loding />:
<Form>
 
  <FormGroup>
  
  <Label  style={{ color:  themeColor.mood}}>
  System info
    </Label>
 
  <textarea

value={state?state.description:null}
onChange={(e)=>(setState({...state,['description']:e.target.value}))}
    className="h-20 w-100"
    type="text"
  >
   
  </textarea>
  
  <Label  style={{ color:  themeColor.mood}}>
  System states
    </Label>
    <Input
     className="select"
     value={state?state.states:null}
     onChange={(e)=>(setState({...state,['states']:e.target.value}))}

 type="select"
>

  <option value={'Close'}>
  Close
</option>
<option value={'open'}>
open
</option>
</Input>
 
  </FormGroup>
 
  
  <Button   style={{ background:  themeColor.active}} > 
Update
  </Button>
</Form>}
    </div>
  )
}

export default Setings