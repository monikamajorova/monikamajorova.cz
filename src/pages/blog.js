import React from "react"
import ArticleList from "../components/article-list"

import Layout from "../components/layout"

const Blog = () => {
  return (
  <Layout title="Blog">
    <h1>Mončin vývojářský blog</h1>
    <ArticleList />
  </Layout>
  )
}

export default Blog