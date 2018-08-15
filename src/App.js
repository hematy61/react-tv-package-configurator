import React, { Component } from 'react';
import './App.css';
import HeaderContainerPreload from './components/01-preloading/headerContainerPreload';
import Header from './components/02-header/header';
import SearchAndOrderContainer from './components/03-search-and-order-container/searchAndOrderContainer';
import PackagesSection from './components/04-packages-section/packagesSection';
import groupsNames from './channelGroups';

class App extends Component {
	
	render() {
    return (
      <div className="container">
      	<Header	/>
      	<HeaderContainerPreload />
      	<SearchAndOrderContainer />
      	<PackagesSection groupsNames={groupsNames}/>
      </div>
    );
	}

}

export default App;
