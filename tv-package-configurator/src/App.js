import React, { Component } from 'react';
import './App.css';
import HeaderContainerPreload from './components/preloading/headerContainerPreload';
import Header from './components/header/header';
import SearchAndOrderContainer from './components/search-and-order-container/searchAndOrderContainer';

class App extends Component {

	render() {
    return (
      <div className="container">
      	<Header	/>
      	<HeaderContainerPreload />
      	<SearchAndOrderContainer />
      </div>
    );
	}

}

export default App;
