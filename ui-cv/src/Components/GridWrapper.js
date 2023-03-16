import React from "react";

function GridWrapper({title, children, className}) {
	const classNameToUse = className || 'none'
	if(!children) return "";
	return(
		<div className="twelve columns grid-wrapper">
			{title ? <h3>{title}</h3> : ''}
			<div className={`as-table ${classNameToUse}`}>
				{children}
			</div>
		</div>
	)
}

export default GridWrapper