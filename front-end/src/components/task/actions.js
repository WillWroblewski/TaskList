import * as types from './const';
import axios from 'axios';
import * as apiConfig from '../../config/api'

export const deleteTask = () => (dispatch, getState) => {
    if (getState().taskReducer.id){
        axios.delete(`${apiConfig.url}/${getState().taskReducer.id}`)
        .then(
            () => {
                dispatch(getTasks())
            }
        )    
        .catch(
            errors => {

            }
        )    
    }        
}

export const newTask = () => {
    return { type: types.SET_TASK }
}

export const setTitle = value => {
    return { type: types.SET_TITLE, payload: value }
}

export const setDescription = value => {
    return { type: types.SET_DESCRIPTION, payload: value }
}

export const setStatus = value => {
    if (value === ''){
        return { type: types.SET_STATUS, payload: value }
    }    
}

export const createOrUpdate = () => (dispatch, getState) => {
    const task = getState().taskReducer
    task.id 
    ? axios.put(apiConfig.url, task).then(() => {dispatch(getTasks())}).catch(errors => {})
    : axios.post(apiConfig.url, task).then(() => {dispatch(getTasks())}).catch(errors => {})
    document.querySelector('#cancelButton').click()
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
            console.log(errors)
        }
    )
}