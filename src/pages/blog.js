import React from "react"
import { graphql } from "gatsby"
import ArticlePreview from "../components/article-preview"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <SEO title="Blog" />
    {data.allMarkdownRemark.edges.map(({node}) => (
        <ArticlePreview key={node.id} node={node} />
    ))}
  </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD. MM. YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
