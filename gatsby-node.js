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

const createContentType = (templatePath, prefix, query, name) => (
  createPage,
  graphql,
  reporter
) => {
  const blogPost = path.resolve(templatePath)

  return graphql(query).then(result => {
    if (result.errors) {
      reporter.panic(result.errors)
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts
      .filter(({ node }) => node.parent.sourceInstanceName === name)
      .forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
        const slug = post.node.fields.slug // /test-blog-post

        createPage({
          path: `${prefix}${slug}`, // blog/test-blog-post
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

const createBlogPosts = createContentType(
  `./src/templates/blog-post.js`,
  "blog",
  `
      query GetAllBlogPosts{
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
              parent {
                ... on File {
                  id
                  name
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `,
  "blog"
)

const createContentPages = createContentType(
  `./src/templates/page.js`,
  "",
  `
      query GetAllPages{
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
              parent {
                ... on File {
                  id
                  name
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `,
  "page"
)

exports.createPages =async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await  createContentPages(createPage, graphql, reporter)
  await  createBlogPosts(createPage, graphql, reporter)
}
