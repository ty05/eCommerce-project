import React from "react";
import './signup.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

function SingInAndSignUp(){
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>

    )
}

export default SingInAndSignUp;