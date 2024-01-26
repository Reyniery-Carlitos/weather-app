export default function Footer ({name}) {
  return (
    <footer className="my-5 flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex gap-3 items-center">
          <span className="bg-indigo-400 text-white p-1 rounded-lg"> Powered by </span>
          <a href="https://www.weatherapi.com/" target="__blank"> WeatherApi.com </a>
        </div>
        <div className="flex gap-3 items-center">
          <span className="bg-[#672871] text-white p-1 rounded-lg"> Designs from </span>
          <a href="https://bigdevsoon.me/" target="__blank"> BigDevSoon.me </a>
        </div>
      </div>
      <p class="text-lg"> Coded with  <span class="text-red-600"> ❤ </span> by <a href="https://github.com/Reyniery-Carlitos/" target="__blank" className="font-semibold"> {name} </a> </p>
    </footer>
  )
}