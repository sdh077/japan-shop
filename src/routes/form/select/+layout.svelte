<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('$lib/assets/vendor/node_modules/js/choices.min.js');
	});
</script>

<slot />
