export default function ForecastCard ({children}) {
  return (
    <div className='flex flex-col justify-between items-center gap-2 bg-white/40 px-3 py-2 min-w-20 rounded-xl'>
      {children}
    </div>
  )
}