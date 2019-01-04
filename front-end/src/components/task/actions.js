import * as types from './const';
import axios from 'axios';
import * as apiConfig from '../../config/api'

export const deleteTask = () => (dispatch, getState) => {
    if (getState().taskReducer.id){
        axios.delete(`${apiConfig.url}/${getState().taskReducer.id}`)
        .then(
            () => {
                dispatch(getTasks())
                dispatch({ type: types.GET_ERRORS, payload: [] })
            }
        )    
        .catch(
            errors => {
                dispatch({ type: types.GET_ERRORS, payload: errors.response.data.errors })
            }
        )    
    }        
}

export const newTask = () => dispatch => {
    dispatch({ type: types.SET_TASK })
    dispatch({ type: types.GET_ERRORS, payload: [] })
}

export const setTitle = value => {
    return { type: types.SET_TITLE, payload: value }
}

export const setDescription = value => {
    return { type: types.SET_DESCRIPTION, payload: value }
}

export const setStatus = value => {    
    return { type: types.SET_STATUS, payload: value }        
}

export const createOrUpdate = () => (dispatch, getState) => {
    const task = getState().taskReducer
    if (task.id){        
        task.edition = new Date()
        axios.put(apiConfig.url, task)
        .then(
            () => {
                document.querySelector('#cancelButton').click()                
                dispatch(getTasks())
                dispatch({ type: types.GET_ERRORS, payload: [] })
            }                
        )
        .catch(
            errors => {
                dispatch({ type: types.GET_ERRORS, payload: errors.response.data.errors })
            }
        )        
    } else {
        axios.post(apiConfig.url, task)
        .then(
            () => {
                dispatch(getTasks())
                document.querySelector('#cancelButton').click()
                dispatch({ type: types.GET_ERRORS, payload: [] })
            }
        )
        .catch(
            errors => {
                dispatch({ type: types.GET_ERRORS, payload: errors.response.data.errors })
            }
        )        
    }        
}

export const setTask = id => (dispatch, getState) => {
    dispatch({ type: types.SET_TASK, payload: getState().tasks.find(t => t.id === id) })
}

export const getTasks = () => dispatch => {
    axios.get(apiConfig.url)
    .then(
        response => {
            dispatch({ type: types.GET_TASKS, payload: response.data.data })
        }
    )   
    .catch(
        errors => {
            
        }
    )
}