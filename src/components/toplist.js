import React from "react"
import styles from "./toplist.module.css"
import { Helmet } from "react-helmet"

const Toplist = () => (
    <>
        <img src=""
            id="toplistImg"
            alt="TOPlist"
            width="1"
            height="1"
            className={styles.toplist} />
        <Helmet>
            <script>
                const toplistImgSrc = "https://toplist.cz/dot.asp?id=1799006&http="+escape(document.referrer)
    +"&t="+escape(document.title)
    +"&wi="+escape(window.screen.width)
    +"&he="+escape(window.screen.height)
    +"&cd="+escape(window.screen.colorDepth);
                document.getElementById("toplistImg").src = toplistImgSrc;
            </script>
        </Helmet>
    </>
)

export default Toplist