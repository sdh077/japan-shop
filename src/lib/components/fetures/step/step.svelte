<script lang="ts">
	import { onMount } from 'svelte';
	// import Stepper from 'bs-stepper';
	import '$lib/assets/vendor/node_modules/css/bs-stepper.min.css';

	let stepperDiv = null;
	let step;
	onMount(async () => {
		await import('$lib/assets/vendor/node_modules/js/bs-stepper.min.js');
		if (stepperDiv) {
			step = new Stepper(stepperDiv);
			step.next();
			step.previous();
		}
	});
</script>

<!--Steps default start-->
<div class="bs-stepper" bind:this={stepperDiv}>
	<!--Stepper header start-->
	<div
		class="bs-stepper-header pb-3 align-items-start align-items-md-center flex-md-row flex-column p-0"
		role="tablist"
	>
		<!--Step-Header-item-->
		<div class="step active" data-target="#stepper-step-1">
			<button
				type="button"
				class="step-trigger ps-0 py-2 flex-nowrap"
				role="tab"
				id="stepperDemotrigger1"
				aria-controls="stepper-step-1"
				aria-selected="true"
			>
				<span class="bs-stepper-circle rounded-2">
					<i class="bx bx-user-circle" />
				</span>
				<span class="flex-grow-1 flex-wrap d-flex flex-column jusitfy-content-start text-start">
					<span class="bs-stepper-label h6 m-0">Account Details</span>
					<small class="opacity-75">Setup account details</small>
				</span>
			</button>
		</div>
		<!--Divider line-->
		<div class="step-line d-none d-md-block">
			<i class="bx bx-chevrons-right" />
		</div>
		<!--Step-Header-item-->
		<div class="step" data-target="#stepper-step-2">
			<button
				type="button"
				class="step-trigger py-2 ps-0 ps-md-2 flex-nowrap"
				role="tab"
				id="stepperDemotrigger2"
				aria-controls="stepper-step-2"
				aria-selected="false"
			>
				<span class="bs-stepper-circle rounded-2">
					<i class="bx bx-map-alt" />
				</span>
				<span class="flex-grow-1 flex-wrap d-flex flex-column jusitfy-content-start text-start">
					<span class="bs-stepper-label h6 m-0">Address & Payments</span>
					<small class="opacity-75">Add address & payment methods</small>
				</span>
			</button>
		</div>
		<!--Divider line-->
		<div class="step-line d-none d-md-block">
			<i class="bx bx-chevrons-right" />
		</div>
		<!--Step-Header-item-->
		<div class="step" data-target="#stepper-step-3">
			<button
				type="button"
				class="step-trigger py-2 ps-0 ps-md-2 flex-nowrap"
				role="tab"
				id="stepperDemotrigger3"
				aria-controls="stepper-step-3"
				aria-selected="false"
			>
				<span class="bs-stepper-circle rounded-2">
					<i class="bx bx-link" />
				</span>
				<span class="flex-grow-1 flex-wrap d-flex flex-column jusitfy-content-start text-start">
					<span class="bs-stepper-label h6 m-0">Social Links</span>
					<small class="opacity-75">Add social links</small>
				</span>
			</button>
		</div>
	</div>
	<!--Stepper header end-->
	<!--Stepper content start-->
	<div class="bs-stepper-content p-0">
		<div class="card card-body h-100">
			<form class="h-100 d-flex flex-column" action="#">
				<!--Step-1-->
				<div id="stepper-step-1" class="content h-100" aria-labelledby="stepper-step-1">
					<div class="d-flex flex-column h-100">
						<!--Step Title-->
						<div class="flex-shrink-0 pb-3 border-bottom">
							<h6 class="mb-1">Account Details</h6>
							<p class="text-body-secondary small mb-0">Add Account Details</p>
						</div>
						<!--Step main content-->
						<div class="flex-grow-1 py-4">Add Account Details</div>
						<!--Step footer-->
						<div class="d-flex border-top pt-3 justify-content-end">
							<button type="button" class="btn btn-primary" on:click={step.next()}>
								Save & Next <i class="bx bxs-right-arrow-alt" />
							</button>
						</div>
					</div>
				</div>
				<!--Step-2-->
				<div id="stepper-step-2" class="content h-100" aria-labelledby="stepper-step-2">
					<div class="d-flex flex-column h-100">
						<!--Step Title-->
						<div class="flex-shrink-0 pb-3 border-bottom">
							<h6 class="mb-1">Address & Paymnets</h6>
							<p class="text-body-secondary small mb-0">Add address & paymnet method</p>
						</div>
						<!--Step main content-->
						<div class="flex-grow-1 py-4">Add address & paymnet method</div>
						<!--Step footer-->
						<div class="d-flex border-top pt-3 justify-content-between">
							<button type="button" class="btn btn-secondary" on:click={step.previous()}>
								<i class="bx bxs-left-arrow-alt" /> Back
							</button>
							<button type="button" class="btn btn-primary" on:click={step.next()}>
								Save & Next <i class="bx bxs-right-arrow-alt" />
							</button>
						</div>
					</div>
				</div>
				<!--Step-3-->
				<div id="stepper-step-3" class="content h-100" aria-labelledby="stepper-step-3">
					<div class="d-flex h-100 flex-column">
						<!--Step Title-->
						<div class="flex-shrink-0 pb-3 border-bottom">
							<h6 class="mb-1">Social Links</h6>
							<p class="text-body-secondary small mb-0">Add social links</p>
						</div>
						<!--Step main content-->
						<div class="flex-grow-1 py-4">Add social links</div>
						<!--Step footer-->
						<div class="d-flex pt-3 border-top justify-content-between">
							<button type="button" class="btn btn-secondary" on:click={step.previous()}>
								<i class="bx bxs-left-arrow-alt" /> Back
							</button>
							<button type="submit" class="btn btn-primary">
								Submit <i class="bx bx-send" />
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
	<!--Stepper content end-->
</div>
<!--Steps default End-->
