async function buscarClima(){

  const cidade = document.getElementById("cidade").value

  // BUSCAR COORDENADAS
  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
  )

  const geoData = await geoResponse.json()

  const latitude = geoData.results[0].latitude
  const longitude = geoData.results[0].longitude

  // BUSCAR CLIMA
  const climaResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  )

  const climaData = await climaResponse.json()

  // MOSTRAR NA TELA
  document.getElementById("resultado").innerHTML = `
  
    <h2>${cidade}</h2>

    <p>🌡 Temperatura: 
      ${climaData.current_weather.temperature}°C
    </p>

    <p>💨 Vento:
      ${climaData.current_weather.windspeed} km/h
    </p>

  `
  
  document.getElementById("resultado").style.display = "block";
}