import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"



function BlogPostTemplate( props:any )
{
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  
  return (
    <Layout>
      <SEO
        meta={[]}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        // style={{
//          ...scale( -1 / 5 ),
//           display:      `block`,
//           marginBottom: rhythm( 1 ),
//           marginTop:    rhythm( -1 ),
        //}}
      >
        {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr
        style={{
          // marginBottom: rhythm( 1 ),
        }}
      />
      <Bio/>
      
      <ul
        style={{
          display:        `flex`,
          flexWrap:       `wrap`,
          justifyContent: `space-between`,
          listStyle:      `none`,
          padding:        0,
        }}
      >
        <li>
          {previous && (
            <Link to={`blog${previous.fields.slug}`}
                  rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`blog${next.fields.slug}`}
                  rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}


export default BlogPostTemplate

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
      #      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
