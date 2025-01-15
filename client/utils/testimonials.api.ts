export default class Testimonial {
	static #lastId = -1;
	id;
	constructor(
		public firstname: string,
		public lastname: string,
		public thumbnail: string,
		public comment: string,
		public rating: number,
		public work: string
	) {
		this.id = ++Testimonial.#lastId;
	}
}

export const testimonialsArray = [
	new Testimonial(
		'Mamman',
		'Abubakar',
		'https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg',
		"I can't say enough about Mr.TOK. Mr.TOK has really helped our business.",
		4,
		'Data Manager & IT'
	),
	new Testimonial(
		'Nehir',
		'Erva',
		'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
		'We don’t need to spend as much time in meetings now that we use Mr.TOK.',
		5,
		'App Designer'
	),
	new Testimonial(
		'Anh',
		'Umar',
		'https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg',
		'We don’t need to spend as much time in meetings now that we use Mr.TOK.',
		5,
		'Cyber-Security Specialist'
	),
];
