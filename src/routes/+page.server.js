/** @type {import('./$types').Actions} */
export const actions = {
	async save({ request }) {
		const fd = await request.formData();
		console.log(Object.fromEntries(fd));
		return { saved: true };
	},
};
