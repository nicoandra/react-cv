import React from "react";
import MarkdownLoader from "./MarkdownLoader";
import nextId from "react-id-generator";

import GridWrapper from './GridWrapper'

function Resume({ resume, hobbies }) {
	if (!resume) {
		return ""
	}

	const hobbiesList = hobbies.items.map(function (hobby) {
		return (<div key={nextId()}>
			<em>{hobby.name}</em>
			<p>{hobby.content}</p>
		</div>);
	})

	const work = resume.work.map(function (work, index) {
		const technologies = work.technologies?.map(function (technology) {
			return (<div className='technology' key={nextId()}>
				<em>{technology.name}</em>
				<p>{technology.content}</p>
			</div>);
		})

		return (
			<div key={"work" + index} className="row">
				<div className="row header-col">
					<h3>{work.title}</h3>
					<span className="info">
						{work.company}
						<span>&bull;</span>{" "}
						<em className="date">{work.years}</em>
					</span>
				</div>

				<MarkdownLoader url={work.markdownTemplate} />
				<GridWrapper >{technologies}</GridWrapper>
			</div>
		);
	});

	const skills = resume.skills.map(function (skills) {
		return (<div className='skill' key={nextId()}>
			<em>{skills.name}</em>
			<p>{skills.content}</p>
		</div>);
	})

	return (
		<section id="resume">
			<div className="row resume">
				<div className={`twelve columns header-col work`}>
					<div className={`twelve columns header-col`}>
						<h1><span>Work Experience</span></h1>
					</div>
					<div className='twelve columns main-col'>{work}</div>
				</div>
				<div className={`twelve columns header-col skills`}>
					<h1><span>Skills</span></h1>
					{skills}
					<h1><span>Hobbies</span></h1>
					{hobbiesList}
				</div>
			</div>


			<div className="row open-source">
				<div className={`twelve columns header-col`}>
					<h1><span>Open Source Contributions</span></h1>
				</div>
				<div className={`twelve columns main-col`}>
					<MarkdownLoader url="/markdown/open-source.md" />
				</div>
			</div>
		</section>
	);
}

export default Resume;
