import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./article.module.css"

export default ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout title={article.frontmatter.title} description={article.excerpt}>
      <div className={styles.article}>
        <h1>{article.frontmatter.title}</h1>
        <p>{article.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        date(formatString: "DD. MM. YYYY")
      }
      excerpt
    }
  }
`