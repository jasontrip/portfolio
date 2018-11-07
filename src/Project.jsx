import React, { Component } from 'react';
import NextPage from './NextPage';
import FeatherIcon from 'feather-icons-react';

export class Project extends Component {
	render() {
		const {
			icon, iconWidth, title, challenge, story, repos, nextProjectText, nextProjectHref,
			screenshot, url, skills, newSkills, backgroundColor, color
		} = this.props;

		const projectStyle = {
			backgroundColor: backgroundColor,
			color
		}

		const iconStyle = {
			width: iconWidth
		}

		const projectRepos = repos.map((repo, index) => (
				<a
					href={`https://github.com/jasontrip/${repo.repo}`}
					target="_blank"
					rel="noopener noreferrer"
					key={index}
				>
					<div className="Project-repo">
							<FeatherIcon
								icon="github"
								className="Project-repo-icon"
							/>
							{repo.text}
					</div>
				</a>
		));

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
				<a href={url} target="_blank" rel="noopener noreferrer">
					<div className="Project-screenshot-and-link">
						<img
							className="Project-screenshot"
							src={screenshot}
							alt={`${title} screenshot`}
						/>
						<div>View a live demo</div>
					</div>
				</a>

				{projectRepos}

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
