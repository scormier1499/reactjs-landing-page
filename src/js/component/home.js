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
	const cardContent = [
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonLabel: "Find out more!",
			buttonURL: "#"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonLabel: "Find out more!",
			buttonURL: "#"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonLabel: "Find out more!",
			buttonURL: "#"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonLabel: "Find out more!",
			buttonURL: "#"
		}
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
				<div className="row">
					<Card cardContent={cardContent} />
				</div>
			</div>

			<Footer />
		</div>
	);
}
