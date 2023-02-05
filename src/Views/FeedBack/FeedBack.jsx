// import { IconButton } from '@mui/material';
// import { AndroidPushNotificationPreview, ApplePushNotificationPreview, PushNotificationPreview } from "push-notification-preview";

import React, { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';

// import { useGetFeedBackQuery, useUpateFeedBackMutation } from '../../app/Selice/FeedbackSelice';
import { Button, Switch } from '@mui/material';
import { swal } from '../../components/swal';
import { BiSave } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Loding from '../../components/lodaing/Loding';

function FeedBack() {
  const data =[]
  // const {
  //   data, error, isLoading, isFetching, isSuccess
  //  }=useGetFeedBackQuery()
   const {t} = useTranslation();
   const [pageSize, setPageSize] = React.useState(10);
   const themeColor = useSelector((state) => state.theme.value)
    const [loading,isloading] = useState(false)
  //  const [UpdateFeedBack] = useUpateFeedBackMutation()
   const columns = [
    { field: 'id', headerName: 'ID',   flex:1 },
  
    {
      field: 'type',
      headerName: t('Type'),
      flex:1,
      editable: true,
    },
    {
      field: 'description',
      headerName: t('Description'),
      flex:2,
      editable: true,
    },
    {
      field: 'status',
      headerName: t('Status'),
      flex:1,
      editable: true,
    },
  //    {
  //   field: "IsDisabled",
  //   headerName: t('IsDisabled'),
  //   flex: 1,
  //   renderCell: (params) => {
      
  //     const onClick = (e) => {
  //       if (params.row.status == 'unopend') {
  //         console.log(params.row)
  //         UpdateFeedBack({...params.row,status:'opend'}).then(
  //      swal(
  //         'success', 'success', 'success'
  //      ).then(
  //      window.location.reload())
  //         ).then(
  //         window.location.reload())
  //       };
  //       if (params.row.status == 'opend') {
  //         console.log(params.row)
  //         UpdateFeedBack({...params.row,status:'unopend'}).then(
  //      swal(
  //         'success', 'success', 'success'
  //      ).then(
  //      window.location.reload())
  //         ).then(
  //         window.location.reload())
  //       };
  
  //   }
  
  //     if (params.row.status == 'opend') {
  //       return <Switch defaultChecked onChange={() => onClick('Disactive')} />;
  //     } else {
  //       return <Switch onChange={() => onClick('Active')} />;
  //     }
  //   },
  // },
  // {
  //   field: "actionEdit",
  //   headerName:t('Save'),
  //   sortable: false,
  //   renderCell: (params) =>  {
  //     const onClick = (e) => {
  //       isloading(true)
  //       UpdateFeedBack(params.row).then(  
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

{1==1?  <Loding />: 
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
}
   
    </>

  
 
  )
}

export default FeedBack;