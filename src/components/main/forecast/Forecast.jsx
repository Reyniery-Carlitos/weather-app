import { useState } from 'react'

import ForecastCard from "./ForecastCard"
import Button from '../../carrousel/Button.jsx'
import ButtonLeft from '../../carrousel/ButtonLeft.jsx'
import { useWeatherContext } from '../../context/WeatherContext.jsx'

export default function Forecast() {
  const [transX, setTransX] = useState(0);
  const { results } = useWeatherContext()

  // q = quantity
  const changeTrans = (q) => {
    setTransX(transX + q)
  }

  return (
    <section className="flex flex-col gap-5 w-full mt-10 bg-indigo-100 rounded-2xl px-6 py-6">
      <h3 className="text-gray-900/60 uppercase"> TODAY'S FORECAST </h3>
      <div className='relative overflow-hidden'>
        <div className="flex gap-4 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${transX}px)` }}>
          {
            results.data === null
              ? <ForecastCard> </ForecastCard>
              :
              results.data.forecast.forecastday[0].hour.map((h) => (
                <ForecastCard key={h.time_epoch}>
                  <span className='uppercase text-gray-900/60'> {h.time.split(' ')[1]} </span>
                  <img src={h.condition.icon} alt="Wheater icon" className='h-10 w-10' />
                  <span > {h.temp_c} °C </span>
                </ForecastCard>
              ))
          }


        </div>

        <ButtonLeft changeTrans={changeTrans} />
        <Button changeTrans={changeTrans} />
      </div>
    </section>
  )
}