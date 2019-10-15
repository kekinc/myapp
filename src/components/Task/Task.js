import React from 'react';
import Styles from './Task.css';

const task = (props)=>{

    console.log('[Task.js] rendering')
    return (
        <div className={Styles.Task}>
            <p>{props.title}</p>
            <p>{props.assignee}</p>
            <p>{props.status}</p>
            <p><input type="text" onChange={props.changeNameHandler} value={props.title} /></p>
        </div>
    );
}

export default task;