import Logo from './images/logo.png';
import './styles/App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="todo-app">
      <img className="todo-logo" src={Logo} alt="logo" />
      <TodoList />
    </div>
  );
}

export default App;
