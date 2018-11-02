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
          <img style={{ height: '125px' }} src={headshot} alt="headshot" />
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
        </header>
		);
	}
}

export default Header;