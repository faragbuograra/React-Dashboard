import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { swal } from '../../components/swal';

const NewUser = () => {
  const error=[]
  const themeColor = useSelector((state) => state.theme.value);
  const {t} = useTranslation();
  const [
    isloading,
    setisloading,
] =useState(false)
  console.log(error?.error?.data);
  // function Onclick(params) {
  //   setisloading(true)
  //   console.log(state);
  //   PostUser(state)
  //     .unwrap()
  //     .then((res) => swal("success", "success", res.status)
  //     .then((res) => {
  //       setisloading(false)
  //     }))
 
      // .catch((error) => {
      //   console.log(error);
      //   if (error) {
      //     swal("error", "error", error?.data?.message);
      //     setisloading(false)
      //   }
      // });
  // }
  const [state, setState] = React.useState({});
  return (
    <div style={{height:"90vh",width:"70vw",margin:'20px'}}>
<Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label style={{ color:  themeColor.text}}>
        {t('Email')}         
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
          onChange={(e) => setState({ ...state, email: e.target.value })} 
        />
         <h6 className="red">{error?.error?.data?.errors.email}</h6>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label style={{ color:  themeColor.text}}>
        {t('Password')}   
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
          onChange={(e) => setState({ ...state, password: e.target.value })} 
        />
          <h6 className="red">{error?.error?.data?.errors.password}</h6>
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
  
  <Label  style={{ color:  themeColor.text}}>
    {t('Username')} 
    </Label>
 
  <Input
   onChange={(e) => setState({ ...state, username: e.target.value })} 
    className="mb-3"
    type="text"
  >
   
  </Input>
  <h6 className="red">{error?.error?.data?.errors.username}</h6>
  </FormGroup>
  <FormGroup>

  <Label style={{ color:  themeColor.text}}>
  {t('Role')} 
    </Label>
  
  <Input
 onChange={(e) => setState({ ...state, role: e.target.value })} 
    className="mb-3"
    type="select"
  >
     <option value={''}>
  
    </option>
    <option value={'admin'}>
  Admin
    </option>
    <option value={'delivary'}>
    Delivary
    </option>
  </Input>

  <h6 className="red">{error?.error?.data?.errors.role}</h6>

      <FormGroup>
        <Label style={{ color:  themeColor.text}}>
        {t('Phone')}  
        </Label>
        <Input
       
          type="number"
          onChange={(e) => setState({ ...state, phone: e.target.value })} 
  />
     <h6 className="red">{error?.error?.data?.errors.phone}</h6>
      </FormGroup>

  </FormGroup>
  <Row>

   
   
  </Row>
 
  <Button style={{ background:  themeColor.active}}  > 
   New User
  </Button>
</Form>
    </div>
  )
}

export default NewUser