import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignUp from './pages/sign-in-and-sign-up/signup.components';
import { auth } from './firebase/firebase.utils';


function App() {

  const [users, setUsers] = React.useState({
    users:null
  })

  

  useEffect(() =>{
    const unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      setUsers({users:user});
    })

    return () => {
      unsubscribeFromAuth();
    }

  },[]);

  return (
    <div>
      <Header users={users}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
