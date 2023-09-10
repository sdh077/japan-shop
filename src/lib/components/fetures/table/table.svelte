<script>
	export let tHead = [];
	export let tbody = [];
	console.log(tbody);
</script>

<table class="table mb-9">
	<thead>
		<tr>
			{#each tHead as head}
				<th scope="col" colspan={head.colspan ?? 1}>{head.title}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each tbody as row}
			<tr>
				<th rowspan={row.rowspan ?? 1}>{row.title}</th>
			</tr>
		{/each}
	</tbody>
</table>
