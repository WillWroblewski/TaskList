import React from 'react'

const TaskForm = ({title, description, status, setTitle, setDescription, setStatus, errors}) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="title">Título</label>
                <input 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text" 
                    className="form-control form-control-sm" 
                    id="title" 
                />
            </div>            
            <div className="form-group">
                <label htmlFor="description">Decrição</label>
                <textarea 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="form-control form-control-sm" 
                    id="description" 
                    rows="2">
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select                     
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control form-control-sm" 
                    id="status"
                >
                    <option value="CREATED">Criado</option>
                    <option value="ENDED">Concluído</option>                    
                </select>
            </div>  
            {
                errors.length 
                ? 
                    <div className="alert alert-danger" role="alert">                        
                        {
                            errors.map(error =>
                                <p className="mb-0">{error}</p>       
                            )
                        }                        
                    </div>                  
                : null
            }        
        </div>
    )
}

export default TaskForm