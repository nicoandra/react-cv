import React, { Component } from "react";
import MarkdownLoader from "./MarkdownLoader";

import PropTypes from "prop-types";

class Resume extends Component {
	render() {
		if (this.props.data) {
			var skillmessage = this.props.data.skillmessage;
			var work = this.props.data.work.map(function (work, index) {
				const workTitle = work.company.length ? (
					<h3>
						{work.link ? (
							<a href={work.link} target="_blank">
								{work.company}
							</a>
						) : (
							work.company
						)}
					</h3>
				) : (
					false
				);
				return (
					<div key={"work" + index}>
						{workTitle}
						<p className="info">
							{work.title}
							<span>&bull;</span>{" "}
							<em className="date">{work.years}</em>
						</p>
						<MarkdownLoader url={work.markdownTemplate} />
					</div>
				);
			});
			var skills = this.props.data.skills.map(function (skills) {
				return (
					<li className="skillCell" key={skills.name}>
						<em>{skills.name}</em>
						<p>{skills.content}</p>
					</li>
				);
			});
		}

		return (
			<section id="resume">
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span>Work</span>
						</h1>
					</div>
					<div className="nine columns main-col">{work}</div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						{skillmessage && <p>{skillmessage}</p>}
						<div className="bars">
							<ul className="skills">{skills}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

Resume.propTypes = {
	data: PropTypes.object,
};
export default Resume;
