'use strict';

const React = require('react');

export default class Album extends React.Component{
	constructor(){
		super();
		
	}
	render(){
		var album = this;
		return ( 
		<div className="album col-xs-10">
  			<div>
   				<h3>{this.props.name}</h3>
    			<img src={this.props.imageUrl} className="img-thumbnail" />
  			</div>
  			<table className='table'>
    		<thead>
      			<tr>
	        		<th></th>
	        		<th>Name</th>
	        		<th>Artists</th>
	        		<th>Genre</th>
      			</tr>
    		</thead>
	    		<tbody>
				{ this.props.songs.map(function (songObj, index) {
					return(
						<tr key={index}>
				        <td>
				          <button className="btn btn-default btn-xs"
				          	onClick = {() => {album.props.start()
				          		{/*const audio = document.createElement('audio');
				          		audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    							audio.load();
    							audio.play();this.props.start*/}
    						}}>
				            <span className="glyphicon glyphicon-play"></span>
				          </button>
				        </td>
				        <td>{songObj.name}</td>
				        <td>{
				        	songObj.artists.map(function (artistObj, ind){
				        		return (artistObj.name + " ")
				        	})
				        }</td>
				        <td>{songObj.genre}</td>
				      </tr>
					)})
				}
	    		</tbody>
  			</table>
		</div>
		)
	}
}