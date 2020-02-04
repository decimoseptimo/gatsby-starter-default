const React = require("react")
const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const productView = path.resolve(`./src/templates/productView.js`)

  const result = await graphql(`
    {
      products: allProductsJson {
        edges {
          node {
            id
            slug
            parent_id
          }
        }
      }
      categories: allCategoriesJson {
        edges {
          node {
            id
            name
            parent_id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const products = result.data.products.edges
  const categories = result.data.categories.edges

  console.log("products: " + products.length)
  console.log("categories: " + categories.length)

  products.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: productView,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })
  })

}
