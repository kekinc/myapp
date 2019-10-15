import React from 'react';
import Task from '../Task/Task';

const tasks = (props) => {

    const tasksDiv = props.tasks.map(task => <Task
        key={task.id}
        title={task.title}
        assignee={task.assignee}
        status={task.status}
        changeNameHandler={(event)=>{props.changed(event,task.id)}} />
    );

    console.log('[Tasks.js] render method called');
    return (        
        <div>{tasksDiv}</div>
    );
};

export default tasks;