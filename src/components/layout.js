import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import Toplist from "./toplist"
import "./layout.css"
import styles from "./layout.module.css"

const Layout = ({ title, description, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <>
      {title && <SEO title={title} description={description} />}
      <div className={styles.layout}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={styles.main}>{children}</main>
        <Footer author={data.site.siteMetadata.author} />
        <Toplist />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
