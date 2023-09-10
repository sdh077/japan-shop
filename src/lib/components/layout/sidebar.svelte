<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import classNames from 'classnames';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownItem,
		SidebarDropdownWrapper
	} from '$lib/components/helpers/sidebars';
	import routes from './routes.json';
	import { clickOutside } from '$lib/components/helpers/utils/clickOutside';

	export let view = false;
	const dispatch = createEventDispatcher();
	let showSideBar = ' translate-x-0 md:shadow-soft-xl md:-translate-x-full';
	let noShowSideBar = '-translate-x-full';

	const setSideBarToFalse = () => dispatch('sideBar', false);
</script>

<div use:clickOutside={setSideBarToFalse}>
	<Sidebar
		asideClass={classNames(
			'dark:bg-gray-950 ease-soft-in-out z-990 max-w-64 dark: fixed inset-y-0 left-0 my-25 xl:ml-4 block w-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 shadow-none transition-all duration-200 xl:translate-x-0 xl:bg-transparent ps ps--active-y ',
			view ? showSideBar : noShowSideBar
		)}
		id="sidenav-main"
	>
		<SidebarWrapper>
			<SidebarGroup>
				{#each routes as route}
					{#if route.items}
						<SidebarDropdownWrapper
							label={route.title}
							active={$page.url.pathname.includes(route.link)}
						>
							<svelte:fragment slot="icon">
								<i class={classNames(route.icon)} />
							</svelte:fragment>
							{#each route.items as item}
								<SidebarDropdownItem
									label={item.title}
									href={item.link}
									active={$page.url.pathname === item.link}
								>
									<svelte:fragment slot="icon">
										<i class={classNames(item.icon)} />
									</svelte:fragment>
								</SidebarDropdownItem>
							{/each}
						</SidebarDropdownWrapper>
					{:else}
						<SidebarItem
							label={route.title}
							href={route.link}
							active={$page.url.pathname.includes(route.link)}
							on:click={setSideBarToFalse}
						>
							<svelte:fragment slot="icon">
								<i class={classNames(route.icon)} />
							</svelte:fragment>
						</SidebarItem>
					{/if}
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</div>
