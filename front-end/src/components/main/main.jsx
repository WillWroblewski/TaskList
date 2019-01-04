import React from 'react';
import Tasks from '../task/tasks';

const Main = () => {
    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col">
                    <Tasks />        
                </div>    
            </div>
        </div>
    )
}

export default Main