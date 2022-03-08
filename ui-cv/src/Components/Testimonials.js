import React, { Component } from "react";
import PropTypes from "prop-types";

class Testimonials extends Component {
	render() {
		// No testimonials for now
		// eslint-disable-next-line
		return <br/>

		// eslint-disable-next-line
		if (this.props.data) {
			var testimonials = this.props.data.testimonials.map(function (
				testimonials
			) {
				return (
					<li key={testimonials.user}>
						<blockquote>
							<p>{testimonials.text}</p>
							<cite>{testimonials.user}</cite>
						</blockquote>
					</li>
				);
			});
		}
		
		// eslint-disable-next-line
		return (
			<section id="testimonials">
				<div className="text-container">
					<div className="row">
						<div className="two columns header-col">
							<h1>
								<span>Client Testimonials</span>
							</h1>
						</div>

						<div className="ten columns flex-container">
							<ul className="slides">{testimonials}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
Testimonials.propTypes = {
	data: PropTypes.object,
};
export default Testimonials;
