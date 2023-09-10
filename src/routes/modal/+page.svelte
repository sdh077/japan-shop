<script>
	import Button from '$lib/components/helpers/buttons/Button.svelte';
	import Modal from '$lib/components/helpers/modals/Modal.svelte';
	let defaultModal = false;
</script>

<button class="btn btn-primary mb-2 me-1" on:click={() => (defaultModal = true)}
	>Default modal</button
>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		With less than a month to go before the European Union enacts new consumer privacy laws for its
		citizens, companies around the world are updating their terms of service agreements to comply.
	</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
		and is meant to ensure a common set of data rights in the European Union. It requires
		organizations to notify users as soon as possible of high-risk data breaches that could
		personally affect them.
	</p>
	<svelte:fragment slot="footer">
		<div class="modal-footer bg-body-tertiary border-0">
			<button type="button" class="btn btn-gray-200 btn-sm" data-bs-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary btn-sm">Save changes</button>
		</div>
	</svelte:fragment>
</Modal>
