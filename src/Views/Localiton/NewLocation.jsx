import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { swal } from "../../components/swal";
const NewLocation = () => {
  const themeColor = useSelector((state) => state.theme.value);
  // const [PostLocation, error] = usePostLocationMutation();
  const { t } = useTranslation();
  const error =[]
  console.log(error?.error?.data);
 function Onclick(params) {
  //   console.log(state);
  //   PostLocation(state)
  //     .unwrap()
  //     .then((res) => swal("success", "success", res.status))

  //     .catch((error) => {
  //       console.log(error);
  //       if (error) {
  //         swal("error", "error", error?.data?.message);
  //       }
  //     });
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
          <Label style={{ color: themeColor.text }}>{t("Lang")}</Label>

          <Input
            onInput={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }}
            name="Lang"
            onChange={(e) => setState({ ...state, lang: e.target.value })}
            className="mb-3"
            type="text"
          ></Input>
          <h6 className="red">{error?.error?.data?.errors.lang}</h6>
          <Label style={{ color: themeColor.text }}>{t("Lat")}</Label>

          <Input
            // onInput={(e) => {
            //   e.target.value = e.target.value
            //     .replace(/[^0-9.]/g, "")
            //     .replace(/(\..*?)\..*/g, "$1");
            // }}
            className="mb-3"
            type="text"
            name="Lat"
            onChange={(e) => setState({ ...state, lat: e.target.value })}
          ></Input>
          <h6 className="red">{error?.error?.data?.errors.lat}</h6>

          <Label style={{ color: themeColor.text }}>{t("Point")}</Label>

          <Input
            onInput={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }}
            className="mb-3"
            type="text"
            name="Point"
            onChange={(e) => setState({ ...state, point: e.target.value })}
          ></Input>
        </FormGroup>

        <h6 className="red">{error?.error?.data?.errors.point}</h6>
        <Button
          style={{ background: themeColor.active, float: "left" }}
          onClick={(e) => Onclick()}
        >
          New Location
        </Button>
      </Form>
    </div>
  );
};

export default NewLocation;
