<script>
	export let title = '';
	export let value = '';
	export let changeValue = 0;
	export let icon;
</script>

<div
	class="col-span-1 row-span-1 relative min-w-0 mb-6 break-words bg-white dark:bg-gray-950 shadow-soft-xl dark:shadow-soft-dark-xl rounded-2xl bg-clip-border"
>
	<div class="flex-auto p-4">
		<div class="flex flex-wrap -mx-3">
			<div class="flex-none w-2/3 max-w-full px-3">
				<div>
					<p class="mb-0 font-sans font-semibold leading-normal text-sm dark:opacity-60">
						{title}
					</p>
					<h6 class="mb-0 font-sans font-semibold">
						{value}
						<!-- {#if changeValue >= 0}
							<span class="leading-normal text-sm font-weight-bolder text-lime-500">
								+{changeValue}%
							</span>
						{:else}
							<span class="leading-normal text-sm font-weight-bolder text-red-600">
								{changeValue}%
							</span>
						{/if} -->
					</h6>
				</div>
			</div>

			<div class="w-4/12 max-w-full px-3 text-right flex-0">
				<div
					class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl"
				>
					<i class="leading-none text-lg relative top-3.5 text-white {icon}" aria-hidden="true" />
				</div>
			</div>
		</div>
	</div>
</div>
