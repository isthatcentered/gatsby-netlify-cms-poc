import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SafeQuery } from "../queries"
import { Col, Row } from "../components/grid"
import MdxContent from "../components/mdx-content"
import { BlogPostBySlug } from "./__generated__/BlogPostBySlug"
import Img from "gatsby-image"

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

    <Row className="text-center mb-4 font-bold flex-wrap">
      <Col className="w-full mb-8">
        <Img
          className="-mx-4"
          fluid={post.frontmatter.hero.src.childImageSharp.fluid}
          alt={post.frontmatter.hero.alt}
        />
      </Col>
      <Col className="w-full mb-8 text-left px-12">
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
        hero {
          alt
          src {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 1160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        #        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
