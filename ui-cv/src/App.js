import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Hobbies from './Components/Hobbies'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resumeData: {},
			ready: false,
		};
	}

	getResumeData() {
		$.ajax({
			url: "/resumeData.json",
			dataType: "json",
			cache: true,
			success: function (data) {
				this.setState({ resumeData: data, ready: true });
			}.bind(this),
			error: function (xhr, status, err) {
				// TODO Add a nicer error message
				console.log(err);
			},
		});
	}

	componentDidMount() {
		this.getResumeData();
	}

	render() {
		if (!this.state.ready) {
			return <div className="App">Loading...</div>;
		}

		const columnSizes = ['two', 'ten'];
		// const columnSizes = ['three', 'nine'];

		return (
			<div className="App">
				<Header data={this.state.resumeData.main} />
				<About data={this.state.resumeData.main} columnSizes={columnSizes}/>
				<Resume data={this.state.resumeData.resume} columnSizes={columnSizes}/>
				<Hobbies />
				<Testimonials data={this.state.resumeData.testimonials} />
				<Contact data={this.state.resumeData.main} />
				<Footer data={this.state.resumeData.main} />
			</div>
		);
	}
}

export default App;
