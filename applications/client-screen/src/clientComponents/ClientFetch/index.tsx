"use client"

import { useClientFetch } from "@/clientComponents/ClientFetch/modules/useClientFetch"

export const ClientFetch = () => {
  const {
    handleClickButton,
    inputRef,
    resultText,
  } = useClientFetch()

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button type="button" onClick={handleClickButton}>送信</button>
      <div>
        結果：
        <textarea readOnly value={resultText} />
      </div>
    </div>
  )
}
