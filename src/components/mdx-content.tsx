import { StyleProps } from "./grid"
import cn from "classnames"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const MdxContent = ({ content, ...props }: StyleProps<{ content: string }>) => (
  <div
    {...props}
    className={cn(
      "cms-content font-serif text-xl max-w-xl mx-auto",
      props.className
    )}
  >
    <MDXRenderer>{content}</MDXRenderer>
  </div>
)

export default MdxContent
