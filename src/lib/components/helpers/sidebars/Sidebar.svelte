<script lang="ts">
	import classNames from 'classnames';
	export let asideClass: string =
		'bg-gray-100 fixed inset-y-0 left-0 flex-wrap items-center justify-between block overflow-y-auto transition-all duration-200 border-0 shadow-none dark:bg-gray-950 ease-soft-in-out z-20 sm:max-w-60 ';
</script>

<aside {...$$restProps} class={classNames(asideClass, $$props.class)} aria-label="Sidebar">
	<slot />
</aside>
