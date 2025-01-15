import Logo from 'client/pages/shared/logo';
import Hero from 'client/pages/shared/Hero';
import ExternalLink from '../../header/components/ExternalLink';
import { FunctionComponent } from 'react';
import { list_item } from '../../header/components/ExternalLink';
const FooterInfoWidget: FunctionComponent = () => {
	const list_item_components = list_item.map(
		({ name, href, id, icon }, i) => {
			const key = `${name}-${id}`;
			return (
				<li className={`${name} social`} key={key} id={key}>
					<a href={href} target="_blank">
						<i className={`fa-brands fa-${icon}`}></i>
					</a>
				</li>
			);
		}
	);
	return (
		<div className="footer-widget">
			<div className="footer-logo">
				<Logo></Logo>
				<Hero></Hero>
			</div>
			<div className="footer-text">
				<p>
					Lorem ipsum dolor sit amet, consec tetur adipisicing
					elit, sed do eiusmod tempor incididuntut consec tetur
					adipisicing elit,Lorem ipsum dolor sit amet.
				</p>
			</div>
			<div className="footer-social-icon">
				<span>Follow us</span>
				<ul className="external-nav-ul">
					{list_item_components}
				</ul>
			</div>
		</div>
	);
};

export default FooterInfoWidget;
