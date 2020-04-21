function generateToplistImgSrc() {
    let toplistImgSrc = "https://toplist.cz/dot.asp?id=1799006&http="+escape(document.referrer)
        +"&t="+escape(document.title)
        +"&wi="+escape(window.screen.width)
        +"&he="+escape(window.screen.height)
        +"&cd="+escape(window.screen.colorDepth);
    document.getElementById("toplistImg").src = toplistImgSrc;
}

window.addEventListener("load", generateToplistImgSrc, false);