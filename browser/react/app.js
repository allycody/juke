'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const main = require('./main.js');
const Container = main.default;

class MyComponent extends React.Component{
	render(){
		return <div>Hello!!!!</div>
	}
}

ReactDOM.render(<Container />, document.getElementById('app'));