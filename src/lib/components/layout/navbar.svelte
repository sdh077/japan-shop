<script lang="ts">
	import classNames from 'classnames';
	import Cookies from 'js-cookie';
	import navs from './navs';
	import { clickOutside } from './clickOutside';
	export let headerType = 'B';
	let y;
	let toggle = false;
	let user = Cookies.get('id') ?? '';
	console.log('user', user, Cookies.get('id'), { httpOnly: true, path: '/' });

	import { onMount } from 'svelte';

	let isHovered = false;

	onMount(() => {
		const navbar = document.querySelector('.navbar');
		navbar.addEventListener('mouseenter', () => {
			isHovered = true;
			// console.log('mouse enter!');
		});
		navbar.addEventListener('mouseleave', () => {
			isHovered = false;
			// console.log('mouse leave!');
		});
	});
</script>

<svelte:window bind:scrollY={y} />
<header
	use:clickOutside={() => (toggle = false)}
	class={classNames(
		'header-transparent sticky-fixed ',
		headerType === 'A' && y < 300 && !isHovered ? '' : 'is-fixed '
	)}
>
	<nav
		class={headerType === 'A'
			? 'navbar navbar-expand-lg fixed-top   '
			: 'navbar navbar-expand-lg fixed-top navbar-light text-black'}
	>
		<!--Navbar-fixed-background-->
		<div class="navbar-fixed-bg position-absolute" />
		<div class="container position-relative z-1">
			<!--begin:logo-->
			<a class="navbar-brand display-2" href="/"> FAABS COFFEE </a>
			<!--end:logo-->
			<!--begin:navbar-no-collapse-items-->
			<div class="d-flex align-items-center navbar-no-collapse-items order-lg-last">
				<!--Navbar toggler button-->
				<button class="navbar-toggler order-last" type="button" on:click={() => (toggle = !toggle)}>
					<span class="navbar-toggler-icon">
						<i />
					</span>
				</button>
			</div>
			<!--end:navbar-no-collapse-items-->

			<!--begin:navbar-collapse-->
			<div class={'collapse navbar-collapse ' + (toggle ? ' show' : ' ')} id="mainNavbarTheme">
				<!--begin:Navbar items-->
				<ul class="navbar-nav ms-auto">
					{#each navs as nav}
						{#if nav.items}
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded={toggle}
									>{nav.title}
								</a>
								<div class="dropdown-menu">
									<div class="overflow-hidden rounded-end">
										<div class="row mx-0">
											<div class=" position-relative">
												<div class="py-1 py- -3 d-lg-flex flex-column">
													{#each nav.items as item}
														{#if item.link === '#'}
															<div class="dropdown-item">{item.title}</div>
														{:else}
															<a
																href={item.link}
																target={item.newpage ? '_blank' : '_self'}
																on:click={() => (toggle = false)}
																class="dropdown-item">{item.title}</a
															>
														{/if}
													{/each}
												</div>
											</div>
										</div>
										<!--/.row-->
									</div>
								</div>
							</li>
						{:else}
							<li class="nav-item dropdown">
								<a class="nav-link" href={nav.link} role="button">{nav.title} </a>
							</li>
						{/if}
					{/each}
				</ul>
				{#if user}
					<!--end:Navbar items-->
					<div class="nav-item me-3 me-lg-0 dropdown">
						<!--:User:-->
						<a
							href="#"
							class="btn btn-outline-primary dropdown-toggle rounded-pill py-0 ps-0 pe-2"
							data-bs-auto-close="outside"
							data-bs-toggle="dropdown"
						>
							<img src="/img/avatar/12.jpg" alt="" class="avatar sm rounded-circle me-1" />
							<small>{user}</small>
						</a>
						<!--:User dropdown:-->
						<div class="dropdown-menu shadow-lg dropdown-menu-end dropdown-menu-xs p-0">
							<a href="#!" class="dropdown-header border-bottom p-4">
								<div class="d-flex align-items-center">
									<div>
										<img src="/img/avatar/12.jpg" alt="" class="avatar xl rounded-pill me-3" />
									</div>
									<div>
										<h5 class="mb-0 text-body">Jaquine Harnandez</h5>
										<span class="d-block mb-2 text-lowercase">jaquinehar@domain.com</span>
										<div class="small d-inline-block link-underline fw-semibold">View account</div>
									</div>
								</div>
							</a>
							<form method="post" action="/login/?/logout">
								<button
									type="submit"
									href="header-login.html"
									class="dropdown-item rounded-top-0 p-3"
								>
									<span class="d-block text-end">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											class="bx bx-box-arrow-right me-2"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
											/>
											<path
												fill-rule="evenodd"
												d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
											/>
										</svg>
										Sign Out
									</span>
								</button>
							</form>
						</div>
					</div>
				{/if}
			</div>
			<!--end:navbar-collapse-->
		</div>
	</nav>
</header>
{#if headerType === 'B'}
	<div style="height: 76px;" />
{/if}
