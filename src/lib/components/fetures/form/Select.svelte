<script lang="ts">
	import { onMount } from 'svelte';
	let choicesDiv = null;
	onMount(async () => {
		await import('$lib/assets/vendor/node_modules/js/choices.min.js');
		const cSelect = document.querySelectorAll('[data-choices]');
		cSelect.forEach((el) => {
			console.log(el);
			const t = {
				...(el.dataset.choices ? JSON.parse(el.dataset.choices) : {}),
				...{
					classNames: {
						containerInner: el.className,
						input: 'form-control',
						inputCloned: 'form-control-sm',
						listDropdown: 'dropdown-menu',
						itemChoice: 'dropdown-item',
						activeState: 'show',
						selectedState: 'active'
					}
				}
			};
			console.log(t);
			new Choices(el, t);
		});
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
	/>
</svelte:head>
<div class="z-3">
	<!--Basic select demo-->
	<label for="chBasic" class="form-label">Basic Demo</label>
	<select
		id="chBasic"
		class="form-control"
		data-choices={JSON.stringify({ searchEnabled: false, allowHTML: true, itemSelectText: '' })}
		bind:this={choicesDiv}
	>
		<option value="" disabled>Select User</option>
		<option value="Adam">Adam</option>
		<option value="Mark">Mark</option>
		<option value="John">John</option>
		<option value="Varun">Varun</option>
		<option value="Joseph">Joseph</option>
		<option value="Smith">Smith</option>
	</select>
</div>

<!--Custom width select demo-->
<div class="width-14x">
	<select
		id="chWidth"
		class="form-control form-control-sm"
		data-choices={JSON.stringify({ searchEnabled: false, allowHTML: true, itemSelectText: '' })}
	>
		<option value="" disabled>Quantity</option>
		<option value="01">01</option>
		<option value="02">02</option>
		<option value="03">03</option>
		<option value="04">04</option>
		<option value="05">05</option>
		<option value="06">06</option>
	</select>
</div>
