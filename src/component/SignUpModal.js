import React, { useState } from 'react'
import axios from 'axios'

const SignUpModal = (props) => {
    const backgroundStyle = {
        height: '100vh',
        width: '100vw',
        background: 'rgba(0, 0, 0, 0.4)',
        position: 'fixed',
        top: '0',
        left: '0'
    }

    const modalStyle = {
        height: '600px',
        width: '400px',
        background: 'white',
        display: 'inline-block',
        position: 'fixed',
        left: '50vw',
        top: '50vh',
        transform: 'translate(-50%, -50%)'
    }

    const buttonStyle = {
        height: '30px',
        width: '30px',
        marginLeft: '90%',
        marginTop: '10px'
    }

    const [emailInput, setEmailInput] = useState("")
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [forMessage, setForMessage] = useState("")

    const handdleEmailInput = e =>{
        setEmailInput(e.target.value)
    }
    
    const handdleUsernameInput = e =>{
        setUsernameInput(e.target.value)
    }

    const handdlePassowrdInput = e =>{
        setPasswordInput(e.target.value)
    }
    
    const handdleSubmit = e =>{
        e.preventDefault()
        setIsLoading(true)
        
        if(passwordInput.length < 8){
            setForMessage("Password need more then 8 character..")
            return;
        }
            axios.post(`https://insta.nextacademy.com/api/v1/users/`,{
                email: emailInput,
                username: usernameInput,
                password: passwordInput,
            })
            .then(response=>{
                console.log(response)
                setIsLoading(false)
                setEmailInput("")
                setUsernameInput("")
                setPasswordInput("")
                props.toggleShowSignUpModal()
            })
            .catch(err=>{
                console.log(err.response)
                setIsLoading(false)
                setForMessage("Sign Up Failed")
            })
    }

    const [isLoading, setIsLoading] = useState(false)
    

    return (
        <div style={backgroundStyle}>
            <div style={modalStyle}>
                <button style={buttonStyle} onClick={props.toggleShowSignUpModal}>X</button>
                <h1>SignUpModal</h1>
                <form onSubmit={handdleSubmit}>
                    <label>Email:</label>
                    <input type="text" placeholder='email' value={emailInput} onChange={handdleEmailInput}/>
                    <br />
                    <label>Username:</label>
                    <input type="text" placeholder='username' value={usernameInput} onChange={handdleUsernameInput} />
                    <br />
                    <label>Password:</label>
                    <input type="password" placeholder='password' value={passwordInput}  onChange={handdlePassowrdInput}/>
                    <br />
                    <input type="submit" value={isLoading ? 'Signing Up' : 'Sign Up'} disabled={ emailInput === "" || usernameInput === "" || passwordInput === "" || isLoading}/>
                </form>
            </div>
        </div>
    )
}

export default SignUpModal