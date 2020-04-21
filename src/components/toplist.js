import React from "react"
import styles from "./toplist.module.css"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

const Toplist = () => (
    <>
        <Helmet>
            <script src={withPrefix("toplist.js")} type="text/javascript" />
        </Helmet>
        <img src=""
            id="toplistImg"
            alt="TOPlist"
            width="1"
            height="1"
            className={styles.toplist} />
    </>
)

export default Toplist