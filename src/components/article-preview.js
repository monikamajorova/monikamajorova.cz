import React from "react"
import { Link } from "gatsby"
import styles from "./article-preview.module.css"

const ArticlePreview = ({ node }) => {
    return (
        <article className={styles.articlePreview}>
            <h3>
                <Link to={node.fields.slug} className={styles.link}>
                    {node.frontmatter.title}
                </Link>
            </h3>
            <span className={styles.date}> – {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
        </article>
    )
}

export default ArticlePreview