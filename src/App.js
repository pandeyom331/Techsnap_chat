import './App.css';
import SignUp from './components/SignUp';
import { Route, Switch} from 'react-router-dom';
import LoginIn from './components/Loginin';
import GroupSection from './components/Groups/GroupSection';
import ChatMain from './components/Chat/App'
import { HashRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
         <Route path="/signup" component={SignUp} exact />
         <Route path="/" component={LoginIn} exact />
         <Route path="/welcome" component={GroupSection} exact />
         <Route path="/chat" component={ChatMain} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
