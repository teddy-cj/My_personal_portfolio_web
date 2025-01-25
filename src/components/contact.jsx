import react from 'react'
import Swal from 'sweetalert2'
import 'font-awesome/css/font-awesome.min.css';

export default function contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d4050112-57c9-42c0-963d-ae000c9f3fa1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
              });
        }
      };
    
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Me</h2>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                        <a className="icon"
                            href="https://www.linkedin.com/in/tedla-tesfaye-138834298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuAbm%2Fie9RcKNmvkJwG513Q%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            >
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            </div>
                        <div className="text">
                            <a 
                            href="https://www.linkedin.com/in/tedla-tesfaye-138834298?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuAbm%2Fie9RcKNmvkJwG513Q%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            >
                                <h3>Linkedin</h3>
                            </a>
                            <p>Tedla Tesfaye</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            
                            <a className="icon"
                            href="https://github.com/teddy-cj"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            >
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                            </div>
                        <div className="text">
                            <a href="https://github.com/teddy-cj"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}>
                            <h3>Github</h3>
                            </a>
                            <p>@teddy-cj</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <a href="tel:+250795913669"
                             target="_blank"
                             rel="noopener noreferrer"
                             style={{ color: "white", textDecoration: 'none'}}><i className="fa fa-phone" aria-hidden="true"></i></a>
                            </div>
                        <div className="text">
                            <a href="tel:+250795913669"
                             target="_blank"
                             rel="noopener noreferrer"
                             style={{ color: "white", textDecoration: 'none'}}><h3>Phone</h3></a>
                            <p>+250795913669</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=teddy825@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}
                            ><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </div>
                        <div className="text">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=teddy825@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: 'none'}}><h3>Email</h3></a>
                            <p>teddycj825</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form onSubmit={onSubmit}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="name" required="required"/>
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="email" required="required"/>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea name='message' required="required"></textarea>
                            <span>Type your Message...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="" value="send"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}