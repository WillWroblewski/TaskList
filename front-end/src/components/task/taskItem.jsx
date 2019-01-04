import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR');

const TaskItem = ({id, title, description, creation, edition, setTask, task}) => {
    return (
        <div           
            onClick={() => setTask(id)} 
            className={`list-group-item list-group-item-action flex-column align-items-start mb-2 ${task.id === id ? 'active' : ''}`}
            style={{cursor: 'pointer'}}
        >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{title}</h5>
                <small>{`Criado em: ${moment(creation).format('DD/MM/YYYY')}`}</small>
            </div>
            <p className="mb-1">
                {description}
            </p>
            <small>
                {`Ultima alteração: ${edition ? moment(edition).format('DD/MM/YYYY') : 'Nunca'}`}
            </small>
        </div>        
    )
}

export default TaskItem