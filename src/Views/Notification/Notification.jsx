import React, { useEffect, useState } from "react";
import { FormGroup, Input, Button } from "reactstrap";
import { NotificationPreview } from "wonderpush-notification-preview";
/// import { SendNotification } from "../../Action/NotificationsAction";
import axios from 'axios';
import { getNotifications, SendNotification } from "../../Action/NotificationsAction";


const Notification = () => {

  const [notification,setnotification] =useState({})
  function onchange(e) {
    setnotification({
      ...notification,
      [e.target.name]: e.target.value,
    });
  }
useEffect(() => {getNotifications().then((data) => console.log(data))
 }, []);
 
  return (
    <div className="ml-10">
      <div className="center">
    
      <FormGroup>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              placeholder="with a placeholder"
              type="text"
              className="text"
              onChange={(e)=>onchange(e)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="text">Text</label>
            <input
              id="text"
              name="text"
              placeholder="with a placeholder"
              type="text"
              className="text"
              onChange={(e)=>onchange(e)}
            />
          </FormGroup>
          <br />
          <div className="center">
         
            <Button color="primary"  onClick={()=>SendNotification(notification.title, notification.text)} >
              Send
            </Button>
            </div></div>
      <div className="space-ar">
      
   
      <div className="ml-4">
       
       <NotificationPreview
         platform={"android"}
         appName={"MyApp"}
         title={notification.title}
         text={
           notification.text
         }
         buttons={["Check this out"]}
       />
     </div>
        
        <div className="">
       
          <NotificationPreview
            platform={"ios"}
            appName={"MyApp"}
            title={notification.title}
            text={
              notification.text
            }
            buttons={["Check this out"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
