import { renderHook } from "@testing-library/react"
import React, { act } from "react"

import { flushPromises } from "@/shared/modules/flushPromises"

import { useClientFetch } from "."

// *.test.ts を許容する
describe("useClientFetch", () => {
  beforeEach(() => {
    jest.spyOn(React, "useRef").mockImplementation(() => ({ current: {
      value: "1",
      focus: jest.fn(),
    } }))
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it("resultText の初期値は空文字", () => {
    const hookResult = renderHook(useClientFetch)
    expect(hookResult.result.current.resultText).toBe("")
  })

  it("inputRef.current.value が 1 の時に handleClickButton を実行すると、fetch で /api/routeHandler-even-odd?numberFromFront=1 をコールする", () => {
    const spyFetch = jest.spyOn(globalThis, "fetch")
    const hookResult = renderHook(useClientFetch)
    act(() => {
      hookResult.result.current.handleClickButton()
    })
    expect(spyFetch).toHaveBeenCalledWith("/api/routeHandler-even-odd?numberFromFront=1", { method: "GET" })
  })

  it("inputRef.current.value が 1 の時に handleClickButton の実行結果（odd）を引数に setResultText が実行される", async () => {
    const spySetter = jest.fn()
    jest.spyOn(React, "useState").mockImplementation(() => [undefined, spySetter])
    const hookResult = renderHook(useClientFetch)
    act(() => {
      hookResult.result.current.handleClickButton()
    })
    await act(async () => {
      await flushPromises()
    })
    expect(spySetter).toHaveBeenCalledWith("odd")
  })

  it("inputRef.current.value が 1 の時に handleClickButton の実行結果（odd）が resultText に格納される", async () => {
    const hookResult = renderHook(useClientFetch)
    act(() => {
      hookResult.result.current.handleClickButton()
    })
    await act(async () => {
      await flushPromises()
    })
    expect(hookResult.result.current.resultText).toBe("odd")
  })
})
