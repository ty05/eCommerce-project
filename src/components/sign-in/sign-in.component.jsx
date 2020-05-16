import React from 'react';
import FormInput from "../form-input/form-input.component"
import './sign-in.component.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

function SignIn () {
    
    const [info, setInfo] = React.useState({
        email:'',
        password:''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInfo(preValue => {
            if(name==="email"){
                return{
                    email:value,
                    password:preValue.password
                };
            }else if (name==="password"){
                return{
                    email:preValue.email,
                    password:value
                };
            };
        });
        event.preventDefault();
    
    }

    

    async function handleSubmit(event) {
        event.preventDefault();
        

        try{
            await auth.signInWithEmailAndPassword(info.email, info.password);
            setInfo({ email: '', password: '' });
        } catch(error){
            console.log('something wrong', error);
        }

        
    }

    
    return(
        <div className='sign-in'>
            <h2>I already ahve an account</h2>
            <span>Sign in with your email address</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} name='email' label='email' type='email' value={info.email} required />
                <FormInput handleChange={handleChange} name='password' label='password' type='password' value={info.password} required />
                <div className='buttons'>
                    <CustomButton onClick={handleSubmit} type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                    </CustomButton>
                </div>     
            </form>
        </div>

    )
}

export default SignIn;