
import './App.css';
import AddTodo from './components/AddTodo';
import { Provider } from 'react-redux';
import {store} from './redux/store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <AddTodo />
    </div>
    </Provider>
  );
}

export default App;
