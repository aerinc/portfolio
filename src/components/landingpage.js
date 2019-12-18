import React, {Component } from 'react';
import { Grid, Cell } from 'react-mdl';




 class LandingPage extends Component {
   render() {
	  return (
		 <div style={{width: '100%', margin: 'auto'}}>
			<Grid className="landing-grid">
			   <Cell col={12}>
			     <img src="https://icon-library.net/images/free-avatar-icon/free-avatar-icon-10.jpg"
			    	alt="image" className="image"/>
			    	<div className="banner-text">
			    		<h1>I am Aylin Bezci.</h1>
			    		<hr/>
			    		  <p>HTML5/CSS3 | Bootstrap | JavaScript | React | Git&GitHub </p>
			    	<div className="social-links"> 
			    		{/*LinkedIn*/}
			    		<a href="http://google.com" rel="noopener noreferrer" target="_blank">
			    			<i className="fa fa-linkedin-square" aria-hidden="true" />
			    		</a> 
			    		{/*GitHub*/}
			    		<a href="http://google.com" rel="noopener noreferrer" target="_blank">
			    			<i className="fa fa-github-square" aria-hidden="true" />
			    		</a> 
			    	  </div>
			    	</div>
			      </Cell>
			    </Grid>
		    </div>
		  )
		}
 	}
 
export default LandingPage;