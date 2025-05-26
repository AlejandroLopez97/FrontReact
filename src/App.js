import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import  Example  from './hooks/Example';
import MiComponenteConContexto  from './hooks/Example2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Example></Exaple> */}
        <MiComponenteConContexto></MiComponenteConContexto>
      </header>
    </div>
  );
}

export default App;
