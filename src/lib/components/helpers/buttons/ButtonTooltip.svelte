<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import type { ButtonType, SizeType } from '../types';
	import Tooltip from '../tooltips/Tooltip.svelte';
	import { Button } from '..';
	const group: SizeType = getContext('group');
	type ButtonColor = keyof typeof colorClasses;
	const colorClasses = {
		alternative:
			'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white',
		blue: 'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700',
		dark: 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700',
		green: 'text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700',
		light:
			'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600',
		primary:
			'text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700',
		purple:
			'text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700',
		red: 'text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700',
		yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 ',
		none: ''
	};
	export let pill: boolean = false;
	export let outline: boolean = false;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = group ? 'sm' : 'md';
	export let href: string | undefined = undefined;
	export let type: ButtonType = 'button';
	export let color: ButtonColor = group ? (outline ? 'dark' : 'alternative') : 'blue';
	export let shadow: boolean = false;
	export let tooltipTxt: string = '';
	export let placement = 'bottom';
	const generateRandomString = (num) => {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		let result = '';
		const charactersLength = characters.length;
		for (let i = 0; i < num; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}

		return result;
	};
	const randomStr = generateRandomString(10);
</script>

<Button
	{pill}
	{outline}
	{size}
	{href}
	{type}
	{color}
	{shadow}
	{...$$props}
	{...$$restProps}
	id={randomStr}
	on:click
	on:change
	on:keydown
	on:keyup
	on:touchstart
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
>
	<slot />
</Button>
<Tooltip {placement} {tooltipTxt} triggeredBy={`#${randomStr}`}>{tooltipTxt}</Tooltip>
