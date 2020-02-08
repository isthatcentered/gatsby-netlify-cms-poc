import { StyleProps } from "./grid"
import cn from "classnames"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Link } from "gatsby"

const MdxContent = (
  props: StyleProps<{ content: string; toc: { url: string; title: string }[] }>
) => (
  <div {...props} className={cn("flex px-4", props.className)}>
    <div className="cms-content font-serif text-xl w-2/3">
      <MDXRenderer>{props.content}</MDXRenderer>
    </div>
    <aside className="w-1/3 pl-4">
      <h2 className="mb-4">Table des matières</h2>
      <ol className="pl-4">
        {props.toc.map((item, index) => (
          <li key={item.url} className="mb-2 font-bold text-sm text-gray-600">
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ol>
    </aside>
  </div>
)

export default MdxContent
