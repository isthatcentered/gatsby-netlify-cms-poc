const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require("slugify")

const removeTrailingPathSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``) // /test-blog-post/ -> /test-blog-post

exports.onCreateNode = async ({
  node,
  actions: { createNodeField },
  getNode,
}) => {
  if (node.internal.type !== `Mdx`) return

  const { sourceInstanceName } = await getNode(node.parent)

  const slug = removeTrailingPathSlash(createFilePath({ node, getNode }))
    .split("/")
    .map(slugify)
    .join("/")

  createNodeField({
    name: `slug`,
    node,
    value: slug,
  })

  createNodeField({
    name: `type`,
    node,
    value: sourceInstanceName,
  })
}

const allMdxOfTypeOrderedByDate = type => `
    query GetAllMdxByDate{
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: {fields: {type: {eq: "${type}"}}}
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
  graphql(allMdxOfTypeOrderedByDate(gatsbySourceFilesystemName)).then(
    result => {
      if (result.errors) {
        reporter.panic(result.errors)
      }

      const pages = result.data.allMdx.edges

      pages.forEach((post, index) => {
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
    }
  )

const createBlogPosts = createMdxContentType("blog")(
  `./src/templates/blog-post.tsx`,
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
