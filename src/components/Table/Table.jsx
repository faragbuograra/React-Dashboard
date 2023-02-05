import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';

const List = () => {
  const themeColor = useSelector((state) => state.theme.value)
const data=[]
   const {t}=useTranslation();
  return (
    <TableContainer component={Paper} className="table"  style={{backgroundColor:themeColor.mood,color:themeColor.text}} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:themeColor.mood,color:themeColor.text}}>
            <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{t('Tracking ID')}</TableCell>
            <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{t("from user")} </TableCell>
            <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{t("to user")} </TableCell>
            <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{t("from location")} </TableCell>
            <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{t("to location")} </TableCell>

            
            <TableCell className="tableCell" style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{t("order type")} </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row ,index) => (
            index < 5 ?
            <TableRow key={row.id} style={{backgroundColor:themeColor.mood,color:themeColor.text}}>
              <TableCell className="tableCell" style={{backgroundColor:themeColor.mood,color:themeColor.text}}>
                <div className="cellWrapper">
                 
                  {index+1}
                </div>
              </TableCell>
              <TableCell className="tableCell" style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{row.customer_from_name}</TableCell>
              <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{row.customer_to_name}</TableCell>

              <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{row.customer_form_location_name}</TableCell>
              <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{row.customer_to_location_name}</TableCell>
              <TableCell className="tableCell"style={{backgroundColor:themeColor.mood,color:themeColor.text}}>{row.order_type_name}</TableCell>
            </TableRow>
        :''  ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;