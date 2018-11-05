import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export class AboutMe extends Component {
	render() {
		return (
			<div>
				<Header title= "ABOUT ME" />
				<div className="AboutMe-intro">
					<Link to="/">Back to Portfolio</Link>
					<p>
						Full stack web developer, certified PMP, coach, and teacher, with 4 1/2 years of customer-facing experience.
					</p>
					<p>
						I can code web apps using the latest technology, cross-functionally manage an integration between multiple organizations, and while I am highly technical, I am also an influential communicator and presenter.
						If you would like to know more of my story, read on!
					</p>
				</div>

				<div className="AboutMe-blurb">
					<h2>Software Engineer</h2>
					I studied computers and business in college and once I graduated I worked as a Software Engineer and consultant.
					I was primarily a Java developer, but I also built an application using ASP.
					I thrived working on a great engineering team in a fast paced startup environment.
				</div>

				<div className="AboutMe-blurb">
					<h2>Educator: Coach, Teacher, Administrator</h2>
					<p>
						But I also loved helping others grow, and I considered it my responsibility to give back.
						I left engineering for an opportunity to be an educator.
					</p>
					<p>
						I had the privilege to teach K-12 students at Stanford children's hospital school for the patients and later to teach K-6 at a unique project-based school for gifted children.
						I can talk at length about the importance of authentic learning experiences tailored to the learner rather than rote learning and drill-and-kill.
					</p>
					<p>	
						While teaching, I also was coaching volleyball.
						I coached all levels, from beginners to some of the most competitive Under-18 teams in the nation.
						The most fascinating part of coaching is seeing how every team works together differently and has its own unique culture.
						I am currently head coach of the Stanford Women's Club Volleyball team.
					</p>
					<p>
						Being an educator is the hardest job on the planet, but it is incredibly gratifying.
					</p>
				</div>

				<div className="AboutMe-blurb">
					<h2>Back to Tech: Full Stack Web Developer and certified PMP</h2>
					<p>
						In 2015 I left the school environment to join an edtech non-profit.
						I began in Customer Success training teachers and developing implementation and adoption strategies with large districts, but because of my background in tech I quickly started solving our most challenging customer-facing rostering/SSO integration challenges.
						I was promoted to Technical Project Manager so I could interact more closely with our engineering team and have access to the database.
						On my own time I earned my PMP.
					</p>
					<p>
						But I hated saying that 'I used to code' so I went to a coding bootcamp to refresh my skills.
						I now can code a full stack web application with the latest technology.
						I love being able to rapidly prototype an application. The frameworks change all the time, and that too is exciting because I love to learn.
					</p>
					<p>
						So I completed the circle <span role="img" aria-label="smiley face">&#x1F601;</span> back to my roots as a developer.
						I love to work with people and I love to deeply understand and communicate intricate technical details.
					</p>
				</div>

			</div>
		);
	}
}

export default AboutMe;
