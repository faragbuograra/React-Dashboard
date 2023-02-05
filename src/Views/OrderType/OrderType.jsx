// import { IconButton } from '@mui/material';
// import { AndroidPushNotificationPreview, ApplePushNotificationPreview, PushNotificationPreview } from "push-notification-preview";

import React, { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';

import { Button, Switch } from '@mui/material';
import { swal } from '../../components/swal';
import { BiSave } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function OrderType() {
  const [pageSize, setPageSize] = React.useState(10);
 const  data =[]
   const themeColor = useSelector((state) => state.theme.value);
   const {t} = useTranslation();
    const [loading,isloading] = useState(false)
  //  const [UpdateOrderType] = useUpateOrderTypeMutation()
   const columns = [
    { field: 'id', headerName: 'ID',   flex:1 },
  
    {
      field: 'name',
      headerName: t('Name'),
      flex:1,
      editable: true,
    },
    {
      field: 'price',
      headerName: t('Price'),
      flex:1,
      editable: true,
    },
  
  //    {
  //   field: "IsDisabled",
  //   headerName: t('IsDisabled'),
  //   flex: 1,
  //   renderCell: (params) => {
      
  //     const onClick = (e) => {
  //       if (params.row.IsDisabled == '0') {
  //         console.log(params.row)
  //         UpdateOrderType({...params.row,IsDisabled:'1'}).then(
  //      swal(
  //         'success', 'success', 'success'
  //      )
  //         )
  //       };
  //       if (params.row.IsDisabled == '1') {
  //         console.log(params.row)
  //         UpdateOrderType({...params.row,IsDisabled:'0'}).then(
  //      swal(
  //         'success', 'success', 'success'
  //      )
  //         )
  //       };
  
  //   }
  
  //     if (params.row.IsDisabled == '0') {
  //       return <Switch defaultChecked onChange={() => onClick('Disactive')} />;
  //     } else {
  //       return <Switch onChange={() => onClick('Active')} />;
  //     }
  //   },
  // },
  // {
  //   field: "actionEdit",
  //   headerName: t("Save"),
  //   sortable: false,
  //   renderCell: (params) => {
  //     const onClick = (e) => {
  //       isloading(true)
  //       UpdateOrderType(params.row).then(  
  //           swal(
  //             'success', 'success', 'success'
  //           )
  //       )
  //       isloading(false)
  //     };

  //     return !loading?<Button onClick={onClick}><BiSave /></Button>:'saving';
  //   },
  // },
  
  
  ];
 
  return (
    <>

      
<div style={{height:"80vh",width:"75vw",margin:'20px'}}> 
      <DataGrid
      style={{height:"80vh",width:"75vw",margin:'20px',color:themeColor.text}}
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

export default OrderType;