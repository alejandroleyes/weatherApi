import { useState, useEffect } from "react"
import { useLocation } from "react-router"

export const useFetchData = (API) => {
  const [data, setData] = useState(null)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(null)
  const [clickSearchBtn, setclickSearchBtn] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    const abortCont = new AbortController()
    const handleFetchData = async () => {
      try {
        setData(null)
        setLoader(true)
        const response = await fetch(API, { signal: abortCont.signal })

        if (response.ok === true) {
          const result = await response.json()
          setData(result)
        } else {
          setError(response.status)
          setclickSearchBtn(false)
          abortCont.abort()
          throw Error(`No data for this Search. Error ${response.status} `)
        }

        setLoader(false)
        setclickSearchBtn(false)
      } catch (e) {
        console.error(e)
      }
    }

    if (pathname === "/") {
      if (clickSearchBtn === true) {
        handleFetchData()
      }
    } else {
      handleFetchData()
    }

    return () => abortCont.abort()
  }, [API, pathname, clickSearchBtn])

  const handleSearchBtn = (e) => {
    e.preventDefault()
    setclickSearchBtn(true)
  }

  return {
    data,
    handleSearchBtn,
    loader,
    error,
  }
}
