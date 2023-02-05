import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getNotifications } from '../../Action/NotificationsAction';

const ListNotification = () => {
  const [notification,setnotification] =useState({})
  useEffect(() => {getNotifications().then((data) => setnotification(data))
  }, []);
  const columns = [ { field: 'id', headerName: 'ID',   flex:3 },
  { field: 'android_delivery', headerName: 'android_delivery',   flex:1 },
  { field: 'ios_delivery', headerName: 'ios_delivery',   flex:1 },
  { field: 'remaining', headerName: 'remaining',   flex:1 },
  { field: 'title', headerName: 'title',   flex:1 },
  { field: 'description', headerName: 'description',   flex:1 },
  { field: 'successful', headerName: 'successful',   flex:1 },
  
  ];
  return (
    <div style={{height:"80vh",width:"75vw",margin:'20px'}}> 
    <DataGrid
  style={{height:"80vh",width:"75vw",margin:'20px'}}
      rows={notification}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
    </div>
  )
}

export default ListNotification