import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <div>
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
        date
      }
    }
  }
`