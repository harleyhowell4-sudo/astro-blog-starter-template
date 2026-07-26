export async function POST({ request }) {
	const date = await request.json();

console.log(data);

return new Response("Post received!");
}