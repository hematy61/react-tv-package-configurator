import React, { Component } from 'react';
import './App.css';
import HeaderContainerPreload from './components/preloading/headerContainerPreload';
import Header from './components/header/header';

class App extends Component {

	render() {
    return (
      <div className="container">
      	<Header	/>
      	<HeaderContainerPreload />
      </div>
    );
	}

}

export default App;
