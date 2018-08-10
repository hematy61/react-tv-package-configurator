import React, {Component} from 'react';
import './searchAndOrderContainer.css';
import AccountSearch from './accountSearch';
import OrderSummary from './orderSummary';


class SearchAndOrderContainer extends Component {
	render() {
		return (
			<div className='search-and-order-container'>
				<AccountSearch />
				<OrderSummary />
			</div>
		);
	}
}

export default SearchAndOrderContainer;