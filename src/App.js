
import './App.css';
import AddTodo from './components/AddTodo';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import TodoList from './components/TodoList';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <AddTodo />
     <TodoList />
    </div>
    </Provider>
  );
}

export default App;
