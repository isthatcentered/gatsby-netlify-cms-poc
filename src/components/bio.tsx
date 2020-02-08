import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <div className="flex">
          {/*<Image*/}
          {/*  fixed={data.avatar.childImageSharp.fixed}*/}
          {/*  alt={author}*/}
          {/*  className="mr-4 rounded-full 🛑"*/}
          {/*/>*/}
          <p>
            Written by <strong>{author}</strong> who lives and works in San
            Francisco building useful things.
            {` `}
            <a href={`https://twitter.com/${social.twitter}`}>
              You should follow him on Twitter
            </a>
          </p>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
