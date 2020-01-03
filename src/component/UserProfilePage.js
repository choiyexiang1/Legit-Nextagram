import React from 'react'
import { useParams } from 'react-router-dom'

import UserInfo from './UserInfo'
import UserGallery from './UserGallery'

const UserProfilePage = () => {

    const { id } = useParams()

    return (
        <>
            <h1>Hi</h1>
            <UserInfo id={id} />
            <UserGallery id={id} /></>
    )
}

export default UserProfilePage