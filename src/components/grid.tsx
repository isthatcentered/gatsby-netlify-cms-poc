import cn from "classnames"
import React, { CSSProperties, ReactNode } from "react"

export type StyleProps<T> = {
  className?: string
  style?: CSSProperties
} & T
export type StylePropsWithChildren<T> = StyleProps<
  {
    children?: ReactNode
  } & T
>
export const Container = (props: StylePropsWithChildren<{}>) => (
  <div
    {...props}
    className={cn(
      props.className,
      "Container flex-1 mx-auto px-4 max-w-5xl px-4"
    )}
  />
)
export const Row = (props: StylePropsWithChildren<{ id?: string }>) => (
  <div {...props} className={cn(props.className, "Row -mx-4 flex")} />
)
export const Col = (props: StylePropsWithChildren<{}>) => (
  <div {...props} className={cn(props.className, "Col px-4")} />
)
export const Media = (props: StylePropsWithChildren<{}>) => (
  <div {...props} className={cn(props.className, "Media flex items-start")} />
)
Media.Body = (props: StylePropsWithChildren<{}>) => (
  <div {...props} className={cn(props.className, "MediaBody flex-1")} />
)
