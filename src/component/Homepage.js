import React, { useState, useEffect } from 'react'
import axois from 'axios'

import UserOverView from './UserOverView'


const Homepage = (props) => {
    const [userInfos, setUserInfos] = useState([])

    useEffect(() => {
        axois.get('https://insta.nextacademy.com/api/v1/users')
            .then(result => {
                console.log(result.data)
                setUserInfos(result.data)
            })
    }, [])

    return (
        <>
            {
                props.currentUser.username ?
                    <h2>Hi, {props.currentUser.username}</h2> :
                    null
            }
            {
                userInfos.map(userInfo => {
                    return (<UserOverView id={userInfo.id} />)
                })
            }
        </>
    )
}

export default Homepage