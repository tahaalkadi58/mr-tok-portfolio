import { app } from './server';

export const PORT = Number(process.env.PORT) || 3004;

app.listen(PORT, () => {
	console.log(
		`Server is running on http://localhost:${+PORT}`
	);
});
