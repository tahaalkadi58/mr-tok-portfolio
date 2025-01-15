import React, { FunctionComponent } from 'react';
import Me from 'client/assets/photos/taha.JPG';
import './About.scss';
const About: FunctionComponent = () => {
	return (
		<section className="about-me p-section" id='about-me'>
			<h2>About me</h2>
			<div className="about-text">
				<p>
					<span className='strong'>Hello, I am</span> Freelance Full Stack Developer
					and Graphic Designer, combining my technical skills
					with creative design expertise to deliver innovative
					solutions.
				</p>
				<div className="about-widget">
					<h3>7+</h3>
					<p>Completed projects!</p>
				</div>
				<div className="about-widget">
					<h3>2+</h3>
					<p>Year of experience!</p>
				</div>
			</div>
			<div className="about-image">
				<img src={Me} alt="Mr. Tok personlity" />
			</div>
		</section>
	);
};

export default About;
