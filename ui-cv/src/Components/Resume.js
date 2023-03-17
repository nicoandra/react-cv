import React from "react";
import MarkdownLoader from "./MarkdownLoader";
import nextId from "react-id-generator";

import GridWrapper from './GridWrapper'

function Resume({ resume, hobbies }) {
	if (!resume) {
		return ""
	}

	const hobbiesList = false && hobbies.items.map(function (hobby) {
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
			<div key={"work" + index} className="work-position">
				<div className="header-col">
					<h1>{work.title}</h1>
					<span className="info">
						{work.company}
						<span>&bull;</span>{" "}
						<em className="date">{work.years}</em>
					</span>
				</div>

				<MarkdownLoader url={work.markdownTemplate} />
				{technologies.length > 0 && <GridWrapper >{technologies}</GridWrapper>}
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
					<div className={`header-col`}>
						<h3>Work Experience</h3>
					</div>
					<div className='main-col'>{work}</div>
				</div>
			</div>
			<div className="row">
				<div className={`twelve columns header-col skills`}>
					<h1><span>Skills</span></h1>
					<GridWrapper >{skills}</GridWrapper >
					
					{hobbiesList && <>
							<h1>Hobbies</h1>
							{hobbiesList}
					</>}
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
