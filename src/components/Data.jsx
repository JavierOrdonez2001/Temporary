
import { useEffect, useState } from "react"
import '../style/data.css'

export function Data ({ city }){
    
  //logic
  const [weatherData, setWeatherData] = useState(null)
  const apiID = 'f9ef9957654c693945955afd6cd087e2'
  useEffect(() => {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}`
      fetch(apiURL)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              setWeatherData(data)
          })
            .catch(err => console.error(err))
  },[city])

    
    return (
        <>
        
        <div className="box-01">
      {weatherData && weatherData.main ? ( 
        <main>
          <h2>El clima en {weatherData.name}.</h2>
          <div>
            <p>Temperatura actual: {(weatherData.main.temp - 273.15).toFixed(2)} Celsius</p>
            <p>Temperatura maxima: {(weatherData.main.temp_max - 273.15).toFixed(2)} Celsius.</p>
            <p>Temperatura minima: {(weatherData.main.temp_min - 273.15).toFixed(2)} Celsius.</p>
          </div>   
        </main>
      ):(
        <div className="error"><p>ciudad no encontrada</p></div>
      )}
    </div>
    

    <div className="box-01">
      {weatherData && weatherData.main ? ( 
        <main>
          <h2>Mas detalles de {weatherData.name}.</h2>
          <div>
            <p>Humedad: {weatherData.main.humidity} %</p>
            <p>Viento  km/h</p>
          </div>   
        </main>
      ):(
        <div className="error"><p>ciudad no encontrada</p></div>
      )}
    </div>
        </>
       
    )
}