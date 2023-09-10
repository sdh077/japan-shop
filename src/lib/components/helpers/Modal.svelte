<script>
	import { Modal } from 'flowbite-svelte';
	let defaultModal = false;
	export let accept = null;
	export let decline = null;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => (defaultModal = true)}>
	<slot name="button" />
</div>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
	<slot name="content" />
	<slot name="footer" />
	<div class="py-4 flex-wrap rounded flex gap-2 items-center">
		<button
			on:click={() => accept()}
			class="btn flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800"
		>
			accept
		</button>
		{#if decline}
			<button
			class="btn flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium border"
				on:click={() => decline()}>Decline</button
			>
		{/if}
	</div>
</Modal>
