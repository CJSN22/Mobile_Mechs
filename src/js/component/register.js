import React, { Component } from "react";

export class Register extends Component {
	constructor(props) {
		super();
		this.state = { ...props };
	}
	componentDidMount() {
		window.location = this.state.route.loc;
	}
	render() {
		return <section>Redirecting...</section>;
	}
}

export default Register;