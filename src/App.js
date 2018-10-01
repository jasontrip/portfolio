import React, { Component } from 'react';
import Header from './Header';
import Project from './Project';
import newsScreenshot from './img/news-screenshot.png';
import wordsScreenshot from './img/words-screenshot.png';
import readingWorkshopScreenshot from './img/reading-workshop-screenshot.png';
import nodeIcon from './img/nodejs-icon.svg';
import reactIcon from './img/react-icon.svg'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Project
        	title="Project #1"
        	backgroundColor="#FF7744"
        	challenge="A front-end app that combines the use of two external API's in a useful way."
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
        	challenge="A full stack application with NodeJS using React on the front end."
        	screenshot={readingWorkshopScreenshot}
        	skills="Javascript, HTML, CSS,"
            newSkills="NodeJs, Mongo(ose)  + React, Redux, Material-UI"
            url="https://reading-workshop-client.netlify.com/"
        />
      </div>
    );
  }
}

export default App;
