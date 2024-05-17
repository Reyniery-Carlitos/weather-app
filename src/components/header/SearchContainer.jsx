import { useState } from "react"

import SearchBar from "./SearchBar"
import DropdownMenu from "./DropdownMenu"
import { useAutoCompleteContext } from "../context/AutoCompleteContext"
import { useWeatherContext } from "../context/WeatherContext"

export default function SearchContainer () {
  const [showDropdown, setShowDropdown] = useState(false)
  const {results, setCountry} = useAutoCompleteContext()
  const {setRegion} = useWeatherContext()
  
  const search = (value) => {
    setCountry(value)
    setShowDropdown(true)
  }

  const handleClick = (region) => {
    setShowDropdown(false)
    setRegion(region)
  }

  return (
    <div className="order-last md:order-none w-full relative">
      <SearchBar search={search} />
      {
        showDropdown
        ? (
          results.data === null || results.data.length === 0
          ? 
            <DropdownMenu>
              <li className="flex items-center text-center h-10 hover:bg-indigo-500 pl-3 cursor-pointer w-full bg-transparent"> No results found </li>
            </DropdownMenu>
          : 
            <DropdownMenu>
              {  
                results.data.map((c) => (
                  <li className="flex items-center text-center h-10 hover:bg-indigo-500 pl-3 cursor-pointer w-full bg-transparent" key={c.id} onClick={() => handleClick(c.url)}> {c.name}, {c.region}, {c.country} </li>
                ))
              }
            </DropdownMenu>
        )
        : <></>
      }
    </div>
  )
}