const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const removeTrailingPathSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``) // /test-blog-post/ -> /test-blog-post

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type !== `Mdx`) return

  const value = removeTrailingPathSlash(createFilePath({ node, getNode }))

  createNodeField({
    name: `slug`,
    node,
    value,
  })
}

const isGatsbyFilesystemSourceType = type => ({ node }) =>
  node.parent.sourceInstanceName === type

const allMdxOrderedByDate = `
    query GetAllMdxByDate{
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
                sourceInstanceName
              }
            }
          }
        }
      }
  }
`

const createMdxContentType = gatsbySourceFilesystemName => (
  templatePath,
  prefix
) => (createPage, graphql, reporter) =>
  graphql(allMdxOrderedByDate).then(result => {
    if (result.errors) {
      reporter.panic(result.errors)
    }

    const pages = result.data.allMdx.edges

    pages
      .filter(isGatsbyFilesystemSourceType(gatsbySourceFilesystemName))
      .forEach((post, index) => {
        const previous =
          index === pages.length - 1 ? null : pages[index + 1].node
        const next = index === 0 ? null : pages[index - 1].node
        const slug = post.node.fields.slug // /test-blog-post

        createPage({
          path: `${prefix}${slug}`, // blog/test-blog-post
          component: path.resolve(templatePath),
          context: {
            slug,
            previous,
            next,
          },
        })
      })

    return null
  })

const createBlogPosts = createMdxContentType("blog")(
  `./src/templates/blog-post.js`,
  "blog"
)

const createContentPages = createMdxContentType("page")(
  `./src/templates/page.tsx`,
  ""
)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await Promise.all([
    createContentPages(createPage, graphql, reporter),
    createBlogPosts(createPage, graphql, reporter),
  ])
}
