import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CategoriesMenu from "../components/categoriesMenu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CategoriesMenu/>
  </Layout>
)

export default IndexPage
