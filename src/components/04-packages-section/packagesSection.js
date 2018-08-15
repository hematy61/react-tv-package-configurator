import React, { Component } from 'react';

class PackagesSection extends Component {
	render() {
		return (
			<div>
				<h1>this is a test {this.props.groupsNames[0].name}</h1>
			</div>
		);
	}
}

export default PackagesSection;
