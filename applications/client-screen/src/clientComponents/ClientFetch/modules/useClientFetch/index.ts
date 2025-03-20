import { useEffect, useRef, useState } from "react"

import { getApiRouteHandlerEvenOdd } from "@/libs/apiClient/client-routeHandler"

export const useClientFetch = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [resultText, setResultText] = useState("")

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleClickButton = () => {
    if (!inputRef.current || inputRef.current.value === "") return
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getApiRouteHandlerEvenOdd({ numberFromFront: inputRef.current.value })
      .then((response) => {
        const { data } = response
        setResultText(data)
      })
  }

  return {
    handleClickButton,
    inputRef,
    resultText,
  }
}
