import React from "react";
import "../style/Common.css";
import StepperBar from "./StepperBar";
import { useNavigate } from "react-router-dom";
import { addFirstname, addDisplayname } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const FirstPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstName, displayName } = useSelector((state) => state);

  const goTo = () => {
    if ((firstName, displayName)) {
     navigate("/second");
    }
  };

  return (
    <div className="container-main">
      <StepperBar step={{ num: "0" }} />

      <div className="header">
        <h3>Welcome! First things first...</h3>
        <p>You can always change them later.</p>
      </div>

      <div className="form">
        <div className="form-group">
          <div className="label">First Name</div>
          <input
            type="text"
            id="name"
            placeholder="Steve Jobs"
            onChange={(e) => dispatch(addFirstname(e.target.value))}
          />
        </div>
        <div className="form-group">
          <div className="label">Display Name</div>
          <input
            type="displayName"
            id="text"
            placeholder="Steve"
            onChange={(e) => dispatch(addDisplayname(e.target.value))}
          />
        </div>
      </div>

      <div className="footer">
        <button className="btn" onClick={goTo}>
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
