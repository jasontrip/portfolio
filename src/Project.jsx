import React, { Component } from 'react';
import NextPage from './NextPage';
import FeatherIcon from 'feather-icons-react';

export class Project extends Component {
	render() {
		const {
			icon, iconWidth, title, challenge, story, repo, nextProjectText, nextProjectHref,
			screenshot, url, skills, newSkills, backgroundColor, color
		} = this.props;

		console.log(repo)

		const projectStyle = {
			backgroundColor: backgroundColor,
			color
		}

		const iconStyle = {
			width: iconWidth
		}

		return (
			<section className="Project" style={projectStyle} >

				
					{ icon
						? (<div className="Project-icon-wrapper">
								<img style={iconStyle} src={icon} alt={`${title} icon`} />
							 </div>
							)
						: "" 
					}

				<div>
					<div className="Project-title">{title}</div>
					<div className="Project-challenge">{challenge}</div>
					<div className="Project-story">{story}</div>
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

				<div
					className="Project-repo"
					onClick={() => window.location.href='https://github.com/jasontrip/' + repo}
				>
						<FeatherIcon
							icon="github"
							className="Project-repo-icon"
						/>
						View the source code
				</div>

				<div className="Project-skills">
					<div>{skills}</div>
					<div>{newSkills}</div>
				</div>

				{ (nextProjectText && nextProjectHref)?<NextPage text={nextProjectText} href={nextProjectHref} />:'' }
			</section>
		);
	}
}

export default Project;
