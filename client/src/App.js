import Header from './components/Header';
import ListForm from './components/ListForm';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Route exact path='/'>
          <ListForm></ListForm>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </div>
    </Router>
  );
}

export default App;
