import React from "react";
import Stepper from "react-stepper-horizontal";
import "./StepperBar.css";
import mying from "../assets/iconlogo.png";

const StepperBar = (props) => {
  console.log(props);
  return (
    <>
      <div className="logo">
        <img src={mying} className="logoimg" />
      </div>
      <div className="stepper">
        <Stepper
          steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
          activeStep={+props.step.num}
        />
      </div>
    </>
  );
};

export default StepperBar;
