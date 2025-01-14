import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Service";
import Contact from "./components/contact";
import {useRef} from "react";


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
            <div className="aboutMe">HaleLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”

The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. </div>
        </div>
      </section> 
      

      {/* Section 3 */}
      
      <section id="section3" className="section section3">
        <h1>Everything you need for a perfect website smha kes makodnedh jdha</h1>
        
        <main className="mainService">

        <Services
            head="Website Review"
            description="I make sure your website is performing its best by thoroughly
                reviewing it before making any changes."
          />

          <Services
            head="Business Strategy"
            description="We discuss what you are trying to achieve and place goals on your
                website planning."
          />

          <Services
            head="User Experience Design"
            description="I design your website to be as easy to use as possible while
                guiding users toward the end goal."
          />

          <Services
            head="Tailored Development"
            description="I build with your goals in mind, whether you want a simple
                flexible website or a SaaS product."
          />

          <Services
            head="Tailored Development"
            description="I build with your goals in mind, whether you want a simple
                flexible website or a SaaS product."
          />

          <Services
            head="Tailored Development"
            description="I build with your goals in mind, whether you want a simple
                flexible website or a SaaS product."
          />
        </main>
          
        
      </section>

      {/* Section 4 */}
      <section id="section4" className="section section4">
        < Contact/>
      </section>

      <footer>
        <div className="footerone">
          <img className="footerimage" src={require("./image/Tedla.jpg")} alt="" />
          <h2>Tedla Tesfaye</h2>
        </div>
        <div className="footertwo">
          <p>
            I create beautiful websites your users will love. I work with you from start to finish to make sure your goals are reached and your users are happy.
          </p>
          <div className="footernav">
          <ul>
            <h3>Quick Links</h3>
                    <li onClick={() => scrollToSection("section1")}>Home</li>
                    <li onClick={() => scrollToSection("section2")}>About</li>
                    <li onClick={() => scrollToSection("section3")}>Services</li>
          </ul>
          </div>
        </div>
        <div className="footericon">
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
        <i className="fa fa-github" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
        <div>© 2024 All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;



