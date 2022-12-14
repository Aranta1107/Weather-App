const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fc9cf2466fmshb1ad72082e1d2d0p1ad932jsnefb64eb914a9',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city)=>{
  cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    h.innerHTML = response.humidity
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    temp.innerHTML = response.temp
    t.innerHTML = response.temp
    wind_degrees.innerHTML = response.wind_degrees
    wind_speed.innerHTML = response.wind_speed
    w.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")

const Weatherko = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
    koc.innerHTML = response.cloud_pct
    kof.innerHTML = response.feels_like
    koh.innerHTML = response.humidity
    koma.innerHTML = response.max_temp
    komi.innerHTML = response.min_temp
    kot.innerHTML = response.temp
    kowd.innerHTML = response.wind_degrees
    kows.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

}

Weatherko("kota")
const Weatherk = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
    kc.innerHTML = response.cloud_pct
    kf.innerHTML = response.feels_like
    kh.innerHTML = response.humidity
    kma.innerHTML = response.max_temp
    kmi.innerHTML = response.min_temp
    kt.innerHTML = response.temp
    kwd.innerHTML = response.wind_degrees
    kws.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

}

Weatherk("kolkata")
const Weatherl = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
    lc.innerHTML = response.cloud_pct
    lf.innerHTML = response.feels_like
    lh.innerHTML = response.humidity
    lma.innerHTML = response.max_temp
    lmi.innerHTML = response.min_temp
    lt.innerHTML = response.temp
    lwd.innerHTML = response.wind_degrees
    lws.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

}

Weatherl("lucknow")
const Weatherv = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
    vc.innerHTML = response.cloud_pct
    vf.innerHTML = response.feels_like
    vh.innerHTML = response.humidity
    vma.innerHTML = response.max_temp
    vmi.innerHTML = response.min_temp
    vt.innerHTML = response.temp
    vwd.innerHTML = response.wind_degrees
    vws.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

}

Weatherv("varanasi")

mumbai.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Mumbai")
}	)
delhi.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Delhi")
}	)
bangalore.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Bangalore")
}	)