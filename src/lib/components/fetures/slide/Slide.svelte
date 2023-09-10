<script lang="ts">
	import { onMount } from 'svelte';
	export let imgs = ['/img/1200x600/1.jpg', '/img/1200x600/2.jpg', '/img/1200x600/3.jpg'];
</script>

<section class="position-relative">
	<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner">
			{#each imgs as img}
				<div class="carousel-item active">
					<img src={img} class="d-block w-100" alt="..." />
				</div>
			{/each}
		</div>
		<button
			class="carousel-control-prev width-5x height-5x bg-secondary text-dark shadow hover-shadow-lg ms-2 rounded-pill top-50 translate-middle-y"
			type="button"
			data-bs-target="#carouselExampleControls"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next width-5x height-5x bg-secondary text-dark shadow hover-shadow-lg me-2 rounded-pill top-50 translate-middle-y"
			type="button"
			data-bs-target="#carouselExampleControls"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</section>
