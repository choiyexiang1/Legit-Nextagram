import React from 'react'
import UserInfo from './UserInfo'
import UserGallery from './UserGallery'

const containerStyle ={
    display:'flex',
    height:'50vh',
    backgroundColor:'pink',
    marginBottom: '10px'
}

const UserOverView = (props) => {

    return (
        <div style={containerStyle}>
            <UserInfo id={props.id}/>
            <UserGallery id={props.id}/>
        </div>
    )
}

export default UserOverView