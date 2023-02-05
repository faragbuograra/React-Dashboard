import Swal from "sweetalert2";
import { Theme } from "../../Theme/Theme";

export function swal(icon, title, text) {
  if(localStorage.getItem('position1')==1){
    const Toast = Swal.mixin({
      toast: true,
      position: localStorage.getItem('position')||Theme.position,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: icon,
      title: title
    })
  }else{
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      position:localStorage.getItem('position')||Theme.position
    })
  }

 
}

