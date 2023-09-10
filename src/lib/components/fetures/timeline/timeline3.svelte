<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	onMount(() => {
		const swiper = new Swiper('.swiper-history', {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			breakpoints: {
				// when window width is >= 480px
				768: {
					slidesPerView: 2,
					spaceBetween: 0
				},
				// when window width is >= 640px
				1024: {
					slidesPerView: 3
				}
			}
		});
	});
</script>

<section class="position-relative border-top overflow-hidden">
	<div class="container py-9 py-lg-12 position-relative">
		<h1 class="display-5 mb-7 mb-lg-9">Timeline History</h1>
		<!--History swiper slider-->
		<div class="swiper-history swiper-container overflow-visible">
			<!--Slider wrapper-->
			<div class="swiper-wrapper">
				<!--Slide-->
				<div class="swiper-slide">
					<div>
						<div class="pe-5 pb-3 pe-lg-7">
							<!--Time-->
							<p class="text-body-secondary">At Present</p>
							<!--Year-->
							<h2 class="text-primary display-5">2022</h2>
						</div>
						<!--Divider line-->
						<div class="swiper-divider-line bg-primary position-relative w-100 my-4" />
						<!--Text-->
						<div class="pe-7 pt-3 pe-lg-7">
							<h5>Whole new look with bootstrap5</h5>
							<p>
								Lorem ipsum is text commonly used in the graphic, print, and publishing industries
								for previewing layouts and visual mockups.
							</p>
						</div>
					</div>
				</div>
				<!--Slide-->
				<div class="swiper-slide">
					<div>
						<div class="pe-5 pb-3 pe-lg-7">
							<!--Time-->
							<p class="text-body-secondary">May</p>
							<!--Year-->
							<h2 class="text-primary text-opacity-75 display-5">2020</h2>
						</div>
						<!--Divider line-->
						<div
							class="swiper-divider-line bg-primary bg-opacity-75 position-relative w-100 my-4"
						/>
						<!--Text-->
						<div class="pe-7 pt-3 pe-lg-7">
							<h5>Finished 5000 Sales</h5>
							<p>
								Lorem ipsum is text commonly used in the graphic, print, and publishing industries
								for previewing layouts and visual mockups.
							</p>
						</div>
					</div>
				</div>
				<!--Slide-->
				<div class="swiper-slide">
					<div>
						<div class="pe-5 pb-3 pe-lg-7">
							<!--Time-->
							<p class="text-body-secondary">June</p>
							<!--Year-->
							<h2 class="text-primary text-opacity-75 display-5">2018</h2>
						</div>
						<!--Divider line-->
						<div
							class="swiper-divider-line bg-primary bg-opacity-50 position-relative w-100 my-4"
						/>
						<!--Text-->
						<div class="pe-7 pt-3 pe-lg-7">
							<h5>Convert into Bootstrap 4</h5>
							<p>
								Lorem ipsum is text commonly used in the graphic, print, and publishing industries
								for previewing layouts and visual mockups.
							</p>
						</div>
					</div>
				</div>
				<!--Slide-->
				<div class="swiper-slide">
					<div>
						<div class="pe-5 pb-3 pe-lg-7">
							<!--Time-->
							<p class="text-body-secondary">July</p>
							<!--Year-->
							<h2 class="text-primary text-opacity-50 display-5">2016</h2>
						</div>
						<!--Divider line-->
						<div
							class="swiper-divider-line bg-primary bg-opacity-25 position-relative w-100 my-4"
						/>
						<!--Text-->
						<div class="pe-7 pt-3 pe-lg-7">
							<h5>Finished 2000 Sales</h5>
							<p>
								Lorem ipsum is text commonly used in the graphic, print, and publishing industries
								for previewing layouts and visual mockups.
							</p>
						</div>
					</div>
				</div>
				<!--Slide-->
				<div class="swiper-slide">
					<div>
						<div class="pe-5 pb-3 pe-lg-7">
							<!--Time-->
							<p class="text-body-secondary">August</p>
							<!--Year-->
							<h2 class="text-primary text-opacity-25 display-5">2014</h2>
						</div>
						<!--Divider line-->
						<div class="swiper-divider-line position-relative w-100 my-4" />
						<!--Text-->
						<div class="pe-7 pt-3 pe-lg-7">
							<h5>Launched Assan Theme</h5>
							<p>
								Lorem ipsum is text commonly used in the graphic, print, and publishing industries
								for previewing layouts and visual mockups.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
