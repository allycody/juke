'use strict';

const React = require('react');
const Sidebar = require('./Sidebar.js').default
const Footer = require('./Footer.js').default
const Album = require('./album.js').default
const audio = document.createElement('audio');

export default class Container extends React.Component{
	constructor(){
		super();
		this.state = {
			loading: true
		}
	}
	componentDidMount (){
		const toJson = response => response.json();
		const log = console.log.bind(console);
		const logError = console.error.bind(console);

		fetch('api/albums/1')
		.then(function (response){
			return response.json();
		})
		.then((album) => {
			album.imageUrl = `/api/albums/${album.id}/image`
			album.loading = false;
			this.setState(album);
		})
  		.catch(logError);
	}

	start () {
    	audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    	audio.load();
    	audio.play();
  	}

	render(){
		return (
		<div id='main' className='container-fluid'>
			<h1>Hello!!!!</h1>
			<Sidebar />
			{this.state.loading ? 
				<h2>Loading Album</h2> : <Album {...this.state} start={this.start}/>
			}
			<Footer />
		</div>
		)
	}
}

