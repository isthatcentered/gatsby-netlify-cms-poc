import React, { useRef } from "react"
import useClickOutside from "use-click-outside"
import { StylePropsWithChildren } from "./grid"

const CaptureOutsideClick = ({
  onClickOutside,
  ...props
}: StylePropsWithChildren<{ onClickOutside: () => void }>) => {
  const ref = useRef(null)
  useClickOutside(ref, onClickOutside)
  return <div ref={ref} {...props} />
}

export default CaptureOutsideClick
