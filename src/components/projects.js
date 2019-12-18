import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

 class Projects extends Component {
 	constructor(props) {
 		super(props);
 		this.state = { activeTab: 0 };
 	}

 	toggleCategories() {
 		if(this.state.activeTab === 0){
 			return(
 				<div className="projects-grid">
 				{/* Gatsby Project*/}
 				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
 					<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://elasticbeanstalk-ap-southeast-1-805366489044.s3.amazonaws.com/images/uploads/2019/03/30/gatsby_ezOwqld.gif) center / cover'}}>GatsbyJS Blog</CardTitle>
 					<CardText>
 						Personal Blog project using GatsbyJS and Netlify deployment.
 					</CardText>
 					<CardActions border>
 						<Button colored>Github</Button>
 						<Button colored>Live Demo</Button>
 				</CardActions>
 					<CardMenu style={{color: 'fff'}}>
 						<IconButton name='share'/>
 					</CardMenu>
 				</Card>

 				{/* React Project*/}
 				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
 					<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://elasticbeanstalk-ap-southeast-1-805366489044.s3.amazonaws.com/images/uploads/2019/03/30/gatsby_ezOwqld.gif) center / cover'}}>React App</CardTitle>
 					<CardText>
 						Monsters Rolodex, using React, etc.
 					</CardText>
 					<CardActions border>
 						<Button colored>Github</Button>
 						<Button colored>Live Demo</Button>
 				</CardActions>
 					<CardMenu style={{color: 'fff'}}>
 						<IconButton name='share'/>
 					</CardMenu>
 				</Card>

 			{/* React Project*/}
 				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
 					<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://elasticbeanstalk-ap-southeast-1-805366489044.s3.amazonaws.com/images/uploads/2019/03/30/gatsby_ezOwqld.gif) center / cover'}}>E-commerce App</CardTitle>
 					<CardText>
 						E-commerce app using, React, Redux, Hooks and Firebase.
 					</CardText>
 					<CardActions border>
 						<Button colored>Github</Button>
 						<Button colored>Live Demo</Button>
 				</CardActions>
 					<CardMenu style={{color: 'fff'}}>
 						<IconButton name='share'/>
 					</CardMenu>
 				</Card>

 				</div>
 				)
 				
 		} else if(this.state.activeTab === 1) {
 			return(
 				<div><h1>This is React</h1></div>
 				)
 		} else if(this.state.activeTab === 2) {
 			return(
 				<div><h1>This is Redux</h1></div>
 				)
 		} else if(this.state.activeTab === 3) {
 			return(
 				<div><h1>This is Firebase</h1></div>
 				)
 		}
}


 	render() {
		return (
		      <div className="category-tabs">
		      	<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
		      	<Tab>GatsbyJS</Tab>
		      	<Tab>React</Tab>
		      	<Tab>Redux</Tab>
		      	<Tab>Firebase</Tab>
		      	</Tabs>

		      	
		      		<Grid>
		      			<Cell col={12}>
		      				<div className="content">{this.toggleCategories()}</div>
		      			</Cell>
		      		</Grid>
		      	
		      </div>
		  )
		}
 	}

 
export default Projects;

