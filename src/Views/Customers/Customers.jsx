// import { IconButton } from '@mui/material';
// import { AndroidPushNotificationPreview, ApplePushNotificationPreview, PushNotificationPreview } from "push-notification-preview";

import React from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { Switch } from '@mui/material';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

function Customers() {
  const [pageSize, setPageSize] = React.useState(10);
  const themeColor = useSelector((state) => state.theme.value)
  const {t} = useTranslation();
  const data =[]
   const columns = [
    { field: 'id', headerName: 'ID',   flex:1,hide:true },
    {
      headerName: t('Email'),
      field: 'email',
      flex:1,
  
    },
    {
      headerName:    t('Username'),
      field:   'username',
      flex:1,
  
    },
    {
      headerName:    t('name'),
      field:   'name',
      flex:1,
  
    },
    {
      headerName:    t('Phone'),
      field: 'phone',
      flex:1,
  
    },
    {
      headerName: t('Role'),
      field:'role',
      flex:1,
  
    },
    {
      headerName: t('Blance'),
       field: 'Balance',
  
      flex:1,
  
    },
    {
      headerName:  t('IsDisabled'),
     field:    'isDisbale',
      renderCell: (params) => {
          
      
  
  
        return <Switch defaultChecked style={{color:themeColor.active}} />;
      
  
      },
      flex:1,
  
    },
   
  ];
  return (
    <>

<div style={{height:"80vh",width:"75vw",margin:'20px'}}> 
      <DataGrid
    style={{height:"80vh",width:"75vw",margin:'20px', color:  themeColor.text}}
    rows={[]}
        columns={columns}
       pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10,25,50,100]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      </div>

   
    </>

  
 
  )
}

export default Customers;