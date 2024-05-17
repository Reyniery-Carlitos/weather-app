import justWheater from '../../assets/just-wheater.svg'
import SearchContainer from './SearchContainer'
import Switch from './Switch'

export default function Header () {
  return (
    <header className='w-10/12 flex flex-col sm:flex-row gap-5 items-center'>
      <img src={justWheater} alt="Wheater icon" />
      <SearchContainer />
      {/* <Switch /> */}
    </header>
  )
}