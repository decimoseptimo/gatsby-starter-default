import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

const ProductView = props => {
  const { id, title, images } = props.data.productsJson

  return (
    <>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
      <Img
        fluid={images[0].childImageSharp.fluid}
        alt={title}
        key={id}
      />
      {title}
    </>
  )
}


export default ProductView

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
      price
      unit
      min_quantity
      max_quantity
      slug
      description
      images {
        childImageSharp {
          fluid(maxWidth: 1080) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`
