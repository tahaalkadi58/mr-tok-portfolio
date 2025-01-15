import {
	type RenderToPipeableStreamOptions,
	renderToPipeableStream,
} from 'react-dom/server';
import { Iprops } from '../server/types/node';
import Main from './Main';
export function render(
	_url: string,
	props: Iprops,
	options?: RenderToPipeableStreamOptions
) {
	return renderToPipeableStream(
		<Main props={props}></Main>,
		options
	);
}
