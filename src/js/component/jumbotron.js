import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Jumbotron(props) {
	return (
		<div className="container mt-4 pt-5">
			<div className="jumbotron rounded">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead"> {props.description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonURL}
					role="button">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}

Jumbotron.defaultProps = {
	title: "A Warm Welcome!",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	buttonLabel: "call to action!",
	buttonURL: "#"
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
