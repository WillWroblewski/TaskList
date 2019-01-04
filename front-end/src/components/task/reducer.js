import * as types from './const'

const taskStatus = {
    CREATED: 'CREATED',
	ENDED: 'ENDED'	
}

const INITIAL_STATE = {
    id: 0,
    title: '',
    description: '',    
	status: taskStatus.CREATED,
	creation: new Date(),
	edition: null,
	conclusion: null
}

export const taskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SET_TASK:
            return action.payload ? action.payload : INITIAL_STATE
        case types.SET_TITLE:
            return {
                ...state,
                title: action.payload
            }           
        case types.SET_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case types.SET_STATUS:
            return {
                ...state,                
                status: action.payload === taskStatus.ENDED 
                    ? taskStatus.ENDED 
                    : taskStatus.CREATED
            }        
        default:
            return state            
    }
}

export const tasks = (state = [], action) => {
    switch(action.type){
        case types.GET_TASKS:
            return action.payload          
        default:
            return state
    }
}

export const taskErrors = (state = [], action) => {
    switch(action.type){
        case types.GET_ERRORS:
            return action.payload          
        default:
            return state
    }
}