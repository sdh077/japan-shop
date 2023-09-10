<script>
	import Table from '$lib/components/fetures/table/table.svelte';
	export let tabs = [
		{
			tab_id: 0,
			title: '공지사항'
		},
		{
			tab_id: 1,
			title: '공지, 안내'
		},
		{
			tab_id: 2,
			title: '가정 예배지'
		}
	];
	export let tabItems = [
		{
			tab_item_id: 0,
			title: '공지 1',
			tab_id: 0
		},
		{
			tab_item_id: 1,
			title: '공지 2',
			tab_id: 0
		},
		{
			tab_item_id: 2,
			title: '공지 3',
			tab_id: 0
		},
		{
			tab_item_id: 3,
			title: '안내 1',
			tab_id: 1
		},
		{
			tab_item_id: 4,
			title: '안내 2',
			tab_id: 1
		},
		{
			tab_item_id: 5,
			title: '예배 1',
			tab_id: 2
		}
	];
</script>

<section class="bg-body-tertiary position-relative overflow-hidden">
	<div class="container py-9 py-lg-11 position-relative">
		<div class="row justify-content-between">
			<div class="col-lg-5 mb-7 mb-lg-0">
				<div class="w-lg-75">
					<nav
						class="nav nav-pills flex-column"
						role="tablist"
						style="--bs-nav-pills-link-active-bg:var(--bs-secondary-bg);--bs-nav-pills-link-active-color:var(--bs-primary)"
					>
						{#each tabs as tab, index}
							<a
								href="#tab{tab.tab_id}"
								class="nav-link {index === 0 ? 'active' : ''} rounded-pill px-5 fs-5 py-3 mb-1"
								data-bs-toggle="tab"><span>{tab.title}</span></a
							>
						{/each}
					</nav>
				</div>
			</div>
			<div class="col-lg-7">
				<div class="tab-content">
					{#each tabs as tab, index}
						<div
							class="tab-pane fade {index === 0 ? 'active show' : ''}"
							id="tab{tab.tab_id.toString()}"
						>
							<div class="position-relative">
								<h3 class="mb-3">{tab.title}</h3>
								<p class="mb-5">
									<Table tbody={tabItems.filter((item) => item.tab_id === tab.tab_id)} />
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
