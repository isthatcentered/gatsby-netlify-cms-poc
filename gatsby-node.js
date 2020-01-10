const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const removeTrailingPathSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``) // /test-blog-post/ -> /test-blog-post

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = removeTrailingPathSlash(createFilePath({ node, getNode }))

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const slug = post.node.fields.slug // /test-blog-post

      createPage({
        path: `blog${slug}`, // blog/test-blog-post
        component: blogPost,
        context: {
          slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}
