import React, { useEffect, useRef} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/contact";



const App = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const slideRef = useRef(null);

  const handleNext = () => {
      if (slideRef.current) {
      const items = slideRef.current.children;
      slideRef.current.appendChild(items[0]);
      }
  };

  const handlePrev = () => {
      if (slideRef.current) {
      const items = slideRef.current.children;
      slideRef.current.insertBefore(items[items.length - 1], items[0]);
      }
  };
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  }, []);

  


  return (
    <div className="App">
      {/* Navbar */}
      < Navbar/>
      

      {/* Section 1 */}
      <section id="section1" className="section section1">
        <div className="hero">
          <span className="text1">Design. Build. Improve.</span>
          <span className="text2">I create beautiful websites your users will love</span>
          <button onClick={() => scrollToSection("section4")}>Make it happen</button>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="section section2">
        <div className="aboutItem">
            <div className="myImage">
              <img className="myimage" src={require("./image/Tedla.jpg")} alt="" />
            </div>
            <div className="aboutMe">
            <h1>About Me</h1>Hi, I'm Tedla Tesfaye, a passionate web developer from Ethiopia, currently pursuing my bachelor's degree at African Leadership University. With over two years of experience in front-end development, I specialize in crafting intuitive and visually appealing websites using HTML, CSS, JavaScript, React, and other cutting-edge technologies.

I’ve had the privilege of working with various companies, delivering solutions that meet user needs while aligning with business goals. Beyond web development, I’m deeply intrigued by the potential of machine learning and aspire to specialize in this transformative field in the near future.

Creativity, collaboration, and leadership are at the heart of my work style. Whether I’m working independently or as part of a team, I thrive on solving problems, communicating ideas effectively, and driving projects to success.

Let’s build something incredible together!</div>
        </div>
      </section> 
      

      {/* Section 3 */}
      
      <section id="section3" className="section section3">
        <Skills/>
      </section>

      {/* Section 4 */}
      <section id="section4" className="section section4">
        < Contact/>
      </section>

      <footer>
        <div className="footerone">
          <div className="footerimage-container">
           <img className="footerimage" src={require("./image/Tedla.jpg")} alt="" />
          </div>
          
          <h2>Tedla Tesfaye</h2>
        </div>
        <div className="footertwo">
          
          <div  className="footeraboutme">
            <div className="footer-aboutme">
            I create beautiful websites your users will love. I work with you from start to finish to make sure your goals are reached and your users are happy.
            </div>

          </div> 
          <div className="footernav">
          <ul>
            <h3>Quick&nbsp;Links</h3>
                    <li onClick={() => scrollToSection("section1")}>Home</li>
                    <li onClick={() => scrollToSection("section2")}>About</li>
                    <li onClick={() => scrollToSection("section3")}>Services</li>
                    <li onClick={() => scrollToSection("section1")}>Home</li>
                    <li onClick={() => scrollToSection("section2")}>About</li>
                    <li onClick={() => scrollToSection("section3")}>Services</li>
          </ul>
          </div>
          <div className="footeradress">
            <h1>Address</h1>
            <h3>Rwanda,&nbsp;Kigali</h3>
          </div>
        </div>
        <div className="footericon">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=teddy825@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            ><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
        <a className="icon"
                            href="https://www.linkedin.com/in/tedla-tesfaye-138834298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuAbm%2Fie9RcKNmvkJwG513Q%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            >
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a className="icon"
                            href="https://github.com/teddy-cj"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            >
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </a>

                            <a className="icon"
                            href="https://www.instagram.com/teddy_ccj/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            >
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
        </div>
        <div>&copy;<span id="year"></span> All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;



