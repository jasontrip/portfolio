import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import headshot from './img/headshot.jpg';

export class Header extends Component {

	render() {
		const { title } = this.props;

		return (
			  <header className="Header">
			  	<div className="Header-title">
			  		<h1>{title}</h1>
			  	</div>
          <img style={{ height: '175px' }} src={headshot} alt="headshot" />
          <h2 className="Header-name">Jason Trip</h2>
          <div className="Header-icon-bar">
          	<a href="https://github.com/jasontrip" target="_blank" rel="noopener noreferrer">
							<FeatherIcon
								icon="github"
								className="Header-icons"
							/>
						</a>
						<a href="https://github.com/jasontrip" target="_blank" rel="noopener noreferrer">
							<FeatherIcon
								icon="linkedin"
								className="Header-icons"
							/>
						</a>
					</div>
        </header>
		);
	}
}

export default Header;