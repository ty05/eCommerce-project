import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

function SignUp(){
    const [signUsers, setSignUsers] = React.useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassWord:''
    })

    
    function handleChange(event){
        const { value, name } = event.target;

        console.log(name, value)

        setSignUsers(preValue => {
            if(name === "displayName"){
                return{
                    displayName: value,
                    email: preValue.email,
                    password: preValue.password,
                    confirmPassWord: preValue.confirmPassWord
                };
            } else if (name === "email"){
                return{
                    displayName: preValue.displayName,
                    email: value,
                    password: preValue.password,
                    confirmPassWord: preValue.confirmPassWord
                };
            } else if (name === "password"){
                return {
                    displayName: preValue.displayName,
                    email: preValue.email,
                    password: value,
                    confirmPassWord: preValue.confirmPassWord
                };
            } else {
                return {
                    displayName: preValue.displayName,
                    email: preValue.email,
                    password: preValue.password,
                    confirmPassWord: value
                };
            }
        })  
        event.preventDefault()
    };

    console.log(signUsers)

    async function handleSubmit(event) {
        event.preventDefault();

        console.log(setSignUsers);
        const { displayName, password, confirmPassWord } = signUsers;
        
        if(password !== confirmPassWord){
            alert("password don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                signUsers.email,
                signUsers.password
            )
            
            console.log(user)

            await createUserProfileDocument(user, {displayName});


            setSignUsers({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        } catch(error){
            console.error(error);
        }      

    }

   

    

    
    
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                 type='text'
                 name='displayName'
                 value={signUsers.displayName}
                 onChange={handleChange}
                 label='Display Name'
                 required
                />
                 <FormInput 
                 type='email'
                 name='email'
                 value={signUsers.email}
                 onChange={handleChange}
                 label='email'
                 required
                />
                <FormInput 
                 type='password'
                 name='password'
                 value={signUsers.password}
                 onChange={handleChange}
                 label='password'
                 required
                />
                <FormInput 
                 type='password'
                 name='cofirmPassword'
                 value={signUsers.confirmPassWord}
                 onChange={handleChange}
                 label='Confirm Password'
                 required
                />
                <CustomButton type='submit'>Submit</CustomButton> 
            </form>
        </div>
    )

}

export default SignUp;


