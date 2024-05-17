export default function DropdownMenu ({children}) {
  return (
    <ul className="absolute w-full mt-2 bg-indigo-50 rounded-md">
      {children}
    </ul>
  )
} 