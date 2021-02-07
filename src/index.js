import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './bootstrap.css';
import {
  AccountForm,
  PostList,
  Profile,
} from './components';


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState({});
  //console.log('token: ', token);
  


  return <>
    <h1>
      Strangers Things
    </h1>
    {user.username && <div>Hello {user.username}<button type="button" class="btn btn-warning" onClick={() => {
      setUser({})
      setToken('')
      localStorage.removeItem('token')
    }}>Logout</button></div> }
   
    <ul class="nav nav-tabs">
      <li class="nav-items">
        <Link class="nav-link" href="#" to='/login'>Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="#" to='/posts'>Post</Link>
      </li>
      <li class="nav-item">
        {token ? <Link class="nav-link" href="#" to='/profile'>Profile</Link>: ''}
      </li>
    </ul>
    
    <Route path="/login">
      <AccountForm type={'login'} setToken={setToken} setUser={setUser}/>
    </Route>
    <Route path="/register">
      <AccountForm type={'register'} setToken={setToken} setUser={setUser}/>
    </Route>
    <Route path= '/posts'>
    
        <PostList token={token}/>
    </Route>
    <Route path='/profile'>
        <Profile user={user}/>
    </Route>
  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);