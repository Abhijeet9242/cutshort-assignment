import React from "react";
import "../style/Common.css";
import "../style/SecondPage.css";
import StepperBar from "./StepperBar";
import { useNavigate } from "react-router-dom";
import { addWorkspacename, addWorkspaceurl } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const SecondPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {workspaceName} = useSelector((state) => state);

  const goTo = () => {
   if(workspaceName) {
      navigate("/third");
    }
  };

  return (
    <div className="container-main">
      <StepperBar step={{ num: "1" }} />

      <div className="header">
        <h3>Let's set up a home for all your work</h3>
        <p>You can always create another workspace later.</p>
      </div>

      <div className="form">
        <div className="form-group">
          <div className="label">Workspace Name</div>
          <input
            type="text"
            id="name"
            placeholder="Eden"
            onChange={(e) =>dispatch(addWorkspacename(e.target.value))}
          />
        </div>
        <div className="form-group">
          <div className="label">
            Workspace URL <span style={{ color: "#a19f9f" }}>(optional)</span>
          </div>

          <div className="domain-div">
            <div className="fix-domain">www.eden.com/</div>
            <input
              type="text"
              id="displayName"
              placeholder="Example"
              onChange={(e) =>dispatch(addWorkspaceurl(e.target.value))}
            />
          </div>
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

export default SecondPage;
