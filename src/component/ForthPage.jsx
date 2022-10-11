import React from "react";
import "./Common.css";
import StepperBar from "./StepperBar";
import "./ForthPage.css";
import { useNavigate } from "react-router-dom";

const ForthPage = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/resultData");
  };

  return (
    <div className="container-main">
      <div className="logo"></div>
      <StepperBar step={{ num: "3" }} />

      <div className="circlediv">
        <p>✓</p>
      </div>

      <div className="header">
        <h3>Congratulations, Eren!</h3>
        <p>You have completed onboarding, you can start using the Eden!</p>
      </div>

      <div className="footer">
        <button className="btn" onClick={goTo}>
          Launch Eden
        </button>
      </div>
    </div>
  );
};

export default ForthPage;
