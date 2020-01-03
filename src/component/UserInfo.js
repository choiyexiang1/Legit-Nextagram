import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axois from 'axios'

const imgStyle ={
    height:'200px',
    borderRadius:'50%',
}

const userInfoStyle ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const UserInfo = (props) => {
    const [userName, setUserName] = useState('')
    const [userPic, setUserPic] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axois.get(`https://insta.nextacademy.com/api/v1/users/${props.id}`)
            .then(result => {
                setUserName(result.data.username)
                setUserPic(result.data.profileImage)
                setIsLoading(false)
            })
    }, [])

    if(isLoading === true){
        return (<p>Loading</p>)
    }

    return (
        <div style={userInfoStyle}>
            <img style={imgStyle} src={userPic}/>
            <Link to={`users/${props.id}`}>{userName}</Link>
        </div>
    )
}

export default UserInfo