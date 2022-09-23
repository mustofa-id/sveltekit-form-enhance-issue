<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;

	const name = 'Hello world!';
</script>

<fieldset>
	<legend>Form Default</legend>
	<form action="?/save" method="post">
		<input type="text" name="name" value={name} />
		<input type="submit" />
	</form>
</fieldset>

<fieldset>
	<legend>Form Enhance</legend>
	<form action="?/save" method="post" use:enhance>
		<input type="text" name="name" value={name} />
		<input type="submit" />
	</form>
</fieldset>

<pre>{JSON.stringify(form, null, 2)}</pre>

<style>
	fieldset {
		max-width: min-content;
		margin-bottom: 1rem;
	}
</style>
