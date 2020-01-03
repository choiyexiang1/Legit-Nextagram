import React, { useState } from 'react'
import Axios from 'axios'

const LoginModal = (props) => {

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

    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [forMessage, setForMessage] = useState("")

    const handdleUsernameInput = e => {
        setUsernameInput(e.target.value)
    }

    const handdlePassowrdInput = e => {
        setPasswordInput(e.target.value)
    }

    const handdleSubmit = e => {
        e.preventDefault()
        console.log(usernameInput)
        console.log(passwordInput)

        Axios.post(`https://insta.nextacademy.com/api/v1/login`, {
            username: 'hellohello',
            password: 'hellohello123'
        })
            .then(response => {
                console.log(response.data)
                localStorage.setItem('jwt', response.data.auth_token)
                props.toggleShowLoginModal()
                props.updateUser(response.data.user)
            })
            .catch(error => {
                console.log(error.response)
            })

        setUsernameInput("")
        setPasswordInput("")
    }

    return (
        <div style={backgroundStyle}>
            <div style={modalStyle}>
                <button style={buttonStyle} onClick={props.toggleShowLoginModal}>X</button>
                <h1>LoginModal</h1>
                <form onSubmit={handdleSubmit}>
                    <label>Username:</label>
                    <input type="text" placeholder='username' value={usernameInput} onChange={handdleUsernameInput} />
                    <br />
                    <label>Password:</label>
                    <input type="password" placeholder='password' value={passwordInput} onChange={handdlePassowrdInput} />
                    <br />
                    <input type="submit" value="Login"  />
                </form>
                <p>{forMessage}</p>
            </div>
        </div>
    )
}

export default LoginModal