import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	return (
		<div className="card mx-auto">
			<img
				src="https://placehold.it/500x325.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text text-center">{props.description}.</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}

Card.defaultProps = {
	title: "Card Title",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
	buttonLabel: "Find out more!",
	buttonURL: "#"
};
Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
