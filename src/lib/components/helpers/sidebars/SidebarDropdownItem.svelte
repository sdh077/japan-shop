<script lang="ts">
	import classNames from 'classnames';

	export let aClass: string =
		"after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 ml-5.4 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap  pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white";
	export let href: string = '';
	export let label: string = '';
	export let activeClass: string =
		"after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 ml-5.4 pl-4 text-sm before:-left-5 relative my-0 mr-4 flex items-center whitespace-nowrap rounded-lg bg-transparent pr-4 font-semibold text-slate-800 shadow-none transition-colors before:absolute before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2  after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-100 dark:before:bg-white dark:before:opacity-80 dark:after:text-white";
	export let active: boolean = false;
	let wrap =
		'stroke-none shadow-soft-2xl mr-2 flex items-center justify-center rounded-lg bg-white bg-center fill-current px-3 py-2 w-8 h-8 text-center ';
</script>

<li class="flex items-center list-none">
	<div
		class={classNames(
			active
				? 'text-white bg-gradient-to-r from-icon-200 to-icon-300 text-slate-500 '
				: 'text-icon-gray',
			wrap
		)}
	>
		<slot name="icon" />
	</div>
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
		class={classNames(active ? activeClass : aClass, $$props.class)}>{label}</a
	>
</li>
