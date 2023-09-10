<script lang="ts">
	import { onMount } from 'svelte';

	import Toast from '$lib/components/notification/Toast.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import ToTop from '$lib/components/layout/ToTop.svelte';

	import Footer from '$lib/components/footer/footer.svelte';
	import Footer2 from '$lib/components/footer/footer2.svelte';
	import Footer3 from '$lib/components/footer/footer3.svelte';
	import Footer4 from '$lib/components/footer/footer4.svelte';
	import Footer5 from '$lib/components/footer/footer5.svelte';
	import Footer6 from '$lib/components/footer/footer6.svelte';
	let foot = Footer2;
</script>

<Navbar />
<slot />
<select bind:value={foot}>
	<option value={Footer}>1</option>
	<option value={Footer2}>2</option>
	<option value={Footer3}>3</option>
	<option value={Footer4}>4</option>
	<option value={Footer5}>5</option>
	<option value={Footer6}>6</option>
</select>
<svelte:component this={foot} />
