import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Footer(props) {
	return (
		<footer className="footer py-5 mt-4 bg-dark text-white text-center">
			<div className="container">
				<span>{props.description}</span>
			</div>
		</footer>
	);
}

Footer.defaultProps = {
	description: "Copyright© Your Website 2021"
};
Footer.propTypes = {
	description: PropTypes.string
};
