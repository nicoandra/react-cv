import React from "react";
import MarkdownLoader from "./MarkdownLoader";

function Hobbies(props) {
    return (
		<section id="hobbies">
            <div class="row">
			<div className={`twelve columns header-col`}>
                    <h1><span>Hobbies</span></h1>
                </div>
            </div>
			<div className={`twelve columns main-col`}>
				<MarkdownLoader url="/markdown/hobbies.md" />
			</div>
		</section>
	);    
}


export default Hobbies