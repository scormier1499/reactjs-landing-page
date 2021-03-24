import React from "react";
import { MyNavbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	const links = [
		{ label: "Home", url: "#" },
		{ label: "About", url: "#about" },
		{ label: "Services", url: "#services" },
		{ label: "Contact", url: "#contact" }
	];
	return (
		<div>
			<MyNavbar menu={links} brand="Start Bootstrap" />
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonURL="#"
				buttonLabel="call to action!"
			/>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-12 mb-2">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
							buttonURL="#"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-lg-3 col-12 mb-2">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
							buttonURL="#"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-lg-3 col-12 mb-2">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
							buttonURL="#"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-lg-3 col-12 mb-2">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
							buttonURL="#"
							buttonLabel="Find out more!"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
