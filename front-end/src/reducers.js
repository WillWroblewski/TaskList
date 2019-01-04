import { combineReducers } from 'redux';
import { taskReducer, tasks, taskErrors } from './components/task/reducer'

const Reducers = combineReducers({
    taskReducer,
    tasks,
    taskErrors
})

export default Reducers