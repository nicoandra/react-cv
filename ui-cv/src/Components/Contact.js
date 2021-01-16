import React, { Component, useState } from "react";
import PropTypes from "prop-types";

function Contact(props) {
	const [loading, setLoading] = useState(false);
	const [postResult, setPostResult] = useState({ error: null, result: null });
	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactMessage, setContactMessage] = useState("");
	const [contactSubject, setContactSubject] = useState("");

	const postUrl = process.env.REACT_APP_CONTACT_FORM_POSTBACK_URL;

	const name = props.data.name,
		city = props.data.address.city,
		state = props.data.address.state,
		zip = props.data.address.zip,
		phone = props.data.phone,
		message = props.data.contactmessage;

	const resetForm = () => {
		setContactName("");
		setContactEmail("");
		setContactMessage("");
		setContactSubject("");
	};

	const onFormSubmit = () => {
		window.grecaptcha.ready(function () {
			window.grecaptcha
				.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, {
					action: "submit",
				})
				.then(function (token) {
					postForm(token);
				});
		});
	};

	const postForm = (reCaptchaToken) => {
		setLoading(true);
		fetch(postUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				contactName,
				contactEmail,
				contactMessage,
				contactSubject,
				reCaptchaToken,
			}),
		})
			.then((r) => {
				return r.json();
			})
			.then((r) => {
				setLoading(false);
				console.log("All good so far", r);
				setPostResult(r);
			})
			.catch((err) => {
				setLoading(false);
				setPostResult({
					result: null,
					error: "Was not able to submit the form. Retry later.",
				});
			});
	};

	const errorMessage = !loading && postResult.error !== null && (
		<div id="message-warning">{postResult.error}</div>
	);
	const successMessage = !loading && postResult.message !== null && (
		<div id="message-success">
			<i className="fa fa-check"></i>
			{postResult.message}
			<br />
		</div>
	);

	const submitting = loading && <div>Posting message...</div>;
	const contactForm = !loading && (
		<fieldset>
			<div>
				<label htmlFor="contactName">
					Name posting to {postUrl}{" "}
					<span className="required">*</span>
				</label>
				<input
					type="text"
					size="35"
					value={contactName}
					id="contactName"
					name="contactName"
					onChange={(evt) => setContactName(evt.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="contactEmail">
					Email <span className="required">*</span>
				</label>
				<input
					type="text"
					size="35"
					id="contactEmail"
					name="contactEmail"
					value={contactEmail}
					onChange={(evt) => setContactEmail(evt.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="contactSubject">Subject</label>
				<input
					type="text"
					size="35"
					id="contactSubject"
					name="contactSubject"
					value={contactSubject}
					onChange={(evt) => setContactSubject(evt.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="contactMessage">
					Message <span className="required">*</span>
				</label>
				<textarea
					cols="60"
					rows="15"
					id="contactMessage"
					onChange={(evt) => setContactMessage(evt.target.value)}
					name="contactMessage"
					value={contactMessage}
				/>
			</div>
			<div>
				<button className="submit" onClick={() => onFormSubmit()}>
					Submit
				</button>
				<button
					className="reset"
					onClick={() =>
						window.confirm(
							"Are you sure you want to reset the form? You'll lose any changes you made."
						) && resetForm()
					}
				>
					Reset
				</button>
				<span id="image-loader">
					<img alt="" src="images/loader.gif" />
				</span>
			</div>
		</fieldset>
	);

	return (
		<section id="contact">
			<div className="row section-head">
				<div className="two columns header-col">
					<h1>
						<span>Get In Touch.</span>
					</h1>
				</div>
				<div className="ten columns">
					<p className="lead">{message}</p>
				</div>
			</div>
			<div className="row">
				<div className="eight columns">
					{contactForm}
					{submitting}

					{errorMessage}
					{successMessage}
				</div>

				<aside className="four columns footer-widgets">
					<div className="widget widget_contact">
						<h4>Address and Phone</h4>
						<p className="address">
							{name}
							<br />
							{city},{state}
							{zip}
							<br />
							<span>{phone}</span>
						</p>
					</div>
				</aside>
			</div>
		</section>
	);
}

Contact.propTypes = {
	data: PropTypes.object,
};

export default Contact;
