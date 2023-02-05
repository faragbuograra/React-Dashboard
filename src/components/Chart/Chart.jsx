
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";




const Chart = ({ aspect, title ,data}) => {
  let data1 =[];

    if( data?.Chart
      !=undefined ){
      data?.Chart?.map((x)=>{
       data1.push({
         Total :parseInt(Object.values(x)),
          name    :(Object.keys(x)).toString()
       })
      })
    }

    console.log(data1)
  const themeColor = useSelector((state) => state.theme.value)
  return (
    <div className="chart" style={{backgroundColor:themeColor.mood}} >
      <div className="title" style={{color:themeColor.text}}>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={200}
          data={data1}
        
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={themeColor.active} stopOpacity={0.8} />
              <stop offset="95%" stopColor={themeColor.active} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke={themeColor.active}
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;