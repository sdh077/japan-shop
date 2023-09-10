<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	$: activeUrl = $page.url.searchParams.get('page') || '1';

	let pages = [
		{
			name: '1',
			href: '?page=1'
		},
		{ name: '2', href: '?page=2' },
		{ name: '3', href: '?page=3' },
		{ name: '4', href: '?page=4' },
		{ name: '5', href: '?page=5' }
	];

	function checkCurrentPage() {
		pages.forEach((page) => {
			let splitUrl = page.href.split('?');
			let queryString = splitUrl.slice(1).join('?');
			const hrefParams = new URLSearchParams(queryString);
			let hrefValue = hrefParams.get('page');
			if (Number(hrefValue) === Number(activeUrl)) {
				page.active = true;
			} else {
				page.active = false;
			}
		});
		pages = pages;
	}

	const previous = () => {
		activeUrl = Number(activeUrl) - 1;
		$page.url.searchParams.set('page', activeUrl);
		goto(`?${$page.url.searchParams.toString()}`);
		checkCurrentPage();
	};
	const next = () => {
		activeUrl = Number(activeUrl) + 1;
		$page.url.searchParams.set('page', activeUrl);
		goto(`?${$page.url.searchParams.toString()}`);
		checkCurrentPage();
	};

	onMount(checkCurrentPage);
</script>

<nav aria-label="Page navigation example p-2">
	<ul class="inline-flex -space-x-px items-center">
		<li>
			<button
				class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
				on:click={previous}>&lt</button
			>
		</li>
		{#each pages as page}
			{#if page.active}
				<li>
					<a href={page.href} class="px-3 py-2  text-major-default ">{page.name}</a>
				</li>
			{:else}
				<li>
					<a href={page.href} class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white "
						>{page.name}</a
					>
				</li>
			{/if}
		{/each}
		<li>
			<button
				class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				on:click={next}>&gt</button
			>
		</li>
	</ul>
</nav>
