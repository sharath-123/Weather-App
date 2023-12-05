const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30ad2225aemshbcacd35d1ea3feap122098jsn8e78a8dee063',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pct.innerHtml = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err))


// SubmitEvent.addEventListener("click",(e)=>{
// 	e.preventDefault()
// 	getWeather(city.value)
// })

// getWeather("Hyderabad")

