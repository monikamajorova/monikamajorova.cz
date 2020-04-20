import React from "react"
import { Link } from "gatsby"
import Toplist from "./toplist"
import styles from "./footer.module.css"

const Footer = ({ author }) => (
    <footer className={styles.footer}>
        V roce 2020 vytvořila {author}. | {" "}
        <Link to="/monika/">O mně</Link> | {" "}
        <Link to="/blog/">Blog</Link> | {" "}
        <Link to="/kontakt/">Kontakt</Link> | {" "}
        <Toplist />
    </footer>
)

export default Footer