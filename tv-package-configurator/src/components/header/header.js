import React from 'react';
import './header.css'

const Header = ()=>{
		return (
			<div className='header'>
				<h1>TV Package Configurator</h1>
				<div className="nav-bar">
		 			<ul>
			 			<li><a href="/index.html">Subscription</a></li>
			 			<li><a href="/channel-finder.html">Channel Finder</a></li>
			 			<li><a href="/order-details.html">Order Details</a></li>
		 			</ul>
	 			</div>
			</div>
		);
}

export default Header;
