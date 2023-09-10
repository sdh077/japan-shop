<script>
	import Step from '$lib/components/fetures/step/step.svelte';
	import StepVertical from '$lib/components/fetures/step/stepVertical.svelte';
</script>

<section class="bg-gradient-primary text-white position-relative">
	<div class="container pt-14 pb-9 pb-lg-12 position-relative z-1">
		<div class="row pt-lg-5 align-items-center justify-content-center text-center">
			<div class="col-lg-10 col-xl-7 z-2">
				<div class="position-relative">
					<div>
						<nav class="d-flex justify-content-center" aria-label="breadcrumb">
							<div class="mb-4">
								<ol class="breadcrumb mb-0">
									<li class="breadcrumb-item"><a href="#">Home</a></li>
									<li class="breadcrumb-item active">Components</li>
									<li class="breadcrumb-item active" aria-current="page">Form Steps</li>
								</ol>
							</div>
						</nav>
						<h1 class="mb-0 display-4">Form Steps</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="position-relative overflow-hidden">
	<div class="container py-9 py-lg-11">
		<h5 class="mb-7">Steps Default</h5>
		<Step />
	</div>
</section>

<section class="position-relative overflow-hidden">
	<div class="container py-9 py-lg-11">
		<h5 class="mb-7">Steps Vertical</h5>
		<StepVertical />
	</div>
</section>
