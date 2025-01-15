import React, {
	FunctionComponent,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	useContext,
} from 'react';
import './our-works.scss';
import { projectByTypes } from 'client/utils/project-schema';
import { RepoContext } from 'client/context/GithubContext';
import ProjectCard from './components/ProjectCard';
import scrollToSmoothly from 'client/utils/smooth-scroll';
import useWindowEvents from 'client/context/windowEventContext';
import windowMedia from 'client/utils/windowMediaWidth';
const OurWorks: FunctionComponent = () => {
	const [currentType, setCurrentType] =
		useState<string>('all');
	const [currentIndex, setCurrentIndex] =
		useState<number>(0);
	const indicator = useRef<HTMLDivElement | null>(null);
	const [isActiveBtn, setActiveBtn] =
		useState<boolean>(false);
	const [gridArea, setGridArea] = useState<{
		columns: number | null;
		rows: number | null;
	}>({
		columns: null,
		rows: null,
	});
	const { repos } = useContext(RepoContext);
	const { resizeEvent } = useWindowEvents();
	const { windowHeight, windowWidth } = resizeEvent;
	const { xs, s, md, l, xl } = windowMedia;
	const currentTypeSetter = (type: string) => {
		setCurrentType(type);
	};
	const projects = projectByTypes[currentType];
	const ProjectsTypesLinks = Object.keys(projectByTypes).map(
		(type, i) => (
			<li
				key={type}
				onClick={() => {
					currentTypeSetter(type);
					setCurrentIndex(i);
				}}
				className={`type-link ${type === currentType ? 'active' : ''}`}
			>
				{[[...type][0].toUpperCase(), ...type.slice(1)]}
			</li>
		)
	);

	const handleLoad = () => {
		if (indicator.current) {
		}
	};
	useLayoutEffect(() => {
		window.addEventListener('load', handleLoad);
		return () =>
			window.removeEventListener('load', handleLoad);
	}, []);
	useEffect(() => {
		if (indicator.current) {
			indicator.current.style.width = `${(document.querySelector('.type-link') as HTMLElement)?.offsetWidth}px`;
			indicator.current.style.gridColumn = `1 / -1`;
			// حساب المسافة الصحيحة بناءً على currentIndex
			indicator.current.style.left = `${currentIndex * (indicator.current.offsetWidth + (currentIndex !== 0 ? 20 : 0))}px`;
		}
		console.log(currentIndex);
	}, [currentIndex]);
	const gap = projects.length > 1 ? 0.03 * windowHeight : 0;
	const [perimeter, setPerimeter] = useState({
		width: 350,
		height: 400,
	});
	useEffect(() => {
		switch (true) {
			case windowWidth > s.min && windowWidth < md.max:
				setPerimeter({ width: 300, height: 400 });
				break;
			case windowWidth > l.min && windowWidth < l.max:
				setPerimeter({ width: 350, height: 400 });
				break;
			case windowWidth > xl:
				setPerimeter({ width: 400, height: 400 });
				break;
			default:
				console.log('error, debug switch');
		}
	}, [windowWidth]);
	useEffect(() => {
		console.log(repos);
		return () => {};
	}, [repos]);
	useEffect(() => {
		const columns =
			windowWidth >= xl
				? Math.floor((windowWidth * 0.85) / perimeter.width)
				: Math.floor(windowWidth / perimeter.width);
		const rows = Math.ceil(projects.length / columns);
		setGridArea({
			columns,
			rows,
		});
	}, [windowWidth, projects, perimeter]);
	return (
		<section className="our-works p-section" id="our-works">
			<h2 className="section-title">My Projects</h2>
			<ul
				className="projects-type-links"
				style={{
					width: `${80 * Object.keys(projectByTypes).length}px`,
					gridTemplateColumns: `repeat(${Object.keys(projectByTypes).length}, minmax(0, 1fr))`,
				}}
			>
				{ProjectsTypesLinks}
				<div className="indicator" ref={indicator}></div>
			</ul>
			<ProjectCard
				currentType={currentType}
				isShowMore={isActiveBtn}
				rows={gridArea.rows as number}
				width={perimeter.width}
				columns={gridArea.columns as number}
				height={perimeter.height}
			></ProjectCard>
			{projects.length && (gridArea.rows as number) > 1 && (
				<div
					className="show-more"
					onClick={() => {
						setActiveBtn(!isActiveBtn);
						if (isActiveBtn) {
							scrollToSmoothly(
								(
									document.querySelector('.our-works') as HTMLElement
								).offsetTop,
								1
							);
						}
					}}
				>
					{isActiveBtn && <i className="fas fa-chevron-up"></i>}
					{!isActiveBtn && (
						<i className="fas fa-chevron-down"></i>
					)}
				</div>
			)}
		</section>
	);
};

export default OurWorks;
