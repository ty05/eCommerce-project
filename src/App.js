import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInandSignup from './pages/sign-in-and-sign-up/signup.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';



function App() {

  const [user, setUser] = React.useState({
    users:null
  });

  const currentUser = useSelector(state => state.user);
  
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setUser({
            users:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setUser({users:userAuth});
      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      unsubscribeFromAuth();
    }

  },[]);
  


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signup' render={() => (user.users !== null) ? (<Redirect to ='/' />) : (<SignInandSignup />)}/>
      </Switch>
    </div>
  );
}



export default App;
