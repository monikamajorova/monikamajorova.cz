import React from "react"

import Layout from "../components/layout"
import ArticleList from "../components/article-list"


const Blog = () => {
  return (
  <Layout title="Blog">
    <h1>Mončin vývojářský blog</h1>
    <ArticleList />
  </Layout>
  )
}

export default Blog