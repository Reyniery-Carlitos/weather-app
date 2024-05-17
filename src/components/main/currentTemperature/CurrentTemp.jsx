import {useWeatherContext} from '../../context/WeatherContext.jsx'

export default function CurrentTemp() {
  const {results} = useWeatherContext()
  
  return (
    <section className="flex flex-col w-10/12 gap-4">
      <div className='flex items-center gap-5'>
        <h2 className="text-gray-900/85 text-4xl"> {results.data?.location.name || 'None'} </h2>
        <img src={results.data?.current.condition.icon || ''} alt="Current weather icon" />
      </div>
      <div>
        <h2 className="text-gray-900/85 font-bold text-6xl"> {results.data?.current.temp_c || 0} °C </h2>
      </div>
    </section>
  )
}