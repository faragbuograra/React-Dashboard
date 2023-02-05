
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Orders() {
  const [pageSize, setPageSize] = React.useState(10);
  const themeColor = useSelector((state) => state.theme.value)
   const {t} = useTranslation();
   const data =[]
  const columns = [
    { field: 'id', headerName: 'ID',   flex:1 ,hide:true },
    {
      field: 'customer_from_name',
      headerName: t('customer from'),
      flex:1,
    
    },
    {
      field: 'customer_to_name',
      headerName: t('customer to'),
      flex:1,
    
    },
  
    {
      field: 'order_price',
      headerName: t('order price'),
  
      flex:1,
    
    },
  
    {
      field: 'customer_form_location_name',
      headerName: t('location from'),
     
      flex:1,
    
    },
    {
      field: 'customer_to_location_name',
      headerName: t('location to'),
     
      flex:1,
    
    },
    {
      field: 'order_type_name',
      headerName: t('order type'),
     
      flex:1,
    
    },
    {
      field: 'order_status',
      headerName: t('order status'),
     
      flex:1,
    
      renderCell: (params) => {
          
      
  
  if(params.row.order_status =='1'){
    return <h6 className={'bg-color'} style={{color:'green',background:'rgba(0, 128, 0, 0.151)'}} >New</h6>;
  }else if(params.row.order_status =='2'){
    return <h6 className={'bg-color'} style={{color:'goldenrod',background:'rgba(189, 189, 3, 0.103'}} >In Progress</h6>;
  }else if(params.row.order_status =='3'){
    return <h6 className={'bg-color'} style={{color:'rgba(0, 151, 255, 1)',background:'rgba(0, 151, 255, 0.5)'}} >
      On The Way</h6>;
  }else if(params.row.order_status =='4'){
    return <h6 className={'bg-color'} style={{color:'rgba(132,68,255, 1)',background:'rgba(132,68,255, 0.2)'}} >
      Delivered</h6>;
  }else if(params.row.order_status =='5'){
    return <h6 className={'bg-color'} style={{color:'rgba(19,51,49,1)',background:'rgba(19,51,49,0.5)'}} >
      Completed</h6>; 
  }else if(params.row.order_status =='7'){
    return <h6 className={'bg-color'} style={{color:'rgba(255,0,0,1)',background:'rgba(255,0,0,0.5)'}} >
      Canceled</h6>;  
                }                                                                
      
  
      },
    },
    // {
    //   field: 'isDisbale',
    //   headerName: 'isDisbale',
    //   renderCell: (params) => {
          
      
  
  
    //     return <Switch  defaultChecked style={{color:themeColor.active}} />;
      
  
    //   },
    //   flex:1,
    
    // },
    // {
    //   field: 'View',
    //   headerName: 'View',
    //   editable: false,
    //   flex:1,
    //   renderCell: (params) => {
          
      
  
  
    //     return <h5  style={{color:themeColor.active}} >Details</h5>;
      
  
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



export default Orders;