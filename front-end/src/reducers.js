import { combineReducers } from 'redux';
import { taskReducer, tasks } from './components/task/reducer'

const Reducers = combineReducers({
    taskReducer,
    tasks
})

export default Reducers