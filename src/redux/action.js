import { FIRST_NAME,DISPLAY_NAME,WORKSPACE_NAME,WORKSPACE_URL,PLANNING } from "./actionType"

export const addFirstname = (payload) => {
    return {
        type:FIRST_NAME,
        payload:payload
    }
}

export const addDisplayname = (payload) => {
    return {
        type:DISPLAY_NAME,
        payload:payload
    }
}

export const addWorkspacename = (payload) => {
    return {
        type:WORKSPACE_NAME,
        payload:payload
    }
}

export const addWorkspaceurl = (payload) => {
    return {
        type:WORKSPACE_URL,
        payload:payload
    }
}

export const addPlanning = (payload) => {
    return {
        type:PLANNING,
        payload:payload
    }
}