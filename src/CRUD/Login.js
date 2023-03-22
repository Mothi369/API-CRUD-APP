import { Button } from 'antd'
import React from 'react'
import { auth, provider } from '../firebase'
import "./Login.css"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

const Login = () => {
    const [{},dispatch]=useStateValue()

     const signIn=()=>{
        auth.signInWithPopup(provider)
            .then(res=>{
                dispatch({
                    type:actionTypes.SET_USER,
                    user:res.user
                })
            })
            .catch((err)=>alert(err.message))
    } 
    /* const signIn=()=>{
        auth.signInWithPopup(provider)
            .then(res=>console.log(res))
            
            .catch((err)=>alert(err.message))
    } */
  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?b=1&s=170667a&w=0&k=20&c=sWrx7lGvWwW_L-Our1zhAS7-QavrGXar7LCQc7_Cp2M=" alt='login' />
            <div className="login_text">
                <h1>Login to POST App</h1>
            </div>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>        
    </div>
  )
}

export default Login