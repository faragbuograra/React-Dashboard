import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar ,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Featured = ({data}) => {
  const {t,i18n} = useTranslation();
  const themeColor = useSelector((state) => state.theme.value)
  
  return (
    <div className="featured0" style={{backgroundColor:themeColor.mood}}>
      <div className="top1">
        <h1 className="title1">{t("FeedBack")}</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom1">
        <div className="featuredChart1">
          <CircularProgressbar value={parseInt((data?.openfeedbacks/data?.feedbacks)*100)} text={parseInt((data?.openfeedbacks/data?.feedbacks)*100)+"%"} strokeWidth={5} styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    //pathTransition: 'none',

    // Colors
    pathColor: themeColor.active,
    textColor: themeColor.active,
    trailColor: themeColor.main,
  })} />
        </div>
        <p className="title1">{t('Total Open FeedBack')}</p>
        <p className="amount1" style={{color:themeColor.text}}>{data?.openfeedbacks}</p>
      <br></br>
      
        {/* <div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div><div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div>
        <div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div>
        <div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="top1">
        <h1 className="title1">{t("finishedOrders")}</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom1">
        <div className="featuredChart1">
          <CircularProgressbar value={parseInt((data?.finishedOrders/data?.orders)*100)} text={parseInt((data?.finishedOrders/data?.orders)*100)+"%"} strokeWidth={5} styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    //pathTransition: 'none',

    // Colors
    pathColor: themeColor.active,
    textColor: themeColor.active,
    trailColor: themeColor.main,
  })} />
        </div>
        <p className="title1">{t('Total finish orders')}</p>
        <p className="amount1" style={{color:themeColor.text}}>{data?.finishedOrders}</p>
      
        {/* <div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div><div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div>
        <div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div>
        <div className="summary1">
          <div className="item1">
            <div className="itemTitle1">Target</div>
            <div className="itemResult1 negative1">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
          <div className="item1">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult1 positive1">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount1">$12.4k</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;