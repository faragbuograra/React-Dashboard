
import React from 'react'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useSelector } from 'react-redux';

import { t } from 'i18next';

  function Card({data}) {
    const themeColor = useSelector((state) => state.theme.value)
  console.log(data)
    return (
      
           <>
            <div className="featured">
              <div className="featuredItem" style={{backgroundColor:themeColor.BackGround,color:themeColor.text}}>
                <span className="featuredTitle"> {t('finishedOrders')}  </span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney" style={{  marginRight:' 150px'}}>{data?.finishedOrders}</span>
                  
                </div>
                <span className="featuredSub">-</span>
              </div>
              <div className="featuredItem"style={{backgroundColor:themeColor.BackGround,color:themeColor.text}}>
                <span className="featuredTitle">  {t('customers')}</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney" style={{  marginRight:' 200px'}}>{data?.customers}</span>
                
                </div>
                <span className="featuredSub">-</span>
              </div>
              <div className="featuredItem"style={{backgroundColor:themeColor.BackGround,color:themeColor.text}}>
                <span className="featuredTitle"> {t('delivaries')}   </span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney"  style={{  marginRight:' 200px'}}>{data?.delivaries}</span>
                
                </div>
                <span className="featuredSub">    -</span>
              </div>
             
            </div>
            <div className="featured">
              <div className="featuredItem"style={{backgroundColor:themeColor.BackGround,color:themeColor.text}}>
                <span className="featuredTitle"> {t('ordertypes')}  </span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney" style={{  marginRight:' 200px'}}>{data?.ordertypes}</span>
                 
                </div>
                {/* <ArrowDownwardIcon  style={{color:'red'}}/> */}
                <span className="featuredSub">-</span>
          
              </div>
              <div className="featuredItem"style={{backgroundColor:themeColor.BackGround,color:themeColor.text}}>
                <span className="featuredTitle"> {t('orders')}      </span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney" style={{  marginRight:' 180px'}}>{data?.orders}</span>
               
                </div>
                <span className="featuredSub">-</span>
              </div>
              <div className="featuredItem"style={{backgroundColor:themeColor.BackGround,color:themeColor.text}}>
                <span className="featuredTitle"> {t('locations')}   </span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney" style={{  marginRight:' 200px'}}>{data?.locations}</span>
                 
                </div>
                <span className="featuredSub">-</span>
              </div>
             
            </div>
           </>
          );
        }
  
  export default Card