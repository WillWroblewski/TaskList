import React from 'react'

const TaskForm = ({title, description, status, setTitle, setDescription, setStatus}) => {
    return (
        <div>
            <div className="form-group">
                <label for="title">Título</label>
                <input 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text" 
                    className="form-control form-control-sm" 
                    id="title" 
                />
            </div>            
            <div className="form-group">
                <label for="description">Decrição</label>
                <textarea 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="form-control form-control-sm" 
                    id="description" 
                    rows="2">
                </textarea>
            </div>
            <div className="form-group">
                <label for="status">Status</label>
                <select 
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    className="form-control form-control-sm" 
                    id="status"
                >
                    <option value="CREATED">Criado</option>
                    <option value="ENDED">Concluído</option>                    
                </select>
            </div>            
        </div>
    )
}

export default TaskForm