
import 'font-awesome/css/font-awesome.min.css';
export default function contact() {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>I will write something here</p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>This is my address</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Linkedin</h3>
                            <p>This is my address</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i class="fa fa-github" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Github</h3>
                            <p>This is my address</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>This is my phone</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>This is my email</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"></textarea>
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