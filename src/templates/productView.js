import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

const ProductView = props => {
  const { product_id, title, images } = props.data.productsJson

  return (
    <>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
      <Img
        fluid={images[0].childImageSharp.fluid}
        alt={title}
        key={product_id}
      />
      {title}
    </>
  )
}


export default ProductView

export const query = graphql`
  query($product_id: String!) {
    productsJson(product_id: { eq: $product_id }) {
      product_id
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
