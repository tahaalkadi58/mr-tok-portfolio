import React, { useEffect, useRef, useState } from 'react';
import NavgationLinks from './components/navigation-links';
import Logo from '../logo';
import Hero from '../Hero';
import Button from '../button';

export default function Navigation() {
	const navRef = useRef<HTMLDivElement | null>(null);
	const [isShow, setIsShow] = useState<boolean>(true);
	const [isOpened, setIsOpened] = useState<boolean>(false);
	let lastScrollTop = window.scrollY || window.innerHeight;
	const ulClassName = isOpened ? 'show' : '';
	const show = () => {
		const lastScrollTopBlock =
			window.scrollY || window.innerHeight;
		if (lastScrollTopBlock > lastScrollTop) {
			setIsShow(false);
		} else {
			setIsShow(true);
		}
		lastScrollTop =
			lastScrollTopBlock <= 0 ? 0 : lastScrollTopBlock;
	};
	const changeBg = () => {
		const nav = navRef.current as HTMLElement;
		if (window.scrollY > 120) {
			nav.classList.add('show');
		} else {
			if (nav.classList.contains('show')) {
				nav.classList.remove('show');
			}
		}
	};
	function handleIsShow() {
		show();
		changeBg();
	}
	useEffect(() => {
		window.addEventListener('scroll', handleIsShow);
		return () => {
			window.removeEventListener('scroll', handleIsShow);
		};
	}, []);

	return (
		<nav
			className="navigation"
			style={{
				top: isShow ? 0 : -80,
			}}
		>
			<div className="nav-container" ref={navRef}>
				<Logo></Logo>
				<Hero></Hero>
				<ul className={ulClassName}>
					<NavgationLinks></NavgationLinks>
					<Button
						type="button"
						className={'close'}
						onClick={() => {
							setIsOpened(false);
						}}
					>
						fa-solid fa-xmark
					</Button>
				</ul>
				<div className="burger-container">
					<Button
						type="button"
						className={'burger'}
						onClick={() => {
							setIsOpened(!isOpened);
						}}
					>
						fa-solid fa-burger
					</Button>
				</div>
			</div>
		</nav>
	);
}
