import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SafeQuery } from "../queries"
import { Col, Row } from "../components/grid"
import MdxContent from "../components/mdx-content"
import { BlogPostBySlug } from "./__generated__/BlogPostBySlug"

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
  data: SafeQuery<BlogPostBySlug>
  pageContext: PageContext
}) => (
  <Layout>
    <SEO meta={[]} title={post.frontmatter.title} description={post.excerpt} />

    <Row className="text-center py-16 mb-4 font-bold">
      <Col className="w-full">
        <h1 className="text-3xl">{post.frontmatter.title}</h1>
      </Col>
    </Row>

    <MdxContent content={post.body} toc={post.tableOfContents.items} />

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
  query BlogPostBySlug($slug: String!) {
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
      tableOfContents(maxDepth: 4)
      frontmatter {
        title
        #        date(formatString: "MMMM DD, YYYY")
        #        description
      }
    }
  }
`
