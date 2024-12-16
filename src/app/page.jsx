'use client'
import React, { Component, useState } from "react";
import 'typeface-manrope'
import Image from "next/image";
import {LogoLeft, LogoRight} from "@/component/pineconeLogo.js"


const WeatherPage = () => {
const [city, setCity] = useState("");
const [weatherData, setWeatherData] = useState(null);
const [error, setError] = useState(null);

const API_KEY = "1f3c52013d524b20b46110204241412"


const handleCityChange = (event) => {
setCity(event.target.value);
};

const handleSubmit = async (event) => {
event.preventDefault();
setWeatherData(null);
setError(null);

try {

const geoRes = await fetch(
`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}}&days=1&aqi=no&alerts=no`


);
if (!geoRes.ok) throw new Error("City not found");

const weatherData = await geoRes.json();
console.log(weatherData)

setWeatherData(weatherData);
} catch (err) {
setError("Could not fetch data. Please try again.");
}
};



const getWeatherImage = (condition) => {
    if(!condition){
        return "Sun.png"
    }

    const text = condition?.toLowerCase()
    if(text.includes('sunny') || text.includes('clear') ){
        return "Sun.png"
    }

    if(text.includes('rain') || text.includes('drizzle') || text.includes('mist')){
        return "Rain.png"
    }

    if(text.includes('overcast') || text.includes('cloud') ){
        return "Clouds.png"
    }
    if(text.includes('snow') ){
        return "snow.png"
    }
    if(text.includes('thunderstorm') ){
        return "thunderstorm.png"
    }

};
    
    
    
    
    const getNightImage = (condition) => {

        if(!condition){
            return "Night-Moon.png"
        }

        const text = condition?.toLowerCase()

        if(text.includes('rain') || text.includes('drizzle') || text.includes('mist') ){
            return "Night-Rain.png"
        }

        if(text.includes('overcast') || text.includes('cloud') ){
            return "night-cloudy.png"
        }
        if(text.includes('snow') ){
            return "Night-Snow.png"
        }
        if(text.includes('thunderstorm') ){
            return "Night-Storm.png"
        }
        if(text.includes('clear') || text.includes('sunny') ){
            return "Night-Moon.png"
        }
    
    };
    


return (
<div className="flex relative h-screen w-full justify-center items-center rounded-[2px] bg-[#F3F4F6] ">
<div className="absolute rounded-full border-[1px] w-[940px] h-[940px] opacity-[8%] border-[#111827]"></div> 
<div className="absolute rounded-full border-[1px] w-[540px] h-[540px] opacity-[10%] border-[#111827]"></div>
<div className="absolute rounded-full border-[1px] w-[340px] h-[340px] opacity-[10%] border-[#111827]"></div>
<div className="absolute rounded-full border-[1px] w-[140px] h-[140px] opacity-[10%] border-[#111827]"></div>
<div className="flex justify-center items-center h-weatherHeight w-weatherWidth bg-backgroundColor rounded-l-lg">
<div className=" p-6 rounded-lg  w-full max-w-md absolute right-100 top-8">
<h1 className="text-2xl font-bold font-Manrope text-center text-blue-600 mb-6"></h1>

<form onSubmit={handleSubmit} className="flex mb-4 ">
    <img src="search.png" alt="" className="absolute pt-4 pl-2" />
<input
type="text"
placeholder="Search"
value={city}
onChange={handleCityChange}
className="font-Manrope font-[32px] border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[48px] pl-16 w-[567px] h-[80px]"
/>
{/* <button
type="submit"
className=" text-white p-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
Search
</button> */}
</form>

{error && <p className="text-red-500 text-center mb-4">{error}</p>}
</div>



<div className="bg-insideBackgroundColor h-weatherInsideHeight w-weatherInsideWidth flex flex-col justify-center items-center z-40 rounded-[42px]">
<h2 className="text-[48px] font-extrabold text-[#111827] font-Manrope text-center">{city}</h2>
<img src={getWeatherImage(weatherData?.current?.condition?.text)} className="w-pictureWidth h-pictureHeight drop-shadow-[0_5px_25px_rgba(255,214,10,0.5)]  " />
{weatherData && (


<div className="space-y-6">

{/* Day time */}
<div>
<div className="right-30">
<h3 className="text-[32px] font-extrabold text-[#FF8E27] font-Manrope">Daytime</h3>

<p className="text-black font-bold text-[144px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280] font-Manrope"> {Math.round(weatherData.current.temp_c)}°C</p>
<p className="text-gray-700">Humidity: {weatherData.current.humidity} %</p>
<p className="text-gray-700">Conditions: {weatherData.current.condition.text}</p>
</div>
</div>
</div>
)}
</div>
</div>
{/* night time */}
<div className="flex justify-center items-center h-weatherHeight w-weatherWidth bg-[url('/nightback.png')] rounded-l-lg relative" >
<div className="absolute -left-[45px] top-[555px] flex gap-3">
<LogoLeft/>
<LogoRight/>

</div>
<div className="bg-gradient-to-b from-[#1F2937] to-[#111827] h-weatherInsideHeight w-weatherInsideWidth flex flex-col justify-center items-center rounded-[42px]">
<h2 className="text-[48px] font-extrabold text-[#FFFFFF] font-Manrope text-center">{city}</h2>
<img src={getNightImage(weatherData?.current?.condition?.text)} className="w-pictureWidth h-pictureHeight drop-shadow-[0_5px_25px_rgba(255,255,255,0.5)] " />
{weatherData && (


<div className="space-y-6">
<div className="w-"></div>

<div >
<div className="right-30">
<h3 className="text-[32px] font-extrabold text-[#777CCE] font-Manrope">Nighttime</h3>
<p className="text-gray-700 text-[144px] font-Manrope font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#000000] "> {Math.round(weatherData.forecast.forecastday[0].day.mintemp_c)}°C</p>
<p className="text-gray-700">Humidity: {weatherData.current.humidity}%</p>
<p className="text-gray-700">Conditions: {weatherData.current.condition.text}</p>
</div>
</div>
</div>
)}
</div>

</div>


</div>


);
};

export default WeatherPage;
