import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { swal } from "../../components/swal";
const NewOrderType = () => {
  const themeColor = useSelector((state) => state.theme.value);
const [
    isloading,
    setisloading,
] =useState(false)
const error=[]

  const { t } = useTranslation();
  console.log(error?.error?.data);
  function Onclick(params) {
    // setisloading(true)
    // console.log(state);
    // PostOrderType(state)
    //   .unwrap()
    //   .then((res) => swal("success", "success", res.status)
    //   .then((res) => {
    //     setisloading(false)
    //   }))
 
    //   .catch((error) => {
    //     console.log(error);
    //     if (error) {
    //       swal("error", "error", error?.data?.message);
    //       setisloading(false)
    //     }
    //   });
  }
  const [state, setState] = React.useState({});
  return (
    <div style={{ height: "90vh", width: "70vw", margin: "20px" }}>
      <Form>
        <FormGroup>
          <Label style={{ color: themeColor.text }}>{t("Name")}</Label>

          <Input
            className="mb-3"
            type="text"
            name="Name"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          ></Input>
          <h6 className="red">{error?.error?.data?.errors.name}</h6>
          <Label style={{ color: themeColor.text }}>{t("Price")}</Label>

          <Input
            onInput={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }}
            name="price"
            onChange={(e) => setState({ ...state, price: e.target.value })}
            className="mb-3"
            type="text"
          ></Input>
          <h6 className="red">{error?.error?.data?.errors.price}</h6>
       
        </FormGroup>

       
        <Button
          style={{ background: themeColor.active, float: "left" }}
          disabled={isloading}
          onClick={(e) => Onclick()}
        >
          New Order Type
        </Button>
      </Form>
    </div>
  );
};

export default NewOrderType;
