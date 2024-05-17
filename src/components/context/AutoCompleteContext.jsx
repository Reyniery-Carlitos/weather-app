import { useContext, createContext, useState } from "react";

import {useFetch} from '../../hooks/useFetch.js'
import { useEffect } from "react";

export const AutoCompleteContext = createContext()

export function AutoCompleteProvider ({children}) {
  const [country, setCountry] = useState('London')
  const [url, setUrl] = useState(`https://api.weatherapi.com/v1/search.json?key=bc7a9a7621a34dd2a67163719242001&q=${country}`)
  let results = useFetch(url)

  useEffect(() => {
    if (country !== '') {
      setUrl(`https://api.weatherapi.com/v1/search.json?key=bc7a9a7621a34dd2a67163719242001&q=${country}`)
    }
  }, [country])

  return(
    <AutoCompleteContext.Provider value={{results, setCountry}}> 
      {children}
    </AutoCompleteContext.Provider>
  )
}

export const useAutoCompleteContext = () => {
  return useContext(AutoCompleteContext)
}