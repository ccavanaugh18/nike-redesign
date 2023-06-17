import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/navbar.css';
import logo from '../assets/nike-logo.png';
const { faMagnifyingGlass, faHeart, faBagShopping } = require("@fortawesome/free-solid-svg-icons");

const Navbar = () => {
	return (
		<nav className="">
			<div className="container">
				<div className="nav-content">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<ul className="navbar-icons">
						<li><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /></li>
						<li><FontAwesomeIcon icon={faHeart} className="icon" /></li>
						<li><FontAwesomeIcon icon={faBagShopping} className="icon" /></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;