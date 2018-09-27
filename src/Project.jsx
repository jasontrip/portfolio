import React, { Component } from 'react';

export class Project extends Component {
	render() {
		const {
			icon, iconWidth, title, challenge, screenshot, url, skills, newSkills, backgroundColor, color
		} = this.props;

		const projectStyle = {
			backgroundColor: backgroundColor,
			color
		}

		const iconStyle = {
			width: iconWidth
		}

		return (
			<div className="Project" style={projectStyle} >

				<div className="Project-icon-wrapper">
					{ icon
						? (<img style={iconStyle} src={icon} alt={`${title} icon`} />)
						: "" 
					}
				</div>

				<div>
					<div className="Project-title">{title}</div>
					<div className="Project-challenge">{challenge}</div>
				</div>
				<div className="Project-screenshot-and-link">
					<img
						className="Project-screenshot"
						src={screenshot}
						alt={`${title} screenshot`}
						onClick={() => window.location=url}
					/>
					<div><a href={url}>View a live demo</a></div>
				</div>

				<div className="Project-skills">
					<div>{skills}</div>
					<div>{newSkills}</div>
				</div>
			</div>
		);
	}
}

export default Project;
