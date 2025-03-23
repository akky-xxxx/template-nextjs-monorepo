import type { FcWithChildren } from "client-types"

export const Button: FcWithChildren = (props) => {
  const { children } = props

  return <button type="button">{children}</button>
}
