import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Skills from './Skills';
import Project from './Project';
import newsScreenshot from './img/news-screenshot.png';
import wordsScreenshot from './img/words-screenshot.png';
import readingWorkshopScreenshot from './img/reading-workshop-screenshot.png';
import nodeIcon from './img/nodejs-icon.svg';
import reactIcon from './img/react-icon.svg'; 

export class Portfolio extends Component {
	render() {
		return (
			<div>
                <div className="Portfolio-header-and-skills">
    				<Header title="PORTFOLIO" />
    				<div className="Header-short-message">
    					Hi, my name is Jason, welcome to my portfolio site!
    					I recently graduated from the Thinkful web development bootcamp, please scroll down if you would like to see my projects from the course.
    					<p>
    						<Link to="/about">
    							Click here
    						</Link> if you would like to learn more about me.
    					</p>
    				</div>
                    <Skills />
                </div>
				
        		<Project
                	title="Project #1"
                	backgroundColor="#FF7744"
                	challenge="A front-end app that combines the use of two external API's."
                    story="I was interested to know more about what was going on in the US Cabinet, so I created this site to retrieve the news and enabled the user to click on an article to see a 5 sentence summary as well as the sentiment of the article. This project was fun because I was able to see how to use an artificial intelligence API and code using only JQuery for the front-end interface."
                	screenshot={newsScreenshot}
                	skills="Javascript, JQuery, HTML, CSS"
                    url="https://cabinet-news-site.herokuapp.com/"
                />
                <Project
                	title="Project #2"
                	color="#FFFFFF"
                	icon={nodeIcon}
                	iconWidth="40px"
                	backgroundColor="#25412C"
                	challenge="A full stack application with NodeJS using no front end framework."
                    story="As a teacher, I have always thought it would be useful to have a list of all the words a student knows, a frequency of exposure, and an assessment for how well a student grasps that word. This would serve as a versatile form of literacy assessment: I could say 'your child was exposed to 10,000 words this year, needs work on these specific words, and should read these books to be exposed to them'. This proves to be challenging because a word has many inflected forms, and may have many different meanings. This was a fun challenge! I used Google Natural Language Processing to break up text into tokens and break down those words to their lemmas. I hosted my own api with Node and Express and stored user data in a Mongo database."
                	screenshot={wordsScreenshot}
                	skills="Javascript, JQuery, HTML, CSS,"
                    newSkills="+ NodeJs, Mongo(ose)"
                    url="https://jt-words.herokuapp.com/"
                />
                <Project
                	title="Project #3"
                	color="#FFFFFF"
                	icon={reactIcon}
                	iconWidth="65px"
                	backgroundColor="#333333"
                	challenge="A full stack application with NodeJS using React on the front-end."
                    story="Currently, I volunteer with All Students Matter, an organization that helps volunteers read with students in class. In these sessions, we host 'Readers Workshops' where the volunteer facilitates small-group literacy circles. There is often no system to record the data from these sessions, even though the practice is invaluable. So I created this app using React on the front-end to record brief information for each session. I enjoyed this challenge because learning React makes me a better Javascript programmer and I love the ability to prototype quickly, especially using a component library like Material-UI."
                	screenshot={readingWorkshopScreenshot}
                	skills="Javascript, HTML, CSS,"
                    newSkills="NodeJs, Mongo(ose)  + React, Redux, Material-UI"
                    url="https://reading-workshop-client.netlify.com/"
                />
			</div>
		);
	}
}

export default Portfolio;
