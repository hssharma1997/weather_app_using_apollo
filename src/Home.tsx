import { type } from 'os'
import {useState} from 'react'
import { WEATHER_QUERY } from './graphql/Queries'
import { useLazyQuery } from '@apollo/client'
import './home.css';

export default function Navbar() {
const [query,setQuery]=useState<string>("");


const Change=(e:React.ChangeEvent<HTMLInputElement>)=>{
setQuery(e.target.value)
};




  const [getWeather, { data,error }] = useLazyQuery(WEATHER_QUERY, {
    variables: { name: query?query:'Delhi' },
  });

  if(error)
  return <h1>Error... Found</h1>

  if(data)
  console.log(data)
  

    return (
       <div className="home">
            <div className="heading">Weather App</div>
            <br/>
            <br/>
            <input type="text" value={query} onChange={(e)=>Change(e)}/>
            <button className="btn-grad" onClick={()=>getWeather()}>Search</button>
            <>
        {
        data && data.getCityByName &&(
          <div className="weather">
          <h1>Country:{data.getCityByName.country}</h1>
            <h1> City:{data.getCityByName.name} </h1>
            <h1>
              {" "}
              Temperature: {data.getCityByName.weather.temperature.actual}
            </h1>
            <h1>
              Description: {data.getCityByName.weather.summary.description}
            </h1>
            <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1>
          </div>
        )}
        </>
      
      </div>
    );
}
