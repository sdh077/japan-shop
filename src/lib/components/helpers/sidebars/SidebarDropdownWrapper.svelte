<script lang="ts">
	import classNames from 'classnames';
	import { fade, blur, fly, slide } from 'svelte/transition';
	// import { quintOut } from 'svelte/easing';
	import ChevronDown from '../utils/ChevronDown.svelte';
	import ChevronUp from '../utils/ChevronUp.svelte';
	import type { TransitionTypes, TransitionParamTypes } from '../types';

	export let btnClass: string =
		'flex ease-soft-in-out text-sm  w-full py-2 active my-0 flex items-center font-medium text-slate-500 shadow-none transition-colors px-4 rounded-xl';
	export let activeBtnClass: string =
		'flex ease-soft-in-out  text-sm  w-full py-2 bg-white shadow-soft-sm active my-0 flex items-center font-medium text-slate-700 shadow-none transition-colors px-3 rounded-xl ';

	export let label: string = '';
	export let spanClass: string = 'ml-3 flex-1 text-left whitespace-nowrap text-slate-700';
	export let ulClass: string = 'ml-6 py-2 space-y-2';
	export let transitionType: TransitionTypes = 'slide';
	export let transitionParams: TransitionParamTypes = {};
	export let active: boolean = false;
	// make a custom transition function that returns the desired transition
	const multiple = (node: HTMLElement, params: any) => {
		switch (transitionType) {
			case 'blur':
				return blur(node, params);
			case 'fly':
				return fly(node, params);
			case 'fade':
				return fade(node, params);
			default:
				return slide(node, params);
		}
	};

	export let isOpen = false;
	const handleDropdown = () => {
		isOpen = !isOpen;
	};
</script>

<li>
	<button
		{...$$restProps}
		on:click={() => handleDropdown()}
		type="button"
		class={classNames(active ? activeBtnClass : btnClass, $$props.class)}
		aria-controls="sidebar-dropdown"
	>
		<div
			class={classNames(
				active ? '' : '',
				'stroke-none shadow-soft-sm mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current px-3 py-2 text-center'
			)}
		>
			<slot name="icon" />
		</div>
		<span class={spanClass}>{label}</span>
		{#if isOpen}
			{#if $$slots.arrowup}
				<slot name="arrowup" />
			{:else}
				<ChevronUp size={'16'} />
			{/if}
		{:else if $$slots.arrowdown}
			<slot name="arrowdown" />
		{:else}
			<ChevronDown size={'16'} />
		{/if}
	</button>
	{#if isOpen}
		<ul id="dropdown" class={ulClass} transition:multiple|local={transitionParams}>
			<slot />
		</ul>
	{/if}
</li>
