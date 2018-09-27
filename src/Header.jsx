import React, { Component } from 'react';
import Skills from './Skills';
import FeatherIcon from 'feather-icons-react';
import headshot from './img/headshot.png';

export class Header extends Component {
	render() {
		return (
			  <header className="Header">
			  	<div className="Header-title">
			  		<h1>PORTFOLIO</h1>
			  	</div>
          <img src={headshot} alt="headshot" />
          <h2 className="Header-name">Jason Trip</h2>
          <div className="Header-icon-bar">
						<FeatherIcon
							icon="github"
							className="Header-icons"
							onClick={() => window.location.href='https://github.com/jasontrip'}
						/>
						<FeatherIcon
							icon="linkedin"
							className="Header-icons"
							onClick={() => window.location.href='https://www.linkedin.com/in/jasontrip/'}
						/>
					</div>
					<Skills />
        </header>
		);
	}
}

export default Header;