import { StyleProps } from "./grid"
import cn from "classnames"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"




const MdxContent = (
  props: StyleProps<{
    content: string
    toc: { url: string; title: string }[] | undefined
  }>
) => (
  <div {...props} className={cn("flex", props.className)}>
    <div className="cms-content font-serif text-xl w-2/3 items-start">
      <MDXRenderer>{props.content}</MDXRenderer>
    </div>
    <aside className="w-1/3 pl-8 sticky left-0 mt-8" style={{ top: 72 }}>
      <h2 className="mb-4 text-sm text-gray-600">Table des matières</h2>
      <ol className="">
        {(props.toc || []).map((item, index) => (
          <li key={item.url} className="mb-2 font-bold">
            {item.title}
            {/*<a href={item.url}>{item.title}</a>*/}
          </li>
        ))}
      </ol>
    </aside>
  </div>
)

export default MdxContent
