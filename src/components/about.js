import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Image from '../images/image.jpg';
 

 class About extends Component {
 	render() {
	return (
			<div className="about-body">
				<Grid className="about-grid">
					<Cell col={6}>
						<h2>Hi, I'm Aylin.</h2>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
						<div>
						I'm a self-taught front end web developer with a background in Communications and Business Administration. 
						I'm a highly motivated and creative individual with a passion for managing successful teams. 
						I am a quick learner and enjoy solving challenges.
						 </div>
						 </p>
					</Cell>
					<Cell col={6}>
					<img className="portrait" src= {Image} alt='portrait'/>
					<hr />
				  </Cell>
				</Grid>
			</div>
		)
	}
}

 
export default About;