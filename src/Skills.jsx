import React, { Component } from 'react';
import NextPage from './NextPage';
import reactIcon from './img/react-icon.svg';
import nodejsIcon from './img/nodejs-icon.svg';
import mongodbIcon from './img/mongodb-icon.svg';

export class Skills extends Component {
	render() {
		return (
			<div className="Skills">
				<div className="Skills-title">
					Full Stack Development Skills
				</div>

				<div className="Skills-MERN-list">
					<div className="Skills-MERN-item">
						<div className="Skills-MERN-item-image">
							<img src={reactIcon} className="Skills-react-icon" alt="react icon" />
						</div>
						<div className="Skills-MERN-item-text">
							<span className="Skills-MERN-text">React</span>
						</div>
					</div>

					<div className="Skills-MERN-item">
						<div className="Skills-MERN-item-image">
							<img src={nodejsIcon} className="Skills-node-icon" alt="node icon" />
						</div>
						<div className="Skills-MERN-item-text">
							<span className="Skills-MERN-text">Node</span>
						</div>
					</div>

					<div className="Skills-MERN-item">
						<div className="Skills-MERN-item-image">
							<img src={mongodbIcon} className="Skills-mongo-icon" alt="mongodb icon" />
						</div>
						<div className="Skills-MERN-item-text">
							<span className="Skills-MERN-text">MongoDB</span>
						</div>
					</div>
				</div>

				<div className="Skills-nonMERN-list">
					Javascript, HTML, CSS, Git, SQL
				</div>

				<NextPage text="See Projects" href="#project1" />


			</div>
		);
	}
}

export default Skills;
