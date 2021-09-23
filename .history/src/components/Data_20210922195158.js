import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Data() {
    const [ image, setImage ] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                console.log(res)
                setImage(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={image.id}>{image.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Data
