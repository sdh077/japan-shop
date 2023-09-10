<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';

	export let externalCss: string = '';
	export let tdClass: string =
		'px-6 py-4 whitespace-nowrap font-medium p-2 align-middle bg-transparent';

	export let color = 'text-black';
	let tdClassfinal: string;
	$: tdClassfinal = classNames(tdClass, color, $$props.class, externalCss);
	export let lead = false;
</script>

<td {...$$restProps} class={tdClassfinal} on:click>
	{#if lead}
		<span class="leading-normal text-sm text-slate-400 dark:text-white/80">
			<slot />
		</span>
	{:else}
		<slot />
	{/if}
</td>
