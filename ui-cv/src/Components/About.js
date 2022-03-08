<<<<<<< HEAD
import React, { Component } from "react";
import PropTypes from "prop-types";
class About extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var profilepic = "images/" + this.props.data.image;
			var bio = this.props.data.bio;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			var linkedInUrl = this.props.data.linkedInUrl
			var resumeDownload = this.props.data.resumedownload;
		}
=======
import React from "react";
>>>>>>> main

function About({data, columnSizes}) {

	if (!data) {
		return "";
	}
	const name = data.name;
	const profilepic = "images/" + data.image;
	const bio = data.bio;
	const street = data.address.street;
	const { city, state, zip } = data.address;
	const phone = data.phone;
	const email = data.email;
	const resumeUrl = data.resumeUrl;
	
	return (
		<section id="about">
			<div className="row">
				<div className={`${columnSizes[0]} columns`}>
					<img
						className="profile-pic"
						src={profilepic}
						alt="Nicolás Andrade"
					/>
				</div>
				<div className={`${columnSizes[1]} columns`}>
					<h2>About Me</h2>
					<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details screen">
							<h2>Contact Details</h2>
							<p className="address">
								<span>{name}</span>
								<br />
								<span>
									{street}
									<br />
									<span>
										{city} {state}, {zip}
									</span>
									<br />
									<span><a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn Profile</a></span>
								</p>
							</div>
							<div className="columns download">
								<p>
									<a href={resumeDownload} className="button">
										<i className="fa fa-download"></i>
										Download Resume
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
