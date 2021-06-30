import React from "react";
import MarkdownLoader from "./MarkdownLoader";

function Resume({data, columnSizes }) {
	if(!data) {
		return ""
	}

	var skillmessage = data.skillmessage;
	var work = data.work.map(function (work, index) {
		const workTitle = work.company.length ? (
			<h3>
				{work.link ? (
					<a href={work.link} target="_blank" rel="noreferrer">
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
	var skills = data.skills.map(function (skills) {
		return (
			<li className="skillCell" key={skills.name}>
				<em>{skills.name}</em>
				<p>{skills.content}</p>
			</li>
		);
	});	
	return (
		<section id="resume">
			<div className="row work">
				<div className={`${columnSizes[0]} columns header-col`}>
					<h1>
						<span>Work</span>
					</h1>
				</div>
				<div className={`${columnSizes[1]} columns main-col`}>{work}</div>
			</div>

			<div className="row skill">
				<div className={`${columnSizes[0]} columns header-col`}>
					<h1>
						<span>Skills</span>
					</h1>
				</div>
				<div className={`${columnSizes[1]} columns main-col`}>
					{skillmessage && <p>{skillmessage}</p>}
					<div className="bars">
						<ul className="skills">{skills}</ul>
					</div>
				</div>
			</div>

			<div className="row open-source">
				<div className={`${columnSizes[0]} columns header-col`}>
					<h1>
						<span>Contributions to Open Source projects</span>
					</h1>
				</div>
				<div className={`${columnSizes[1]} columns main-col`}>
					<MarkdownLoader url="/markdown/open-source.md" />
				</div>
			</div>				
		</section>
	);
}

export default Resume;
