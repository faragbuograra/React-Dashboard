import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { useGetShowStatisticsQuery } from '../../app/Selice/ShowStatisticsSelice';
import Card from '../../components/Card/Card'
import Featured from '../../components/Featured/Featured';
import { useSelector } from 'react-redux';
import List from '../../components/Table/Table';
import Chart from '../../components/Chart/Chart';
import { useTranslation } from 'react-i18next';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




function Dashboard() {
  const data =[]
  // const {
  //   data , error, isLoading, isFetching, isSuccess
  //  }=useGetShowStatisticsQuery()
const {t} = useTranslation();
  const themeColor = useSelector((state) => state.theme.value)
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: t('Last 6 Months (Orders)'),
      },
    },
  };
  
  let labels = [];
if(
  data?.Chart2?.length > 0
){
  labels = data?.Chart2.map((item) => Object.keys(item));
}

  const data2 = {
    labels,
    datasets: [
      {
        label: "ماشاء الله",
        // data: data?.Chart2.map((item) => Object.values(item)),
        backgroundColor: themeColor.active,
        
      },
     
    ],
  };
  
  return (
    <div style={{width:'80vw' }}>
  
    <Card data={data} />
    <div  className='flex'>
<div className="w400 mx-4 ">

<div className="chart  " style={{backgroundColor:themeColor.mood}}>
<Bar data={data2} options={options}  />
</div>
<div className="my-1" >
<Chart title={t("Last 6 Months (Revenue)")} aspect={2 / 1}  data={data} />
</div>

</div>
<div className="my-5 mx-3">

<Featured data={data} />


</div>
    </div>
    <br></br>
<div className='mll-1'>
<List/>
</div>
    </div>

  
 
  )
}

export default Dashboard