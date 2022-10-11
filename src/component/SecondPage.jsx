import React from "react";
import "./Common.css";
import StepperBar from "./StepperBar";
import {useNavigate} from "react-router-dom";
import "./SecondPage.css";
import {useState} from "react";
import {addWorkspacename ,addWorkspaceurl} from "../redux/action";
import {useDispatch,useSelector} from "react-redux";

const SecondPage = () => {

  const[workspacename,setWorkspacename] = useState("")
  const[url,setURL] = useState("")

  
  
  const dispatch = useDispatch()


  const navigate = useNavigate()

  const goTo = () => {
    if(workspacename &&url ){
      dispatch(addWorkspacename(workspacename))
      dispatch(addWorkspaceurl(url))
      navigate("/third")
    }
    
  }

  return (
    <div className="container-main">
      {/* <div className="logo"></div> */}
      <StepperBar step={{num:"1"}} />

      <div className="header" >
        <h3 >
          Let's set up a home for all your work
        </h3>
        <p >
          You can always create another workspace later.
        </p>
      </div>

      <div className="form">
        <div className="form-group">
          <div className="label">Workspace Name</div>
          <input
            type="text"
            id="name"
            placeholder="Eden"
            onChange={(e)=>setWorkspacename(e.target.value)}
          
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
              onChange={(e)=>setURL(e.target.value)}
            />
          </div>
        </div>
        </div>
        


      <div className="footer">
        <button className="btn" onClick={goTo}>Create Workspace</button>
      </div>
    </div>
  );
};

export default SecondPage;
