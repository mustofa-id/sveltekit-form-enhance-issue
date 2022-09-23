import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
function GET() {
	return json({ name: 'Kit Endpoint' });
}
