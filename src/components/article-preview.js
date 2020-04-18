import React from "react"
import { Link } from "gatsby"

const ArticlePreview = ({ node }) => {
    return (
    <article>
      <Link to={node.fields.slug}>
        <h3>{node.frontmatter.title}</h3>
        {node.frontmatter.date}
        <p>{node.excerpt}</p>
      </Link>
    </article>
    )
}

export default ArticlePreview