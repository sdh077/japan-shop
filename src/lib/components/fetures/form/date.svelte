<script>
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	let value, formattedValue;

	const options = {
		enableTime: true,
		onChange(selectedDates, dateStr) {
			console.log('flatpickr hook', selectedDates, dateStr);
		}
	};

	$: console.log({ value, formattedValue });

	function handleChange(event) {
		const [selectedDates, dateStr] = event.detail;
		console.log({ selectedDates, dateStr });
	}

	function handleSubmit(event) {
		event.preventDefault();

		console.log(event.target.elements['date'].value);
	}
</script>

<main>
	<form on:submit={handleSubmit}>
		<div class="col-md-6 mb-5 mb-md-0">
			<h5 class="mb-4">Basic</h5>
			<Flatpickr
				class="form-control"
				{options}
				bind:value
				bind:formattedValue
				on:change={handleChange}
				name="date"
			/>
		</div>

		<button type="submit"> Submit </button>
	</form>
</main>
