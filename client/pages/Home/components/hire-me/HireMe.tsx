import React, { FunctionComponent } from 'react';
import './HireMe.scss';
import scrollToSmoothly from 'client/utils/smooth-scroll';

const HireMe: FunctionComponent = () => {
	return (
		<section className="hire">
			<div className="hire-widget">
				<span className="hire-icon">
					<i className="fas fa-comment"></i>
				</span>
				<div className="hire-text">
					<h3>Project in Mind?</h3>
					<p>Give your ideas a chance to live in the outside world.</p>
				</div>
				<button className="hire-button" type='button' onClick={() => {
					scrollToSmoothly((document.querySelector('.contact-us') as HTMLElement).offsetTop, 500)
				}}>
					Hire Me
					<i className="fas fa-briefcase"></i>
				</button>
			</div>
		</section>
	);
};

export default HireMe;
