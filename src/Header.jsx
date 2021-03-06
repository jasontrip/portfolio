import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import FeatherIcon from 'feather-icons-react';
import LeftDrawer from './LeftDrawer';
import NavBar from './NavBar';
import headshot from './img/headshot.jpg';

const styles = {
  root: {
    flexGrow: 1,
  },
  appTitle: {
    flexGrow: 1,
    textAlign: 'left',
    letterSpacing: '.3em',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class Header extends Component {
  state = {
    drawerOpen: false,
  };

  toggleDrawer(drawerOpen) {
    this.setState({ drawerOpen });
  }

	render() {
		const { title, classes } = this.props;
		const { drawerOpen } = this.state;

		return (
			  <header className="Header">
			    <div style={{ position: 'relative' }}>
            <div id="top" style={{ position: 'absolute', top: -56, left: 0 }}></div>
          </div>
				  <LeftDrawer
	          open={drawerOpen}
	          onClick={() => this.toggleDrawer(false)}
	        />
			  	<AppBar className="Header-app-bar" position="fixed" color="secondary">
			  		<div className="Header-toolbar">
			  		<Toolbar>
					  		<IconButton
					  			className={classes.menuButton}
					  			color="inherit"
					  			aria-label="Menu"
					  			onClick={() => this.toggleDrawer(true)}
					  		>
					  			<Menu />
					  		</IconButton>
				  			<Typography variant="h6" color="inherit" className={classes.appTitle}>
				  				<span className="Header-title">{title}</span>
				  			</Typography>
					  	</Toolbar>
					  </div>
				  	<NavBar />
			  	</AppBar>
          <img className="Header-headshot" src={headshot} alt="headshot" />
          <h2 className="Header-name">Jason Trip</h2>
          <div className="Header-icon-bar">
            <a href="mailto:jason@jasontrip.me">
							<FeatherIcon
								icon="mail"
								className="Header-icons"
							/>
						</a>
          	<a href="https://github.com/jasontrip" target="_blank" rel="noopener noreferrer">
							<FeatherIcon
								icon="github"
								className="Header-icons"
							/>
						</a>
						<a href="https://www.linkedin.com/in/jasontrip/" target="_blank" rel="noopener noreferrer">
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

export default withStyles(styles)(Header);