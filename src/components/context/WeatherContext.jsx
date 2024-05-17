import { useContext, createContext, useState } from "react";

import {useFetch} from '../../hooks/useFetch.js'
import { useEffect } from "react";

export const WeatherContext = createContext()

export function WeatherProvider ({children}) {
  const [region, setRegion] = useState('London')
  const [url, setUrl] = useState(`https://api.weatherapi.com/v1/forecast.json?q=${region}&days=1&aqi=no&alerts=no&key=bc7a9a7621a34dd2a67163719242001`)
  let results = useFetch(url)

  useEffect(() => {
    if (region !== '') {
      setUrl(`https://api.weatherapi.com/v1/forecast.json?q=${region}&days=1&aqi=no&alerts=no&key=bc7a9a7621a34dd2a67163719242001`)
    }
  }, [region])

  return(
    <WeatherContext.Provider value={{results, setRegion}}> 
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => {
  return useContext(WeatherContext)
}