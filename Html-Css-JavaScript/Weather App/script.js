
const key ="none"
const url = 'https://api.openweathermap.org/data/2.5/'


function setQuery(e){
if (e.keyCode == '13' ) {
   getResult(searchBar.value)
}
}
const getResult = (cityName) =>{
   let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`

   fetch(query)
   .then(weather =>{
      return weather.json()
   })
   .then(displayResult)

}

const displayResult = (result) =>{
 
let CurrentTemp = document.querySelector("#CurrentTemp");
CurrentTemp.innerHTML = `${Math.round(result.main.temp)}°C`;
let CityName = document.querySelector("#CityName");
CityName.innerHTML=`${result.name}, ${result.sys.country}`
let Desc = document.querySelector("#Description")
Desc.innerHTML =UpperLetter(result.weather[0].description)
let min_temp = document.querySelector("#min_temp")
min_temp.innerHTML = `${Math.floor(result.main.temp_min)}°C`;
let max_temp = document.querySelector("#max_temp")
max_temp.innerHTML =`${Math.ceil(result.main.temp_max)}°C`;
let wind_speed = document.querySelector("#windSpeed")
wind_speed.innerHTML= `${Math.ceil(result.wind.speed)}km/s`
let humidity =document.querySelector("#Humudity")
humidity.innerHTML = `%${result.main.humidity}`


}

const searchBar = document.getElementById('SearchBar')
searchBar.addEventListener('keypress',setQuery)

const UpperLetter = (word) =>{

const newword = word.slice(0, 1).toUpperCase() + word.slice(1);
return newword;


}
