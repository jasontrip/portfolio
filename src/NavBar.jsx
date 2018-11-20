import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

export class NavBar extends Component {
	render() {
		return (
		  <div className="Header-navbar-links">
				<Typography variant="h6" color="inherit">
					<ul className="Header-navbar-links-ul">
						<li>
							<Link
								scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
								to="/#top">Portfolio
							</Link>
						</li>
						<li><Link smooth to="/about#top">About Me</Link></li>
  					<li>
  						<Link
  							scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
  							to="/#project1">
  								Project #1
  						</Link>
  					</li>
  					<li>
  						<Link
  							scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
  							to="/#project2">
  								Project #2
  						</Link>
  					</li>
  					<li>
  						<Link
  							scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
  							to="/#project3"
  						>
  								Project #3
  						</Link>
  					</li>
  				</ul>
				</Typography>
			</div>
		);
	}
}

export default NavBar;
