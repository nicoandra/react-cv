import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
	render() {
		if (!this.props.data) {
			return (< Fragment/>)
		}
		var networks = this.props.data.social.map(function (network) {
			return (
				<li key={network.name}>
					<a href={network.url}>
						<i className={network.className}></i>
					</a>
				</li>
			);
		});

		return (
			<footer>
				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">{networks}</ul>

						<ul className="copyright">
							<li>From a design made by Tim Baker, &copy; Copyright 2017</li>
							<li>
								Design by{" "}
								<a
									title="Styleshout"
									href="http://www.styleshout.com/"
								>
									Styleshout
								</a>
							</li>
						</ul>
					</div>
					<div id="go-top">
						<a
							className="smoothscroll"
							title="Back to Top"
							href="#home"
						>
							<i className="icon-up-open"></i>
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
	data: PropTypes.object,
};
export default Footer;
