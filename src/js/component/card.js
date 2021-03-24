import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	const card = props.cardContent.map((item, index) => {
		return (
			<div className="col-lg-3 col-12 mb-2" key={index}>
				<div className="card mx-auto ">
					<img
						src="https://placehold.it/500x325.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body text-center">
						<h5 className="card-title">{item.title}</h5>
						<p className="card-text text-center">
							{item.description}.
						</p>
						<a href={item.buttonURL} className="btn btn-primary">
							{item.buttonLabel}
						</a>
					</div>
				</div>
			</div>
		);
	});
	return card;
}

Card.defaultProps = {
	cardContent: []
};
Card.propTypes = {
	cardContent: PropTypes.array
};
