import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import UserProfilePage from './component/UserProfilePage';
import Axios from 'axios';

function App() {

  const [currentUser, setCurrentUser] = useState({})

  const updateUser = newUser =>{
    setCurrentUser(newUser)
  }

  useEffect(()=>{
    const jwtToken = localStorage.getItem('jwt')

    Axios.get('https://insta.nextacademy.com/api/v1/users/me',{
      headers:{
        Authorization: `Bearer ${jwtToken}`
      }
    })
    .then(response=>{
      console.log(response.data)

      setCurrentUser(response.data)
    })
    .catch(error=>{
      console.log(error.response)
    })
  },[])

  return (
    <>
      <Navbar currentUser={currentUser} updateUser={updateUser} />

      <Switch>
        <Route exact path="/">
        <Homepage currentUser={currentUser} />
        </Route>
        
        <Route path="/users/:id">
        <UserProfilePage />
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
