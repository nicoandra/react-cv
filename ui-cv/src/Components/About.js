import React from "react";

function AboutWidget({ data }) {
	const bio = data.bio;

	return (
		<>
			<h2>About Me</h2>
			<p>{bio}</p>
		</>
	);
}

function ContactDetails({ data }) {
	const name = data.name;
	const { city, state, zip } = data.address;
	const phoneNumber = data.phone;
	const linkedInUrl = data.linkedInUrl;
	return (
		<>
			<div className="columns contact-details">
				<h2>Contact Details</h2>
				<p className="address">
					<span>{name}</span>
					<br />
					<span>
						{city}, {state}, {zip}
					</span>
					<br />
					<span>Call or SMS: {phoneNumber}</span>
					<br />
					<span className="screen">
						<a href={linkedInUrl} target="_blank" rel="noreferrer">
							LinkedIn Profile
						</a>
					</span>
				</p>
			</div>
		</>
	);
}

function About({ data, columnSizes }) {
	if (!data) {
		return "";
	}
	const profilepic = "images/" + data.image;
	const resumeDownloadUrl = data.resumeDownloadUrl || "";
	return (
		<section id="about">
			<div className="row">
				<div className={`${columnSizes[0]} columns screen`}>
					<img
						className="profile-pic"
						src={profilepic}
						alt="Nicolás Andrade"
					/>
				</div>

				<div className={`${columnSizes[1]} columns screen`}>
					<AboutWidget data={data} />
					<div className="row">
						<ContactDetails data={data} />

						<div className="columns download">
							<p>
								<a href={resumeDownloadUrl} className="button">
									<i className="fa fa-download"></i>
									Download Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export {About, ContactDetails};
