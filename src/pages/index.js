import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Využijte svůj počítač na maximum!</h1>
    <p>Jmenuji se Monika a jsem programátorka. prostřednictvím této stránky chci předávat návody na to, jak využít svůj počítač naplno.</p>
    <h2>Poslední články na blogu</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
