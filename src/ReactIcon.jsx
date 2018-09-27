import React, { Component } from 'react';
import reactIcon from './img/react-icon.svg';

export class ReactIcon extends Component {
	render() {
		return (
			<img src={reactIcon} className="React-icon" alt="react icon" />
		);
	}
}

export default ReactIcon;
