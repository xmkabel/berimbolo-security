import './Features.css';
function Features(){
    return(
        <section class="features" id="why">
        <h2>Why Us?</h2>
        <div class="features-grid">
            <div class="feature-card">
                <i class="fas fa-tools"></i>
                <h3>Tailored Solutions</h3>
                <p>Customizable packages for Individuals/Companies.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-users"></i>
                <h3>Expert Team</h3>
                <p>Our certified professionals ensure flawless service.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-shield-alt"></i>
                <h3>High-Quality Products</h3>
                <p>We only offer industry-leading security solutions.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-headset"></i>
                <h3>24/7 Support</h3>
                <p>Always here to address your concerns.</p>
            </div>
        </div>
    </section>
    )
}
export default Features;