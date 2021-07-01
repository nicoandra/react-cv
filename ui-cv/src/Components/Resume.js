import React from "react";
import MarkdownLoader from "./MarkdownLoader";

function Resume({ data, columnSizes }) {
	if (!data) {
		return ""
	}
	const work = data.work.map(function (work, index) {
		return (
			<div key={"work" + index} class="row">
				<div class="row header-col">
					<h3>{work.title}</h3>
					<span className="info">
						{work.company}
						<span>&bull;</span>{" "}
						<em className="date">{work.years}</em>
					</span>
				</div>

				<MarkdownLoader url={work.markdownTemplate} />
			</div>
		);
	});
	
	const skills = data.skills.map(function (skills) {
		return (<div className='four columns skill'>
			<em>{skills.name}</em>
			<p>{skills.content}</p>
		</div>);
	}).reduce((prev, current, index) => {
		const targetIndex = parseInt(index / 3);
		if (prev[targetIndex] === undefined) prev[targetIndex] = [];
		prev[targetIndex].push(current);
		return prev;
	}, []).map(x => <div class="row">{x}</div>);

	return (
		<section id="resume">
			<div className="row work">
				<div className={`twelve columns header-col`}>
					<h1><span>Work Experience</span></h1>
				</div>
				<div className={`twelve columns main-col`}>{work}</div>
			</div>

			<div className="row skills">
				<div className={`twelve columns header-col`}>
					<h1>
						<span>Skills</span>
					</h1>
				</div>
				<div className={`twelve columns`}>
					<div className="bars row">
						{skills}
					</div>
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
