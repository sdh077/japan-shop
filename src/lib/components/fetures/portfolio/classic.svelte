<script>
	import { page } from '$app/stores';
	export let articles = [];
	console.log($page.url);
	const grid = {
		4: 'col-md-6 col-lg-3',
		3: 'col-md-6 col-lg-4',
		2: 'col-md-6'
	};
	let index = 4;
	let gridActive = grid[index];
	$: gridActive = grid[index];
	let filter = '';
	const setFilter = (value) => (filter = value);
</script>

<section class="position-relative">
	<div class="container-fluid py-9 py-lg-15 position-relative z-1">
		<!-- Nav -->
		<ul class="mb-5 nav nav-filter align-items-center justify-content-end mb-0">
			<li class="nav-item small text-body-secondary d-flex me-2 me-md-4">Filter by:</li>
			<li class="nav-item">
				<a
					class="nav-link active"
					href="#"
					data-bs-toggle="pill"
					data-filter="*"
					data-bs-target="#projects"
					on:click={() => setFilter('')}
				>
					Projects
				</a>
			</li>
			<li class="nav-item">
				<a
					class="nav-link small"
					href="#"
					data-bs-toggle="pill"
					data-filter=".bootstrap"
					data-bs-target="#bootstrap"
					on:click={() => setFilter('bootstrap')}
				>
					Bootstrap
				</a>
			</li>
			<li class="nav-item">
				<a
					class="nav-link"
					href="#"
					data-bs-toggle="pill"
					data-filter=".javascript"
					data-bs-target="#javascript"
					on:click={() => setFilter('javascript')}
				>
					JS
				</a>
			</li>
			<li class="nav-item">
				<a
					class="nav-link"
					href="#"
					data-bs-toggle="pill"
					data-filter=".figma"
					data-bs-target="#figma"
					on:click={() => setFilter('figma')}
				>
					Figma
				</a>
			</li>
		</ul>

		<div id="projects" data-isotope={{ layoutMode: 'masonry' }} class="row g-3">
			{#each articles.filter( (article) => (filter ? article.category === filter : true) ) as article, index}
				<div class="{gridActive} mb-3 {article.category} grid-item">
					<a href="{$page.url.origin}{$page.url.pathname}/{index}" class="card-hover">
						<div class="overflow-hidden position-relative mb-4">
							<img src="/img/projects/1.jpg" alt="" class="img-zoom img-fluid" />
						</div>
						<h5 class="mb-1">{article.title}</h5>
						<span class="text-body-secondary">{article.sub}</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
<select bind:value={index}>
	<option value={4}>4개</option>
	<option value={3}>3개</option>
	<option value={2}>2개</option>
</select>
