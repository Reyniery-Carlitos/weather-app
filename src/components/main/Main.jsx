import CurrentTemp from "./currentTemperature/CurrentTemp.jsx"
import Forecast from "./forecast/Forecast.jsx"
import Details from "./weatherDetails/Details.jsx"

export default function Main () {
  return (
    <main className="w-10/12 mt-16 gap-6">
      <CurrentTemp />
      <Forecast />
      <Details />
    </main>
  )
}