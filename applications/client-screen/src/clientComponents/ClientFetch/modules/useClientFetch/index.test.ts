import { renderHook } from "@testing-library/react"
import React, { act } from "react"

import { useClientFetch } from "."

globalThis.fetch = fetch

describe("useClientFetch", () => {
  it("resultText の初期値は空文字", () => {
    const hookResult = renderHook(useClientFetch)
    expect(hookResult.result.current.resultText).toBe("")
  })

  it("inputRef.current.value が 1 の時に handleClickButton を実行すると、fetch で /api/routeHandler-even-odd?numberFromFront=1 をコールする", () => {
    const spyUseRef = jest.spyOn(React, "useRef")
    const spyFetch = jest.spyOn(globalThis, "fetch")
    spyUseRef.mockImplementationOnce(() => ({ current: {
      value: "1",
      focus: jest.fn(),
    } }))
    const hookResult = renderHook(useClientFetch)
    act(() => {
      hookResult.result.current.handleClickButton()
    })
    expect(spyFetch).toHaveBeenCalledWith("/api/routeHandler-even-odd?numberFromFront=1", { method: "GET" })
  })

  it("handleClickButton の実行結果が resultText に格納される", () => {
    const hookResult = renderHook(useClientFetch)
    act(() => {
      hookResult.result.current.handleClickButton()
    })
  })
})
