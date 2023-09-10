<script lang="ts">
	import classNames from 'classnames';

	export let divClass: string = 'items-center block w-full h-auto grow basis-full';
</script>

<div {...$$restProps} class={classNames(divClass, $$props.class)}>
	<slot />
</div>
