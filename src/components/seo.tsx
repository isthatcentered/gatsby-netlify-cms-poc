import React from "react"
import Helmet, { HelmetProps } from "react-helmet"
import { useSiteMetadata } from "../queries"

/**
 * [] OG tags [twitter, fb, ...]
 * [] Structured data
 *    - Testing tool: https://search.google.com/structured-data/testing-tool/u/0/
 *    - Docs: https://developers.google.com/search/docs/guides/intro-structured-data
 *    - Codelab: https://codelabs.developers.google.com/codelabs/structured-data/
 * [] meta tags
 */
// https://developers.google.com/search/docs/guides/intro-structured-data
// https://codelabs.developers.google.com/codelabs/structured-data/index.html#0
// https://www.gatsbyjs.org/tutorial/part-eight/#add-page-metadata
function SEO(props: {
  description: string
  lang: string
  meta: HelmetProps["meta"]
  title: string
}) {
  const defaults = useSiteMetadata(),
    description = props.description || defaults.description

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={props.title}
      titleTemplate={`%s | ${defaults.title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: defaults.author,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
}

export default SEO
