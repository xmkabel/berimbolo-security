import react from "react";
import { Link } from "react-router";
import './Testimonials.css'
function Testimonials(){
    return(
        <section class="testimonials" id="reviews">
        <h2>Testimonials</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p>"Berimbolo Security provides cutting-edge technology and unmatched professionalism, ensuring complete peace of mind."</p>
                <div class="testimonial-author">
                    <img src={require('./Sara.png')} alt="Sara Ahmed Avatar" class="avatar"/>
                    <div>
                        <span class="h4">Sara Ahmed</span>
                        <p>@saraahmed00</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <p>"Surely Recommended! Advanced tech, seamless protection. Sleep easy knowing your world is secured like never before."</p>
                <div class="testimonial-author">
                    <img src={require('./Musk.png')} alt="Elon Musk Avatar" class="avatar"/>
                    <div>
                    <span class="h4">Elon Musk</span>
                    <p>@elonmusk</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <p>"Safety reimagined. Berimbolo Security combines innovation and reliability to deliver unparalleled peace of mind."</p>
                <div class="testimonial-author">
                    <img src={require('./Kabel.png')} alt="Mohamed Kabel Avatar" class="avatar"/>
                    <div>
                    <span class="h4">Mohamed Kabel</span>
                    <p>@mohamedkabel</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonials;