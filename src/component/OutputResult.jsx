import {useDispatch,useSelector} from "react-redux";

const OutputResult = () => {

    const outputResult = useSelector((state)=>state)

    console.log(outputResult)
    
    return (
        <div className="opdata">
                <h1 className="userdetails">User Details</h1>
                <h4>FullName <p className="resultop">{outputResult.firstName}</p></h4>
                <h4 className="resulthead">DisplayName <p className="resultop">{outputResult.displayName}</p></h4>
                <h4 className="resulthead">Workspace Name <p  className="resultop">{outputResult.workspaceName}</p></h4>
                <h4 className="resulthead">Workspace URL <p  className="resultop">{outputResult.workspaceUrl}</p></h4>
                
           
        </div>
    )
}

export default OutputResult