import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInandSignup from './pages/sign-in-and-sign-up/signup.components';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import CheckOutPage from './pages/checkout/checkout.components';
// import { selectShopItems } from './redux/shop/shop.selector';
 


function App() {

  const [user, setUser] = React.useState({
    users:null
  });

  const currentUser = useSelector(state => state.user);
  // const collectionsArray = useSelector(selectShopItems);

  
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
      // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items}) => ({title, items })))
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
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route exact path='/signup' render={() => (user.users !== null) ? (<Redirect to ='/' />) : (<SignInandSignup />)}/>
      </Switch>
    </div>
  );
}



export default App;
