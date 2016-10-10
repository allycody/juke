'use strict';

const React = require('react');

export default class Sidebar extends React.Component{
	constructor(){
		super();
	}
	render(){
		return ( 
		<footer>
        <div>
          <div className="pull-left">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-step-backward"></span>
            </button>
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-play"></span>
            </button>
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-step-forward"></span>
            </button>
          </div>
          <div className="bar">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      </footer>
      )
	}
}

