import React from "react"
import styles from "./toplist.module.css"

const Toplist = () => (<img src="https://toplist.cz/dot.asp?id=1799006
        &http={escape(document.referrer)}
        &t={escape(document.title)}
        &wi={escape(window.screen.width)}
        &he={escape(window.screen.height)}
        &cd={escape(window.screen.colorDepth)}"
     alt="TOPlist"
     width="1"
     height="1"
     className={styles.toplist} />
)

export default Toplist