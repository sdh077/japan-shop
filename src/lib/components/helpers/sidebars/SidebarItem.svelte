<script lang="ts">
	import classNames from 'classnames';

	export let aClass: string =
		'ease-soft-in-out rounded-full text-sm py-2.7 px-4 active my-0 flex items-center whitespace-nowrap font-medium text-slate-500 shadow-none transition-colors dark:text-white dark:opacity-80';
	export let href: string = '';
	export let label: string = '';
	export let spanClass: string = 'ml-3';
	export let activeClass: string =
		'bg-white ease-soft-in-out rounded-full text-sm py-2.7 px-4 active my-0 flex items-center whitespace-nowrap font-medium text-slate-500 shadow-none transition-colors dark:text-white dark:opacity-80';
	export let active: boolean = false;
	export let isIcon: boolean = true;
</script>

<li>
	<a
		{...$$restProps}
		{href}
		on:blur
		on:click
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseenter
		on:mouseleave
		on:mouseover
		class={classNames(active ? activeClass : aClass, $$props.class)}
	>
		{#if isIcon}
			<div
				class={classNames(
					active ? 'text-white bg-gradient-to-tl from-icon-200 to-icon-300' : '',
					'stroke-none shadow-soft-2xl mr-2 flex items-center justify-center rounded-lg bg-white bg-center fill-current px-3 py-2 text-center w-8 h-8'
				)}
			>
				<slot name="icon" />
			</div>
		{/if}
		<span class={spanClass}>{label}</span>
		{#if $$slots.subtext}
			<slot name="subtext" />
		{/if}
	</a>
</li>
