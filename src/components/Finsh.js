import React from 'react'
import { useNavigate } from 'react-router-dom'

const Finsh = (props) => {
    const router = useNavigate()

    const handleClick = () => {
        router(`/${props.location}`)
    }

    return (
        <a onClick={handleClick} style={{ cursor: 'pointer', color: 'red', textDecoration: 'underline' }}>
            おわったらこちら
        </a>
    )
}

export default Finsh