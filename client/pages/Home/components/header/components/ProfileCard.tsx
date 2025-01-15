import React, {
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react';
import useWindowEvents from 'client/context/windowEventContext';
export default function m() {
	const { loadEvent, resizeEvent } = useWindowEvents();
	const { isLoad } = loadEvent;
	const { windowHeight, windowWidth } = resizeEvent;
	// تعريف الواجهة للمرجع
	interface Refs {
		profilePicture?: HTMLElement | null;
		pictureContainerCon?: HTMLElement | null;
		card?: HTMLElement | null;
	}

	const refs = useRef<Refs>({});

	// إعداد المرجع للمكونات
	const setRef =
		(key: keyof Refs) => (el: HTMLElement | null) => {
			refs.current[key] = el;
		};

	const spans = new Array(4)
		.fill(null)
		.map((_, i) => (
			<span
				className={`corner${i + 1}`}
				key={`span${i}`}
			></span>
		));

	const isServer = typeof window !== 'undefined';

	// remove hover from card
	useEffect(() => {
		const { card } = refs.current;
		if (!card) {
			console.warn(
				'Some elements are not properly referenced.'
			);
			return;
		}
		setTimeout(() => {
			card.classList.contains('hover') &&
				card.classList.remove('hover');
		}, 3000);
	}, [isLoad]);

	// change height
	useLayoutEffect(() => {
		const { profilePicture, pictureContainerCon } =
			refs.current;

		if (!profilePicture || !pictureContainerCon) {
			console.warn(
				'Some elements are not properly referenced.'
			);
			return;
		}
		const rootElement = document.documentElement;
		(() => {
			const profileWidth = profilePicture.offsetWidth;
			rootElement.style.setProperty(
				'--height',
				`${profileWidth}px`
			);
			profilePicture.style.height = `${profileWidth}px`;
			pictureContainerCon.style.height = `${profileWidth}px`;
		})();
		return () => {
			rootElement.style.setProperty('--height', '0px');
		};
	}, [windowHeight, windowWidth]);

	return (
		<div
			className="profile-picture-container-container"
			ref={setRef('pictureContainerCon')}
		>
			<div className="profile-picture-container">
				<div
					className="profile-picture"
					ref={setRef('profilePicture')}
				>
					<div
						className="card hover"
						ref={setRef('card')}
						onClick={(e) => {
							const target = e.target as HTMLElement;
							target.classList.toggle('hover');
							setTimeout(
								() => target.classList.remove('hover'),
								3000
							);
						}}
					>
						<div className="front tok"></div>
						<div className="back"></div>
					</div>
				</div>
				{spans}
			</div>
		</div>
	);
}
