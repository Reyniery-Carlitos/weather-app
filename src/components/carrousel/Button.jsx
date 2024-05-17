export default function Button({changeTrans}) {
  return (
    <button className='absolute flex justify-center items-center top-0 group -right-3 bg-gradient-to-l from-indigo-100 from-50% to-transparent aspect-square w-auto h-full' onClick={() => {changeTrans(100)}}>
      <div className="flex justify-center items-center text-8xl h-16 w-16 rounded-full p-2 transition-colors duration-200 ease-in-out group-hover:bg-gray-900/35 group-focus-visible:bg-gray-900/35">
      <svg class="w-8 h-8 text-gray-900/40 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
      </div>
    </button>
  )
}