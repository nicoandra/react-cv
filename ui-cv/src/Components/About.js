import React from "react";

function About({data, columnSizes}) {

	if (!data) {
		return "";
	}
	const name = data.name;
	const profilepic = "images/" + data.image;
	const bio = data.bio;
	const street = data.address.street;
	const { city, state, zip } = data.address;
	const resumeDownloadUrl = data.resumeDownloadUrl || '';
	const linkedInUrl = data.linkedInUrl
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
								<span>{name}</span><br />
								<span>{street}</span><br />
								<span>{city} {state}, {zip}</span><br />
								<span><a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn Profile</a></span>
							</p>
						</div>
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

export default About;
