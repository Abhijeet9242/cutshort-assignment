import {
  FIRST_NAME,
  DISPLAY_NAME,
  WORKSPACE_NAME,
  WORKSPACE_URL,
  PLANNING,
} from "./actionType";

const init = {
  firstName: "",
  displayName: "",
  workspaceName: "",
  workspaceUrl: "",
  planning: "",
};

export const reducer = (state = { init }, action) => {
  switch (action.type) {
    case FIRST_NAME:
      return { ...state, firstName: action.payload };
    case DISPLAY_NAME:
      return { ...state, displayName: action.payload };
    case WORKSPACE_NAME:
      return { ...state, workspaceName: action.payload };
    case WORKSPACE_URL:
      return { ...state, workspaceUrl: action.payload };
    case PLANNING:
      return { ...state, planning: action.payload };
    default:
      return state;
  }
};
