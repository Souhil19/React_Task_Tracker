
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import React from 'react';
import {useState} from 'react';

function App() {
  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {
        id:1,
        text: 'Go to Gym',
        day: '01 June 2022',
        reminder: true,
    },
    {
        id:2,
        text: 'Go to School',
        day: '01 June 2022',
        reminder: true,
    }
])

  const addTask = (task)=>{
    const id= Math.floor(Math.random()*10000)+1
    const newTask={id, ...task}
    setTasks([...tasks, newTask])
  } 

  const deleteTask = (id)=> {
    //console.log('task',id)
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  const toggleReminder = (id)=> {
    console.log('tassk', id)
    setTasks(
      tasks.map(
        (task)=> task.id ===id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  const name ='Souhil';
  const x= true;

  return (
    <div className='container'>   
      <Header onAdd={ ()=> setShowAddTask(!showAddTask) } showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={ addTask}/>}      
      <h1>{ x ? name : 'no'}*3</h1>
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No Tasks for today'}
    </div>

  );
}

/* class App extends React.Component{
  render(){
    return <h1>React.Component</h1>
  }
} */

export default App;
