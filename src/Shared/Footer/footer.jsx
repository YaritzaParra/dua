import './Footer.css'
export function Footer(){
    return(
        <>
 <body>

<footer>
    <div class="footer-container">
        <div class="footer-content-container">
            <h2 class="website-logo">Dua Lipa</h2>
            <span class="footer-info">Yaritza Parra</span>
            <span class="footer-info"></span>
        </div>
        <div class="footer-menus">
            <div class="footer-content-container">
                <span class="menu-title">legal</span>
                <a href="" class="menu-item-footer">Privacy Policy</a>
                <a href="" class="menu-item-footer">Cookies</a>
                <a href="" class="menu-item-footer">Legal Advice</a>
            </div>
        </div>
        
        <div class="footer-content-container">
            <span class="menu-title">follow us</span>
            <div class="social-container">
                <a href="https://www.facebook.com/DuaLipa/?locale=es_LA" class="social-link"></a>
                <a href="https://twitter.com/DUALIPA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="social-link"></a>
                <a href="https://www.instagram.com/dualipa/" class="social-link"></a>
            </div>
        </div>
    </div>
    <div class="copyright-container">
        <span class="copyright">Copyright 2021, itskrey.com. All rights reserved.</span>
    </div>
</footer>

</body>
        </>
    )
}