import React, { Component } from 'react';
import Tasks from '../components/Tasks/Tasks';
import Styles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state;

  constructor(props) {
    super(props);
    console.log('[App.js] constructor called');
    this.state = {
      tasks: [
              { id: 'fknfknvfk', title: 'Defect Fix-1', assignee: 'Kekin Chheda', status: 'Not Started' },
              { id: 'erhlefleje', title: 'Defect Fix-2', assignee: 'Tony Stark', status: 'In Progress' },
              { id: 'vhfvhfkhg', title: 'Spike-1', assignee: 'Bruce Wayne', status: 'Not Started' }
      ],
      isVisible: false
    };
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps called');
    return state;
  }



  toggleVisibilityHandler = () => {

    let visibilityFlag = this.state.isVisible;
    this.setState({ isVisible: !visibilityFlag });
  }

  taskNameChangeHandler = (event, taskId) => {
    //changing the task Name by taskId
    const tasks = this.state.tasks;
    const taskObj = tasks.find(task => task.id === taskId);
    taskObj.title = event.target.value;

    this.setState({ tasks: tasks });
  }

  deleteTaskHandler = (taskId) => {
    const tasks = this.state.tasks;
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    tasks.splice(taskIndex, 1);
    this.setState({ tasks: tasks });
  }


  render() {

    console.log('[App.js] render method called');
    let tasksDiv;
    if (this.state.isVisible) {
      tasksDiv = <Tasks tasks={this.state.tasks} changed={this.taskNameChangeHandler} />
    }
    else {
      tasksDiv = null;
    }
    return (
      <div className={Styles.App}>
        <Cockpit toggled={this.toggleVisibilityHandler}>Toggle Show</Cockpit>
        {tasksDiv}
      </div>
    )
  }
}

export default App;
