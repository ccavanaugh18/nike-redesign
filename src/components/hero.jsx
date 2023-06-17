import '../styles/hero.css';
import img0 from "../assets/hero-shoe.png";

const Hero = () => {
	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero-content">
					<div className="hero-title">
						<h1>Perform Better with Nike Electric 2.0</h1>
						<a href="#products">View Products</a>
					</div>
					<div className="shoe-img">
						<img src={img0} alt="shoe-img" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;