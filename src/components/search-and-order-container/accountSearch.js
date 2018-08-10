import React, { Component } from "react";
import "./accountSearch.css";

export default class AccountSearch extends Component {
	constructor(props){
		super(props);
		this.state = {
			CCI: " ",
			phoneNumber: " "
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		console.log(`handle change ${this.state}`);
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event){
		console.log("submit");
		console.log(this.state);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<div className="account-search">
					<form onSubmit={this.handleSubmit}>
						<h3>Account Search</h3>
						<div className="cci">
							<label htmlFor="cci">CCI</label>
							<input 
								type="text" 
								name="CCI" 
								id="cci" 
								placeholder="1-A3C-2BI45" 
								onChange={this.handleChange} />
						</div>
						<div className="phone-number">
							<label htmlFor="phone-number">Phone Number</label>
							<input 
								type="text" 
								name="phoneNumber" 
								id="phone-number" 
								placeholder="2042221111" 
								onChange={this.handleChange} />
						</div>
						<input type="submit" value="Search" />
					</form>
				</div>
			</div>
		);
	}
}
