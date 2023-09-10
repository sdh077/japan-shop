<script>
	import Banner from '$lib/components/fetures/banner/banner.svelte';
	import Banner3 from '$lib/components/fetures/banner/banner3.svelte';
	import Insight from '$lib/components/fetures/service/insight.svelte';
	import Offer from '$lib/components/fetures/service/offer.svelte';
	import Slide from '$lib/components/fetures/slide/Slide.svelte';

	const beans = [
		{
			id: 0,
			title: '홈타운 블렌딩',
			subTitle: 'New hometown Blending',
			content: '코스타리카 라스 라하스 펠라네그라25% + 에티오피아 워시드&내추럴 75% 비율',
			img: '/faabs_img/bean_hometown.jpeg',
			link: 'https://smartstore.naver.com/faabscoffee/products/6445988066'
		},
		{
			id: 1,
			title: '모건타운 블렌딩',
			subTitle: 'MORGAN TOWN BLENDING',
			content: '콜롬비아, 과테말라, 에티오피아, 인도네시아',
			img: '/faabs_img/bean_morgan.jpeg',
			link: 'https://smartstore.naver.com/faabscoffee/products/5698108189'
		},
		{
			id: 2,
			title: '파브스 다크 블랜딩',
			subTitle: 'DARK BLENDING',
			content: '브라질, 과테말라, 인도',
			img: '/faabs_img/bean_dark.png',
			link: 'https://smartstore.naver.com/faabscoffee/products/8590129671'
		}
	];
</script>

<Slide imgs={['/faabs_img/bg1.jpg', '/faabs_img/bg1.jpg']} />
<section class="position-relative">
	<div class="container py-9 py-lg-11">
		<div class="row">
			<div class="col-md-5 col-lg-4 mb-5 mb-md-0">
				<div
					class="nav nav-pills d-flex flex-md-column justify-content-start me-md-3"
					id="v-pills-tab"
					role="tablist"
					aria-orientation="vertical"
				>
					{#each beans as bean, i}
						<a
							class="nav-link px-4 py-3 {i === 0 ? 'active' : ''} mb-md-3"
							href="#e-{bean.id}"
							data-bs-toggle="pill"
							data-bs-target="#e-{bean.id}"
							role="tab"
							aria-controls="e-{bean.id}"
							aria-selected="true"
						>
							<h5 class="text-reset mb-0">{bean.title}</h5>
							<span class="small lh-sm opacity-75">{bean.subTitle}</span>
						</a>
					{/each}
				</div>
			</div>
			<div class="col-md-7 mx-auto">
				<div class="tab-content" id="tab-panel">
					{#each beans as bean, i}
						<div
							class="tab-pane fade {i === 0 ? 'show active' : ''}"
							id="e-{bean.id}"
							role="tabpanel"
							aria-labelledby="e-{bean.id}-tab"
						>
							<img
								src={bean.img}
								alt=""
								class="img-fluid rounded-3 w-lg-50 w-md-75 mb-4 shadow-xl"
							/>
							<p class="mb-5 w-md-75 lead">
								{bean.content}
							</p>
							<a href={bean.link} class="fw-medium link-hover-underline"
								>More Detail
								<i class="bx bx-right-arrow-alt fs-5" />
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
<Banner3 />
