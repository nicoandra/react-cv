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
									{city} {state}, {zip}
								</span>
								<br />
								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<button onClick={window.print} className="button screen">
									<i className="fa fa-print"></i>
									Print Resume
								</button>
								<a href={resumeUrl} className="button print">
									<i className="fa fa-link"></i>
									Visit website
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
