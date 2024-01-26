import { useEffect, useState } from "react"

export default function SearchBar ({search}) {
  const [inputValue, setInputValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  // Debouncing mechanism
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue])

  useEffect(() => {
    if (debouncedValue !== '') {
      search(debouncedValue)
    }
  }, [debouncedValue])

  const handleChange = ({target}) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target[0].value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="h-10 rounded-md bg-indigo-50 w-full px-5 border-2 border-transparent focus-within:border-indigo-500 outline-none" placeholder="Search for cities" onChange={handleChange} />
    </form>
  )
}