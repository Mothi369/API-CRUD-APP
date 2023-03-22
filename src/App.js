
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Crud from "./CRUD"
import "react-toastify/dist/ReactToastify.css"
import Update from './CRUD/Update';

import Login from './CRUD/Login';
import { useStateValue } from './CRUD/StateProvider';
import { useState } from 'react';

function App() {
  //const [user,setUser]=useState(null)
  const [{user},dispatch]=useStateValue()
  return (
    <div className="App">
      {!user ? <Login/>:(
      
      <div className='app_body'>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={Crud} />
          <Route path="/update/:id" component={Update} />
        </Switch>
      </Router>
    </div>

      )}

    </div >
  );
}

export default App;
