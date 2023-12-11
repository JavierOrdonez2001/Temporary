
import './style/app.css'
import './style/buttons.css'
import { Data } from './components/Data'
import { Nav } from './components/nav'
import { useState } from 'react'


export function App () {
    const [city, setCity] = useState('')

    const handleSearshCity = (cityentered) => {
        setCity(cityentered)

    }
    console.log('holaaa')
    return(
        <>
        <Nav onSearChcity={handleSearshCity}></Nav>
        <br />
        <br />
        <Data city={city}></Data>
        </>
    )
}