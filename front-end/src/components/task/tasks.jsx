import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './actions';
import TaskItem from './taskItem';
import TaskForm from './taskForm';

class Tasks extends Component {

    componentDidMount(){
        this.props.getTasks()
    }

    render(){
        return (
            <div>
                <h5 className="mt-4">Lista de tarefas</h5>
                <hr/>
                <nav className="nav mb-2">                
                    <button onClick={this.props.newTask} type="button" className="btn btn-outline-success btn-sm mr-1" data-toggle="modal" data-target="#newTask">Novo</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm mr-1" data-toggle="modal" data-target="#newTask">Editar</button>
                    <button onClick={this.props.deleteTask} type="button" className="btn btn-outline-danger btn-sm mr-1">Excluir</button>
                </nav>
                <div className="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Editar tarefa</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <TaskForm
                                    title={this.props.task.title}
                                    description={this.props.task.description}
                                    status={this.props.task.status}
                                    setTitle={this.props.setTitle}
                                    setDescription={this.props.setDescription}
                                    setStatus={this.props.setStatus}
                                />
                            </div>
                            <div class="modal-footer">
                                <button id="cancelButton" type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cancelar</button>
                                <button onClick={this.props.createOrUpdate} type="button" className="btn btn-primary btn-sm">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse mb-2" id="newTask">
                    <div className="card card-body">
                        
                    </div>
                </div>
                <div className="list-group">
                    {
                        this.props.tasks.map((task, index) =>
                            <TaskItem
                                key={index}
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                creation={task.creation}
                                edition={task.edition}
                                setTask={this.props.setTask}
                                task={this.props.task}
                            />
                        )
                    }
                </div>                
            </div>            
        )
    }
}

const mapStateToProps = state => { return { tasks: state.tasks, task: state.taskReducer } }
const mapDispatchToProps = dispatch => (bindActionCreators(taskActions, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Tasks)