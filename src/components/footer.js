import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"

const Footer = ({ author }) => (
    <footer className={styles.footer}>
        V roce 2020 vytvořila {author}. | {" "}
        <Link to="/monika/">O mně</Link> | {" "}
        <Link to="/blog/">Blog</Link> | {" "}
        <Link to="/kontakt/">Kontakt</Link> | {" "}
    </footer>
)

export default Footer