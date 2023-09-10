<script>
    export let option = []
</script>
<div class="relative inline-block">
	<slot name="select"></slot>
	<slot name="options" options={option}>No body was provided</slot>
</div>
