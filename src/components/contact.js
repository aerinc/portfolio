import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

 
class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Aylin Bezci</h2>
						<img 
							src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
							alt="avatar"
							style={{height:'250px'}}
						/>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
						<strong>Don't be a stranger, just say hello!</strong> 
						<div>
						I am always open to collaborating on new projects, creative ideas or opportunities. Let's create something awesome together.
						 </div>
						 </p>
					</Cell>
					<Cell col={6}>
					<h2>Contact Me</h2>
					<hr />
					<div className="contact-list">
						<List>
						  <ListItem>
						    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
						    	<i className= "fa fa-envelope" aria-hidden= "true"/>
						    	aylin.erinc@gmail.com
						    </ListItemContent>
						    </ListItem>
						    <ListItem>
						     <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
						    	<i className= "fa fa-skype" aria-hidden= "true"/>
						    	live:aylin.erinc
						    </ListItemContent>
						  </ListItem>
						</List>
					  </div>
					</Cell>
				</Grid>
			</div>
		)
	}
}
 
export default Contact;

