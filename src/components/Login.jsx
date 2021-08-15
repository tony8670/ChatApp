import React from 'react'
import styled from 'styled-components'
import {auth,provider} from '../utils/firebase'

const Login = () => {
    const LoginwithGmail = ()=>{
        auth.signInWithPopup(provider);
    }
    return (
        <Button onClick={LoginwithGmail}>
            Login 
        </Button>
    )
}

const Button = styled.button`
    width: 200px;
    height: 50px;
    margin:20px 0;
    background: none;
    border: 1px solid grey;
    border-radius: 10px;

    :hover{
        border: 2px solid red;
    }

`

export default Login
