import React from "react";
import nextId from "react-id-generator";
import GridWrapper from './GridWrapper'

function Hobbies({data}) {
	if(!data) return ""

	const hobbies = data.items.map(function (hobby) {
		return (<div className='hobby' key={nextId()}>
			<em>{hobby.name}</em>
			<p>{hobby.content}</p>
		</div>);
	})
    return (
		<section id="hobbies">
            <div className="row">
				<div className='twelve columns header-col'>
					<h1><span>{data.title}</span></h1>
				</div>
				<GridWrapper className="column">{hobbies}</GridWrapper>
			</div>
		</section>

	);    
}


export default Hobbies