import React, { Component } from 'react';
import './orderSummary.css';

export default class OrderSummary extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){

	}

	handleSubmit(event){
		console.log("submit");
		console.log(this.state);
		event.preventDefault();
	}

	render() {
		return (
			<form className="order-summary" onSubmit={this.handleSubmit}>
				<h3>Order Summary</h3>
				<div className="current-services">
					<p>Current Services</p>
					<div className="current-services-display">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tempore, atque totam vero ratione. Recusandae hic ut error pariatur odio tenetur cupiditate nostrum et eos. Vero repellat corrupti, nobis molestiae.</div>
				</div>
				<div className="service-changes">
					<p>Changes</p>
					<div className="changes-display">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nesciunt tempore deleniti unde cum, ipsum iure aliquid soluta omnis voluptatibus, aliquam saepe quaerat, illo magnam ducimus quidem, vel eaque aspernatur!</div>
				</div>
				<div className="shiny">	
					<input  type="submit" value='checkout'/>
				</div>
			</form>
		);
	}
}
