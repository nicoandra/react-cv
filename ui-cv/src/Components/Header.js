import React, { Component } from "react";
import PropTypes from "prop-types";


function NavBar({visible}) {
	if (!visible) return ""; // NavBar is disabled

	return (<nav id="nav-wrap">
	<ul id="nav" className="nav">
		<li className="current">
			<a className="smoothscroll" href="#home">
				Home
			</a>
		</li>
		<li>
			<a className="smoothscroll" href="#about">
				About
			</a>
		</li>
		<li>
			<a className="smoothscroll" href="#resume">
				Resume
			</a>
		</li>
		<li>
			<a className="smoothscroll" href="#testimonials">
				Testimonials
			</a>
		</li>
		<li>
			<a className="smoothscroll" href="#contact">
				Contact
			</a>
		</li>
	</ul>
</nav>)
}
class Header extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var occupation = this.props.data.occupation;
			var description = this.props.data.description;
			var city = this.props.data.address.city;
			var networks = this.props.data.social.map(function (network) {
				return (
					<li key={network.name}>
						<a href={network.url}>
							<i className={network.className}></i>
						</a>
						<span>{network.url}</span>
					</li>
				);
			});
		}

		return (
			<header id="home">
				<NavBar visible={false} />
				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">
							{name}
						</h1>
						<h3>
							<span id="onScreenIntro">I&apos;m a {city} based <span>{occupation}</span>.</span>
							{description}
						</h3>
						<hr />
						<ul className="social">{networks}</ul>
					</div>
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about">
						<i className="icon-down-circle"></i>
					</a>
				</p>
			</header>
		);
	}
}
Header.propTypes = {
	data: PropTypes.object,
};

export default Header;
