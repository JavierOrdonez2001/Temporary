
import '../style/nav.css'
import logoimg from '../../public/logo.png'
import { useState } from 'react'

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
                    <li><a href="#">services</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
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
        
        </>
    )
}