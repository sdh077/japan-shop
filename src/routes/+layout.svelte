<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import '$lib/assets/css/theme.css';
	import 'aos/dist/aos.css';
	import '$lib/assets/fonts/bootstrap-icons/bootstrap-icons.css';
	import '$lib/assets/fonts/boxicons/css/boxicons.min.css';
	import '$lib/assets/fonts/iconsmind/iconsmind.css';

	import Toast from '$lib/components/notification/Toast.svelte';
	import ToTop from '$lib/components/layout/ToTop.svelte';

	onMount(async () => {
		AOS.init();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&family=IBM+Plex+Mono:ital@0;1&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
		crossorigin="anonymous"
	></script>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
		rel="stylesheet"
	/>
</svelte:head>
<Toast />
<slot />
<ToTop />
