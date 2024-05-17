import './App.css'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

import { WeatherProvider } from './components/context/WeatherContext'
import { AutoCompleteProvider } from './components/context/AutoCompleteContext'

function App() {
  return (
    <WeatherProvider>
      <AutoCompleteProvider>
        <Header />
        <Main />
        <Footer name={"Carlos Rubio"} />
      </AutoCompleteProvider>
    </WeatherProvider>
  )
}

export default App
