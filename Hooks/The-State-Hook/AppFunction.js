import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  // hook your code up here ;)
  const [newTast, setNewTask] = useState({})
  const [allTasks, setAllTasks] = useState([])

  const handleChange = ({target}) => {
    const {name, value} = target
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      id: Date.now()
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newTask.title) return
    setAllTasks((prevAllTasks) => ([
      newTask,
      ...prevAllTasks
    ]))
  }

  const handleDelete = (taskIdToRemove) => {
    setAllTasks()
  }

  handleDelete(taskIdToRemove){
    this.setState((prevState) => ({
      ...prevState,
      allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
    }));
  }
}
