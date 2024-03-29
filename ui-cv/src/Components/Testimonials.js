import React from "react";

function Testimonials({data}) {
	if (!data || true) {
		// Testimonials disabled for now
		return ""
	}
	const testimonials = data.testimonials.map(function (
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

export default Testimonials;
