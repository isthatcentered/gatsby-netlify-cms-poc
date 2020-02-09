import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PagesBySlug } from "./__generated__/PagesBySlug"
import { SafeQuery } from "../queries"
import { Col, Row } from "../components/grid"
import MdxContent from "../components/mdx-content"
import { THEME_COLORS } from "../pages"

type PageInfos = {
  fields: { slug: string }
  frontmatter: { title: string }
}

type PageContext = {
  slug: string
  frontmatter: { title: string }
  previous: undefined | PageInfos
  next: undefined | PageInfos
}

const ContentPageTemplate = ({
  pageContext: { next, previous },
  data: { mdx: post },
  ...props
}: {
  data: SafeQuery<PagesBySlug>
  pageContext: PageContext
}) => (
  <Layout>
    <SEO meta={[]} title={post.frontmatter.title} description={post.excerpt} />

    <Row
      className="text-center py-16 mb-4 font-bold"
      style={{
        background: `linear-gradient(45deg, ${
          THEME_COLORS[post.frontmatter.color as "yellow" | "red" | "blue"]
        }, white`,
      }}
    >
      <Col className="w-full">
        <h1 className="text-3xl">{post.frontmatter.title}</h1>
      </Col>
    </Row>

    <MdxContent toc={[]} content={post.body} />

    {/*<Bio />*/}

    {/*<ul*/}
    {/*  style={{*/}
    {/*    display: `flex`,*/}
    {/*    flexWrap: `wrap`,*/}
    {/*    justifyContent: `space-between`,*/}
    {/*    listStyle: `none`,*/}
    {/*    padding: 0,*/}
    {/*  }}*/}
    {/*>*/}
    {/*  <li>*/}
    {/*    {previous && (*/}
    {/*      <Link to={`blog${previous.fields.slug}`} rel="prev">*/}
    {/*        ← {previous.frontmatter.title}*/}
    {/*      </Link>*/}
    {/*    )}*/}
    {/*  </li>*/}
    {/*  <li>*/}
    {/*    {next && (*/}
    {/*      <Link to={`blog${next.fields.slug}`} rel="next">*/}
    {/*        {next.frontmatter.title} →*/}
    {/*      </Link>*/}
    {/*    )}*/}
    {/*  </li>*/}
    {/*</ul>*/}
  </Layout>
)

export default ContentPageTemplate

export const pageQuery = graphql`
  query PagesBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body

      frontmatter {
        title
        color
        #        date(formatString: "MMMM DD, YYYY")
        #        description
      }
    }
  }
`
