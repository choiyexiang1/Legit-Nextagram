import React, { useState, useEffect } from 'react'
import axois from 'axios'

const imgStyle={
    height:'200px',
    width: '200px'
}

const UserGallery = (props) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axois.get(`https://insta.nextacademy.com/api/v1/images?userId=${props.id}`)
            .then(result => {
                // console.log(result)
                setImages(result.data)
                setIsLoading(false)
            })
    }, [])

    if(isLoading === true){
        return (<p>Loading...</p>)
    }

    return (
        <>
        {
            images.map(image =>{
                return(<img style={imgStyle} src={image}/>)
            })
        }
        </>
    )
}

export default UserGallery