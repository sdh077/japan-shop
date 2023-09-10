<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	export let path = [];
</script>

<Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	{#each path as item}
		<BreadcrumbItem href={item.href} >{item.title}</BreadcrumbItem>
	{/each}
</Breadcrumb>
