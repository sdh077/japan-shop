<script lang="ts">
	import classNames from 'classnames';
	export let textClass: string = 'text-black';
	export let padding: string = 'px-4 py-3';
</script>

<th
	{...$$restProps}
	class={classNames(
		$$props.class,
		'font-bold uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap opacity-70',
		textClass,
		padding
	)}
>
	<slot />
</th>
