import '../styles/new-products.css';
import img1 from '../assets/nike-adapt-bb2.png';
import img2 from '../assets/multi-smart.png';
import img3 from '../assets/nike-adapt-bb-smart.png';

const Sales = () => {
	return (
		<section id="products" className="products-section">
			<div className="container">
				<div className="products-content">
					<div className="products-title">
						<h2>New Arrivals</h2>
					</div>
					<div className="products-items-grid">
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Adapt BB 2.0</h3>
								<p>Running/Athletic shoe</p>
								<p>200$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img1} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Multi Smart</h3>
								<p>Sport shoe</p>
								<p>200$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img2} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Smart Shoe 2.0</h3>
								<p>Running/Athletic shoe</p>
								<p>200$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img3} alt="product-image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sales;