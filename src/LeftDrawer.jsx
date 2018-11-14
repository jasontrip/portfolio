import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Drawer, List, ListItem, ListItemText, Divider,
} from '@material-ui/core';
import headshot from './img/headshot.jpg';

export class LeftDrawer extends Component {
	render() {
		const { open, onClick } = this.props;

		return (
			<Drawer
				open={open}
				onClick={onClick}
			>
				<div className="Drawer">
					<div className="LeftDrawer-header">
	        	<img className="LeftDrawer-headshot" src={headshot} alt="headshot" />
	        </div>
					<List>
							<ListItem
	              button
	              smooth
	              component={Link}
	              to="/#top"
	            >
	              <ListItemText primary="Portfolio" />
	            </ListItem>
	            <ListItem
	              button
	              smooth
	              component={Link}
	              to="/about#top"
	            >
	              <ListItemText primary="About Me" />
	            </ListItem>
	        </List>
	        <Divider />
	        <List>
	            <ListItem
	              button
	              component={Link}
	              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
	              to="/#project1"
	            >
	            	<ListItemText primary="Project #1" />
	            </ListItem>
	            <ListItem
	              button
	              component={Link}
	              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
	              to="/#project2"
	            >
	              <ListItemText primary="Project #2" />
	            </ListItem>
	            <ListItem
	              button
	              component={Link}
	              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
	              to="/#project3"
	            >
	              <ListItemText primary="Project #3" />
	            </ListItem>
	          </List>
	      </div>
			</Drawer>
		);
	}
}

export default LeftDrawer;
