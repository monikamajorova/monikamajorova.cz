import React from "react"

import Layout from "../components/layout"
import ArticleList from "../components/article-list"

const IndexPage = () => (
  <Layout title="Úvodní stránka">
    <h1>Využijte svůj počítač na maximum!</h1>
    <p>Jmenuji se Monika a jsem programátorka. prostřednictvím této stránky chci předávat návody na to, jak využít svůj počítač naplno.</p>
    <h2>Poslední články na blogu</h2>
    <ArticleList />
  </Layout>
)

export default IndexPage
