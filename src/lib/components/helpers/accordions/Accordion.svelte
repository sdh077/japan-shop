<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';

	export interface AccordionCtxType {
		flush: boolean;
		activeClasses: string;
		inactiveClasses: string;
		selected?: Writable<object>;
	}
</script>

<script lang="ts">
	import Frame from '$lib/components/helpers/utils/Frame.svelte';
	import classNames from 'classnames';
	import { setContext } from 'svelte';

	export let multiple: boolean = false;
	export let flush: boolean = false;
	export let activeClasses: string = 'w-full mx-auto';
	export let inactiveClasses: string = 'w-full mx-auto';
	export let defaultClass: string = 'bg-[#f8fafc] text-gray-500 dark:text-gray-400';

	const ctx: AccordionCtxType = {
		flush,
		activeClasses,
		inactiveClasses,
		selected: multiple ? undefined : writable()
	};

	setContext<AccordionCtxType>('ctx', ctx);

	let frameClass = classNames(
		defaultClass,
		'divide-y divide-gray-200 dark:divide-gray-700',
		'border-gray-200 dark:border-gray-700',
		$$props.class
	);
</script>

<Frame class={frameClass} color="none" border={!flush}>
	<slot />
</Frame>
