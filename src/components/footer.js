import React from "react"
import { Link } from "gatsby"

const Footer = ({ author }) => (
    <footer>
        V roce 2020 vytvořila {author}. | {" "}
        <Link to="/monika/">O mně</Link> | {" "}
        <Link to="/blog/">Blog</Link> | {" "}
        <Link to="/kontakt/">Kontakt</Link> | {" "}
    </footer>
)

export default Footer