import React from "react";
import "../style/StepperBar.css";
import iconlogoimg from "../assets/iconlogo.png";
import Stepper from "react-stepper-horizontal";



const StepperBar = (props) => {

  return (
    <>
      <div className="logo">
        <img src={iconlogoimg} className="logoimg" alt=""/>
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
