<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
	export let tabs = [];
</script>

<Tabs contentClass="p-4 rounded-lg dark:bg-gray-800 mt-4">
	{#each tabs as tab}
		<TabItem open title={tab.title}>
			<slot name="body" items={tab.items}>No body was provided</slot>
		</TabItem>
	{/each}
</Tabs>
<!-- 
<Tabs {tabs}>
		<svelte:fragment slot="body" let:items>
			<div class="grid grid-flow-row-dense grid-cols-3">
                {#each items as item}
				<Card title={item.title} img={item.img} body={item.body} />
                {/each}
			</div>
		</svelte:fragment>
	</Tabs>
 -->