import { hydrateRoot } from 'react-dom/client';
import Main from './Main';

	hydrateRoot(
		document.getElementById('root') as HTMLElement,
		<Main props={window.props}></Main>
	);
