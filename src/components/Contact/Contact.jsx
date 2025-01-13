import react from "react";
import "./Contact.css";
import { Link } from "react-router";

function Contact() {
    return (
        <>
            <section class="contact" id="contact">
                <h2>Contact Us</h2>
                <div class="contact-container">
                    <div class="contact-info">
                        <h3>Company's Information</h3>
                        <p><i class="fas fa-envelope"></i> contact@berimbolo.com</p>
                        <p><i class="fas fa-map-marker-alt"></i> 123, X1, Giza, Egypt</p>
                        <p><i class="fas fa-phone"></i> +201234567891</p>
                    </div>
                    <form class="contact-form">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="name@email.com" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit" class="submit-button">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Contact;