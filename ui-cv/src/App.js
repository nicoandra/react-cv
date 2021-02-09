import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

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
			cache: false,
			success: function (data) {
				this.setState({ resumeData: data, ready: true });
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
				alert(err);
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

		return (
			<div className="App">
				<Header data={this.state.resumeData.main} />
				<About data={this.state.resumeData.main} />
				<Resume data={this.state.resumeData.resume} />
				<Testimonials data={this.state.resumeData.testimonials} />
				<Contact data={this.state.resumeData.main} />
				<Footer data={this.state.resumeData.main} />
			</div>
		);
	}
}

export default App;
