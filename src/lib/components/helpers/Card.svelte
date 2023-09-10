<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
	let vCard = false;
	export let title = '';
	export let img = '';
	export let body = '';
</script>

<div>
	<Card {img} href="/">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{body}
		</p>
	</Card>
</div>
