import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStateValue} from "./StateProvider"

function ChatMain() {

  const [{user}] = useStateValue();

  return (
    // BEM naming convention
    <div className="App">
      {!user ? (<Login />) : 
        (
        <div div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
        )
      }
    </div>
  );
}

export default ChatMain;
