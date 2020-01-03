import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

const navStyle = {
    display: 'flex',
    
    backgroundColor: 'gray',
    color: 'white',
    height: '50px',
}

const Navbar = (props) => {

    const [showLoginModal, setLoginModal] = useState(false)
    const [showSignUpModal, setSignUpModal] = useState(false)

    const toggleShowLoginModal = () => {
        setLoginModal(!showLoginModal)
    }

    const toggleShowSignUpModal = () => {
        setSignUpModal(!showSignUpModal)
    }

    const handdleLogOut = () => {
        localStorage.removeItem('jwt')
        props.updateUser({})
    }

    return (
        <div>
            <div style={navStyle}>
                <Link to="/">HomePage</Link>
                {
                    props.currentUser.id ?
                        <button onClick={handdleLogOut}>Log Out</button> :
                        <div>
                            <button onClick={() => setLoginModal(true)}>Login</button>
                            <button onClick={() => setSignUpModal(true)}>Sign up</button>
                        </div>
                }
            </div>

            {showLoginModal ? <LoginModal updateUser={props.updateUser} toggleShowLoginModal={toggleShowLoginModal} /> : null}
            {showSignUpModal ? <SignUpModal toggleShowSignUpModal={toggleShowSignUpModal} /> : null}

        </div>
    )
}

export default Navbar    