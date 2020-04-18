import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArticlePreview from "../components/article-preview"

const ArticleList = () => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <ArticlePreview key={node.id} node={node} />
      ))}
    </>
  )
}

export default ArticleList