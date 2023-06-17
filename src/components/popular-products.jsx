import '../styles/new-products.css';
import img4 from '../assets/adapt-rose-bb.png';
import img5 from '../assets/air-premium.png';
import img6 from '../assets/force-green.png';
import img7 from '../assets/air-low-premium.png';
import img8 from '../assets/air-max-black.png';
import img9 from '../assets/old-max.png';
import img10 from '../assets/lime-jordan-11.png';
import img11 from '../assets/jordan-pr3.png';
import img12 from '../assets/zoom-max.png';

const SalesCont = () => {
	return (
		<section id="products" className="products-section">
			<div className="container">
				<div className="products-content">
					<div className="products-title">
						<h2>Best Sellers</h2>
					</div>
					<div className="products-items-grid">
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Adapt BB Rose</h3>
								<p>Sport shoe</p>
								<p>150$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img4} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Air Premium</h3>
								<p>Running/Athletic shoe</p>
								<p>150$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img5} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Air Force Green</h3>
								<p>Running/Athletic shoe</p>
								<p>150$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img6} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Air Low Premium</h3>
								<p>Skate shoe</p>
								<p>125$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img7} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Air Max</h3>
								<p>Sport shoe</p>
								<p>150$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img8} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Old Max X</h3>
								<p>Running/Athletic shoe</p>
								<p>150$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img9} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Lime Jordan 11</h3>
								<p>Sport shoe</p>
								<p>140$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img10} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Air Jordan PR3</h3>
								<p>Sport shoe</p>
								<p>150$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img11} alt="product-image" />
							</div>
						</div>
						<div className="item-div">
							<div className="div-title">
								<h3>Nike Zoom Max</h3>
								<p>Sport shoe</p>
								<p>160$</p>
							</div>
							<div className="buy-button">
								<button id="buyBtn" className="buy-button">Buy Now</button>
							</div>
							<div className="product-image">
								<img src={img12} alt="product-image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SalesCont;