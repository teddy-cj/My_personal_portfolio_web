

export default function() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      };
    return(
        <header>
            <nav className="navbar">
                <div className="navdiv">
                    <label className="logo">
                        TedlaCode
                    </label>
                    <ul>
                    <li onClick={() => scrollToSection("section1")}>Home</li>
                    <li onClick={() => scrollToSection("section2")}>About</li>
                    <li onClick={() => scrollToSection("section3")}>Projects</li>
                    <li onClick={() => scrollToSection("section3")}>Skills</li>
                    <li onClick={() => scrollToSection("section3")}>
                        <a href="https://docs.google.com/document/d/1G-3X4e3qOFdn5NcgzgEyteyULNG6b6aA1m6pS1focvE/edit?usp=sharing" target="_blank"><span style={{color: "white"}}>Resume</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}