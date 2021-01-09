import React, { Component } from "react";
import { Button } from "primereact/button";
import logo from "../static/primereact-logo.png";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import DataTableDemo from "../Components/DataTableDemo";
import { TabMenu } from "primereact/tabmenu";


 class test extends Component {
    render() {
        return (
            <div>
                				<TabMenu
					model={this.state.items}
					activeItem={this.state.activeItem}
					onTabChange={(e) => this.setState({ activeItem: e.value })}
				/>
                test
            </div>
        )
    }
}

export default test