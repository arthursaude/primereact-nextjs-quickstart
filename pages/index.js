import React, { Component } from "react";
import { Button } from "primereact/button";
import logo from "../static/primereact-logo.png";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import DataTableDemo from "../Components/DataTableDemo";
import { TabMenu } from "primereact/tabmenu";

class Index extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			items: [
				{ label: "Home", icon: "pi pi-fw pi-home", link: "/" },
				{ label: "Calendar", icon: "pi pi-fw pi-calendar" },
				{ label: "Edit", icon: "pi pi-fw pi-pencil" },
				{ label: "Documentation", icon: "pi pi-fw pi-file" },
				{ label: "Settings", icon: "pi pi-fw pi-cog" },
				{ label: "Table Header Test", icon: "pi pi-fw pi-file", link: "/test" },
			]
		};
		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<div className="App">
				<TabMenu
					model={this.state.items}
					activeItem={this.state.activeItem}
					onTabChange={(e) => this.setState({ activeItem: e.value })}
				/>

				<div className="App-intro">
					<Button label="Click" icon="pi pi-check" onClick={this.increment} />

					<p>Number of Clicks: {this.state.count}</p>
				</div>

				<style jsx>{`
					.App {
						text-align: center;
						font-family: "Open Sans", "Helvetica Neue", sans-serif;
					}

					.App-logo {
						animation: App-logo-spin infinite 20s linear;
						height: 80px;
					}

					.App-header {
						background-color: #222;
						height: 190px;
						padding: 20px;
						color: white;
					}

					.App-intro {
						padding: 2em;
						font-size: large;
					}
				`}</style>
			</div>
		);
	}
}

export default Index;
