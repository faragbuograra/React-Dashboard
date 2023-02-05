
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Color } from "../../Theme/Color";
import { useDispatch } from "react-redux";
import { ChangeColor } from '../../features/theme';
import { Theme } from '../../Theme/Theme';
import { swal } from '../../components/swal';
function System() {
  const dispatch = useDispatch()
  const themeColor = useSelector((state) => state.theme.value)
function OnClick(color) {


  localStorage.setItem('main',color)
   dispatch(ChangeColor ({ main: color, Hover: Color.Hover, active: Color.active,BackGround:Color.BackGround,mood: Color.mood}))

}
function OnClick1(color) {


  localStorage.setItem('active',color)


   dispatch(ChangeColor ({ main:   localStorage.getItem('main'), Hover: Color.Hover, active: color,BackGround:Color.BackGround,mood: Color.mood}))


}
function OnClick2(e) {

  localStorage.setItem('position',e.target.value)
  swal(
    'success', 'test','test'
  )
}
function OnClick3() {
if(localStorage.getItem('position1')==1){
  localStorage.setItem('position1',0)
}else{
  localStorage.setItem('position1',1)
}
  swal(
    'success', 'test','test'
  )
}
  return (
    <div style={{height:"90vh",width:"80vw",margin:'20px'}}>
<div className='flexjs'>
<div style={{textAlign:'center'}}>
  <h4>System Primary Color</h4>
  <span className="dot" style={{backgroundColor:'red'}} onClick={()=>OnClick("red")}></span>
  <span className="dot" style={{backgroundColor:'green'}} onClick={()=>OnClick("green")}></span>
  <span className="dot" style={{backgroundColor:'blue'}} onClick={()=>OnClick("blue")}></span>
  <span className="dot" style={{backgroundColor:'#8F9BBA'}} onClick={()=>OnClick("#8F9BBA")}></span>
  <span className="dot" style={{backgroundColor:'#FF00F9'}} onClick={()=>OnClick("#FF00F9")}></span>
</div>
<div style={{textAlign:'center'}}>
  <h4>System Hover Color</h4>
  <span className="dot" style={{backgroundColor:'red'}} onClick={()=>OnClick1("red")}></span>
  <span className="dot" style={{backgroundColor:'green'}} onClick={()=>OnClick1("green")}></span>
  <span className="dot" style={{backgroundColor:'blue'}} onClick={()=>OnClick1("blue")}></span>
  <span className="dot" style={{backgroundColor:'#8F9BBA'}} onClick={()=>OnClick1("#8F9BBA")}></span>
  <span className="dot" style={{backgroundColor:'#FF00F9'}} onClick={()=>OnClick1("#FF00F9")}></span>
</div>
</div><hr></hr>
<div style={{width:'70vw'}}>
<Label  style={{ color:  themeColor.mood}}>
Swal position
    </Label>
    <input
  type="checkbox"
  style={{textAlign:'center'}}
  onClick={()=>OnClick3()}
    >
    
    </input>
<Input
     className="select"
     value={localStorage.getItem('position')}
     onChange={(e)=>(OnClick2(e))}

 type="select"
>
<option value={'top'}>
top
</option>

<option value={'top-end'}>
top-end
</option>
<option value={'bottom'}>
bottom
</option>

<option value={'bottom-end'}>
bottom-end
</option>
<option value={'center-end'}>
center-end
</option>
<option value={'center'}>
center
</option>

</Input>
</div>
    </div>
  )
}

export default System