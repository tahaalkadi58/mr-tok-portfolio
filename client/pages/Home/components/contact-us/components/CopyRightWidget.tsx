import { FunctionComponent } from 'react';
const CopyRightWidget: FunctionComponent = () => {
	return (
		<div className="copyright-area">
			<div className="copyright-text">
				<p>
					Copyright &copy; 2024, All Right Reserved{' '}
					<a href="/">Mr. TOK</a>
				</p>
			</div>

			<div className="footer-menu">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Terms</a>
					</li>
					<li>
						<a href="#">Privacy</a>
					</li>
					<li>
						<a href="#">Policy</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CopyRightWidget;
