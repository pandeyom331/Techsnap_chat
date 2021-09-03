import './App.css';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginIn from './components/Loginin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         <Route path="/" component={SignUp} exact />
         <Route path="/LoginIn" component={LoginIn} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
