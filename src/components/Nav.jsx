
import '../style/nav.css'
import logoimg from '../../public/logo.png'
import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'


export function Nav ({onSearChcity}){
    const [city, setCity] = useState('')
    const handleChange = () => {
        setCity(event.target.value)
    }

    const searchWhenClick = () => {
        onSearChcity(city)

     
    }

    return(
        <>
        <header className="header">
            <div className="logo">
                <img src={logoimg} alt="logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="box-input">
                <input type="text" 
                placeholder='buscar ciudad' 
                className="input-01"
                value={city}
                onChange={handleChange} />
                <button className="btn-buscar" onClick={searchWhenClick}>Buscar</button>
            </div>
        </header>
            <Routes>
                <Route></Route>
                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Routes>
        </>
    )
}