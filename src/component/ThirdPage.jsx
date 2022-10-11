import React from "react";
import "./Common.css";
import StepperBar from "./StepperBar";
import {useNavigate} from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import "./ThirdPage.css";
import {useState} from "react"



const ThirdPage = () => {

  const [marked, setMarked] = useState(true);
    const handleMark = () => {
    setMarked(!marked);
  };

  const navigate = useNavigate()

  const goTo = () => {
    navigate("/forth")
  }

  
    return (
        <div className="container-main">
    <div className="logo"></div>
   <StepperBar step={{num:"2"}}/>
    <div className="header" >
      <h3 >How are you planning to use Eden?</h3>
      <p >we'll streamline your setup experience accordingly.</p>
    </div>

    <div className="form">
        <div className="form-group select-option">
          <div
            className={marked ? "option marked" : "option"}
            onClick={handleMark}
          >
            <div className="option-icon">
              <BsFillPersonFill fontSize="1.6em" />
            </div>
            <div className="option-H">For myself</div>
            <div className="option-D">
              write better. Think more clearly stay organise.
            </div>
          </div>

          <div
            className={marked ? "option" : "option marked"}
            onClick={handleMark}
          >
            <div className="option-icon">
              <RiTeamFill fontSize="1.6em" />
            </div>
            <div className="option-H">With my team</div>
            <div className="option-D">
              Wikis, docs, tasks & project, all in one place.
            </div>
          </div>
        </div>
      </div>


    <div className="footer">
      <button className="btn" onClick={goTo}>Create Workspace</button>
    </div>
  </div>

    )
}

export default ThirdPage