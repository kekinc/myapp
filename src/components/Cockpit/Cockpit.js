import React from 'react';

const cockpit = (props)=>{

    return (
        <div>
            <button onClick={props.toggled}>{props.children}</button>
        </div>
    )

}

export default cockpit;