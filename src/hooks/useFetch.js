import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [results, setResults] = useState({data: null, loading: true, error: null})

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          setResults({
            data: null,
            loading: false,
            error: err
          })
        } else {
          setResults({
            data,
            loading: false,
            error: null
          })
        }
        
      })
      .catch((err ) => {
        return err
      })
  }, [url])
  
  return results
}