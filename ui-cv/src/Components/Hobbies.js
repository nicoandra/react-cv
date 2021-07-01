import React from "react";

function Hobbies({data}) {
	if(!data) return ""

	const hobbies = data.hobbies.map(function (hobby) {
		return (<div className='hobby'>
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
				<div className='twelve columns'>
					<div className="as-table">
						{hobbies}
					</div>
				</div>
			</div>
		</section>

	);    
}


export default Hobbies