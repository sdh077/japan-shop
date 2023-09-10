<script>
	export let desc = true;
	export let asc = null;
</script>

<div class="flex flex-col">
	{#key asc}
		<i
			class={`fa-sharp fa-solid fa-caret-up${asc ? '' : ' opacity-50'}`}
			style="line-height: 0.5;"
		/>
	{/key}
	{#key desc}
		<i
			class={`fa-sharp fa-solid fa-caret-down${desc ? ' ' : ' opacity-50'}`}
			style="line-height: 0.5;"
		/>
	{/key}
</div>
