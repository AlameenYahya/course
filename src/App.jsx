import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addToList = () => {
    if (inputValue.trim().length === 0) {
      alert('Cannot add an empty todo');
      return;
    }
    setTasks([...tasks, { value: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTaskCompletion = (index) => {
    let newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const clearList = () => {
    setTasks([]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add todo" 
      />
      <button className="btn-add" onClick={addToList}>
        Click me to add todo
      </button>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={task.completed ? { textDecoration: 'line-through' } : {}}>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTaskCompletion(index)}
              />
              {task.value}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
        {tasks.length > 0 && (
      <button className="btn-clear" onClick={clearList}>
        Clear List
      </button>
        )}
      </div>
    </div>
  );
}

export default App;
