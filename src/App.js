import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInandSignup from './pages/sign-in-and-sign-up/signup.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {

  const [users, setUsers] = React.useState({
    user:null
  });
  
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setUsers({
            user:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setUsers({users:userAuth});
    });

    return () => {
      unsubscribeFromAuth();
    }

  },[]);
  
  console.log(users)


  return (
    <div>
      <Header users={users}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signup' component={SignInandSignup} />
      </Switch>
    </div>
  );
}


  

export default App;
