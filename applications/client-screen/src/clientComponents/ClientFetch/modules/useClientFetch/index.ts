import { useEffect, useRef, useState } from "react"

export const useClientFetch = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [resultText, setResultText] = useState("")

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleClickButton = () => {
    if (!inputRef.current || inputRef.current.value === "") return
    const url = new URLSearchParams()
    url.set("numberFromFront", inputRef.current.value)
    const requestUri = `/api/routeHandler-even-odd?${url.toString()}`
    fetch(requestUri)
      .then((res) => res.json())
      .then((data) => {
        // TODO: api 周りの型を整備したら不要になる
        if (typeof data !== "string") return
        setResultText(data)
      })
      .catch(() => {
        setResultText("error!")
      })
  }

  return {
    handleClickButton,
    inputRef,
    resultText,
  }
}
