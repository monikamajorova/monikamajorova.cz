import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >
    <Link to="/" className={styles.title}>
      {siteTitle}
    </Link>
    <nav className={styles.nav}>
        <Link to="/monika/" className={styles.link}>O mně</Link>
        <Link to="/blog/" className={styles.link}>Blog</Link>
        <Link to="/kontakt/" className={styles.link}>Kontakt</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
