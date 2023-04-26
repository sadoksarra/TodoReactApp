import './css/main.css';
import DisplayTask from './components/DisplayTask';
import Task from './components/Task'; 


function App() {
  return (
    <div className="App">
        <h1>Todo React App</h1>
        <DisplayTask></DisplayTask>  
        <Task></Task>

    </div>
  );
}

export default App;
