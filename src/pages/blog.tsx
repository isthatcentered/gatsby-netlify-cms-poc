import React from "react"
import { graphql, Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SafeQuery } from "../queries"
import { AllBlogPosts } from "./__generated__/AllBlogPosts"
import { THEME_COLORS } from "./index"
import { Col, Row } from "../components/grid"

function Blog(props: { data: SafeQuery<AllBlogPosts> }) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.posts.edges

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Comment utiliser la psychologie au quotidien pour vivre mieux"
        meta={[]}
      />
      <div className="pt-8">
        <Row
          className="text-center py-16 mb-4 font-bold -mx-12 mb-8"
          style={{
            background: `linear-gradient(45deg, ${THEME_COLORS["yellow"]}, white`,
          }}
        >
          <Col className="w-full">
            <h1 className="text-3xl">Blog</h1>
          </Col>
        </Row>
        <Row className="">
          <Col className="w-2/3">
            {posts.map(({ node: post }) => (
              <div className="mb-8 " key={post.fields.slug}>
                <h3 className="text-2xl font-bold underline mb-2">
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`/blog${post.fields.slug}`}
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="text-lg text-gray-600">{post.excerpt}</p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query AllBlogPosts {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
