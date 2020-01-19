import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const CategoriesMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allCategoriesJson {
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

  const propsCategories = data.allCategoriesJson.edges
  const categories = propsCategories.map(i => i.node)
  console.log(categories)
  return (
    <>
      <h1>CategoriesMenu</h1>
    </>
  )
}

export default CategoriesMenu
