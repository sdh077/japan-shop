<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import category from './category.json';
	export let data;
	let load = false;
	const paramChange = (key) => async (value) => {
		if (load) return;
		load = true;
		$page.url.searchParams.set(key, value);
		await goto(`${$page.url.pathname}${$page.url.search}`, { invalidateAll: true });
		load = false;
		return true;
	};
	const selectCategory = async (gp, list) => {
		$page.url.searchParams.set('gp', gp.id);
		$page.url.searchParams.set('mediumClassification', list ? list.id : '');
		await goto(`${$page.url.pathname}${$page.url.search}`, { invalidateAll: true });
	};
</script>

<!--Main content-->
<main>
	<section class="position-relative">
		<div class="container py-9 py-lg-11 position-relative">
			<div class="row justify-content-between">
				<div class="col-md-3">
					<!--:Sidebar widget card-->
					<div class="mt-5">
						<!--:Title-->
						<h6 class="mb-4">Categories</h6>
						<!--:Collapse categories-->
						<div class="collapse-group collapse d-flex flex-column">
							<div class="collapse d-block">
								<div class="nav flex-column">
									{#each category.data.gpList as gp}
										<a
											href="#category{gp.classifyId}"
											class="nav-link"
											data-bs-toggle="collapse"
											aria-expanded="false">{gp.classifyName}</a
										>
										<div class="collapse" id="category{gp.classifyId}">
											<div class="nav nav-level-2 flex-column">
												<a href="#" on:click={() => selectCategory(gp, null)} class="nav-link small"
													>{gp.classifyName}</a
												>
												{#each category.data.classList.filter((item) => item.parentId === gp.classifyId) as list}
													<a
														href="#"
														on:click={() => selectCategory(gp, list)}
														class="nav-link small">{list.classifyName}</a
													>
												{/each}
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>

				<!--Products column-->
				<div class="col-md-9 pt-5">
					<!--Products top bar-->
					<div class="row mb-5 align-items-center">
						<div class="col-md-5 mb-3 mb-md-0">
							<small>Showing 1-9 of 190 items</small>
						</div>
						<div class="col-md-6 ms-auto">
							<div class="d-flex align-items-center">
								<span class="small text-body-secondary d-none d-lg-block">Short by</span>
								<div class="flex-grow-1 ps-2">
									<select name="shortBy" class="form-control">
										<option value="Best selling" selected> Best selling</option>
										<option value="Best rated"> Best rated</option>
										<option value="Most recent"> Most recent</option>
										<option value="Price - Low to High"> Price - Low to High</option>
										<option value="Price - High to Low">Price - High to Low</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-5">
						{#each data.products.data.data as item}
							<div class="col-md-6 col-xl-4 mb-4">
								<div class="card overflow-hidden hover-lift card-product">
									<div class="card-product-header p-3 d-block overflow-hidden position-relative">
										<a href="#!">
											<img
												src={item.imageNetAddress[0] ?? ''}
												class="img-fluid rounded"
												alt="Product"
											/>
										</a>
									</div>
									<div class="card-product-body p-3 pt-0 text-center">
										<a href="#!" class="h5 d-block position-relative mb-2">{item.goodsName}</a>
										<div class="card-product-body-overlay">
											<span class="card-product-price">
												<span>{item.goodsSalesPrice}엔</span>
												<del class="text-body-secondary">{item.goodsOrgPrice}엔</del>
											</span>
											<span class="card-product-view-btn">
												<a href="#!" class="link-underline mb-1 fw-semibold">View Details</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
					<div class="d-grid d-sm-flex justify-content-sm-center">
						<a
							href="#"
							class="btn btn-outline-primary rounded-pill btn-lg btn-hover-text mb-2 me-2"
						>
							<span class="btn-hover-label label-default">Load more</span>
							<span class="btn-hover-label label-hover">Load more</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="position-relative overflow-hidden">
		<div class="container py-7 position-relative">
			<div class="row align-items-center">
				<div class="col-md-4 border-end-md text-center mb-7 mb-md-0">
					<div class="mb-3">
						<i class="bx bx-store fs-1" />
					</div>
					<h6 class="mb-0">30 Day Returns</h6>
				</div>
				<div class="col-md-4 border-end-md text-center mb-7 mb-md-0">
					<div class="mb-3">
						<i class="bx bx-purchase-tag fs-1" />
					</div>
					<h6 class="mb-0">100% Handpicked</h6>
				</div>
				<div class="col-md-4 text-center">
					<div class="mb-3">
						<i class="bx bx-package fs-1" />
					</div>
					<h6 class="mb-0">Assured Quality</h6>
				</div>
			</div>
		</div>
	</section>
</main>

<!--begin:footer-->
<footer class="position-relative bg-dark overflow-hidden" data-bs-theme="dark">
	<div class="container pt-9 pt-lg-11 pb-6 position-relative">
		<div class="row">
			<div class="col-6 col-lg-3 col-xl-2 order-lg-2 ms-lg-auto mb-6">
				<h6 class="mb-4 text-white-50">Account</h6>
				<!-- nav -->
				<ul class="nav flex-column mb-0">
					<li class="nav-item"><a class="nav-link" href="#!">Placing an order</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Shipping</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Track order</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Orders</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Assan Pay</a></li>
				</ul>
				<!-- /.nav -->
			</div>

			<div class="col-6 col-lg-3 col-xl-2 order-lg-3 ms-lg-auto mb-6">
				<h6 class="mb-4 text-white-50">Company</h6>

				<ul class="nav flex-column mb-0">
					<li class="nav-item"><a class="nav-link" href="#!">About</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Become a seller</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">News &amp; Media</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
					<li class="nav-item d-flex justify-content-between align-items-center">
						<a class="nav-link" href="#!">Help center </a>
					</li>
				</ul>
				<!-- /.nav -->
			</div>

			<div class="col-md-6 col-lg-3 col-xl-2 ms-lg-auto order-lg-4 mb-6">
				<h6 class="mb-4 text-white-50">Top Brands</h6>
				<ul class="nav flex-column mb-0">
					<li class="nav-item"><a class="nav-link" href="#!">Wrangler</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Us polo Assn.</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Puma</a></li>
					<li class="nav-item"><a class="nav-link" href="#!">Levis</a></li>
					<li class="nav-item d-flex justify-content-between align-items-center">
						<a class="nav-link" href="#!">Flying Machine </a>
					</li>
				</ul>
			</div>

			<div class="col-lg-3 col-md-6 order-lg-1 mb-6">
				<div class="d-flex align-items-md-stretch flex-column h-100">
					<div class="flex-grow-1 d-flex flex-column">
						<span class="d-block text-body-tertiary mb-3"> 745K Followers </span>
						<div class="mb-4">
							<a href="#!" class="btn btn-outline-white btn-rise">
								<div class="btn-rise-bg bg-white" />
								<div class="btn-rise-text">
									<i class="bx bxl-instagram me-1 align-middle fs-5" /> Follow us on IG
								</div>
							</a>
						</div>
						<!--:Dark Mode:-->
						<div class="d-inline-flex width-13x align-items-center dropup mt-6">
							<button
								class="btn border text-body py-2 px-2 d-flex align-items-center"
								id="assan-theme"
								type="button"
								aria-expanded="false"
								data-bs-toggle="dropdown"
								data-bs-display="static"
							>
								<span class="theme-icon-active d-flex align-items-center">
									<i class="bx align-middle" />
								</span>
							</button>
							<!--:Dark Mode Options:-->
							<ul
								class="dropdown-menu dropdown-menu-end"
								aria-labelledby="assan-theme"
								style="--bs-dropdown-min-width: 9rem;"
							>
								<li class="mb-1">
									<button
										type="button"
										class="dropdown-item d-flex align-items-center active"
										data-bs-theme-value="light"
									>
										<span class="theme-icon d-flex align-items-center">
											<i class="bx bx-sun align-middle me-2" />
										</span>
										Light
									</button>
								</li>
								<li class="mb-1">
									<button
										type="button"
										class="dropdown-item d-flex align-items-center"
										data-bs-theme-value="dark"
									>
										<span class="theme-icon d-flex align-items-center">
											<i class="bx bx-moon align-middle me-2" />
										</span>
										Dark
									</button>
								</li>
								<li>
									<button
										type="button"
										class="dropdown-item d-flex align-items-center"
										data-bs-theme-value="auto"
									>
										<span class="theme-icon d-flex align-items-center">
											<i class="bx bx-color-fill align-middle me-2" />
										</span>
										Auto
									</button>
								</li>
							</ul>
						</div>
					</div>

					<!-- Copyright -->
					<p class="small text-body-secondary mb-0">© Assan. by Creative DM</p>
					<!-- End Copyright -->
				</div>
			</div>
		</div>
		<hr class="bg-transparent border-top border-white opacity-25 mb-6 mt-0" />
		<div class="row align-items-md-center">
			<div class="col-md-4 mb-3 mb-md-0">
				<!--:payment options-->
				<div class="d-flex justify-content-start">
					<div class="d-block me-2 my-1">
						<img src="/img/payment/american_express.svg" alt="" />
					</div>
					<div class="d-block me-2 my-1">
						<img src="/img/payment/paypal.svg" alt="paypal" />
					</div>
					<div class="d-block me-2 my-1">
						<img src="/img/payment/rupay.svg" alt="rupay" />
					</div>
					<div class="d-block my-1">
						<img src="/img/payment/visa.svg" alt="visa" />
					</div>
				</div>
				<!--:/payment options-->
			</div>

			<div class="col-md-2 col-xl-4 mb-3 mb-md-0">
				<!-- Links -->
				<ul class="list-inline small mb-0">
					<li class="list-inline-item me-3">
						<a class="d-block" href="#!">
							<i class="bx bxl-facebook fs-4" />
						</a>
					</li>
					<li class="list-inline-item me-3">
						<a class="d-block" href="#!">
							<i class="bx bxl-twitter fs-4" />
						</a>
					</li>
					<li class="list-inline-item">
						<a class="d-block" href="#!">
							<i class="bx bxl-linkedin fs-4" />
						</a>
					</li>
				</ul>
				<!-- End Links -->
			</div>

			<div class="col-md-6 col-xl-4 text-md-end">
				<!-- Links -->
				<ul class="list-inline small mb-0">
					<li class="list-inline-item me-3">
						<a class="d-block" href="#!">Privacy &amp; Policy</a>
					</li>
					<li class="list-inline-item me-3">
						<a class="d-block" href="#!">Terms &amp; Conditions</a>
					</li>
					<li class="list-inline-item">
						<a class="d-block" href="#!">Careers</a>
					</li>
				</ul>
				<!-- End Links -->
			</div>
		</div>
	</div>
</footer>
<!--/end:footer-->

<!-- begin:Back to top -->
<a href="#top" class="toTop">
	<i class="bx bxs-up-arrow align-middle lh-1" />
</a>

<!-- end:Back to top -->

<style type="text/css">
	.simplebar-track.simplebar-vertical {
		width: 7px;
	}

	.simplebar-scrollbar:before {
		background: currentColor;
	}
</style>
