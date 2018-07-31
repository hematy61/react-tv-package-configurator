import React, { Component } from 'react';
import './headerContainerPreload.css'
import HeaderPreload from './headerPreload.js';

export class HeaderContainerPreload extends Component {
	constructor(props){
		super(props);
		this.state = {addedClass: ['header-container']};
	}

	

	render() {
		if (!this.state.addedClass.includes("make-hidden")) {
			setTimeout(()=>{
				this.setState({addedClass: this.state.addedClass + " " + "make-hidden"});
			}, 3000);
		}
		
		return (
			<div className={this.state.addedClass}>
				<HeaderPreload />
			</div>
		);
	}
}


export default HeaderContainerPreload;