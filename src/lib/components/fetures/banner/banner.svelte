<script>
	export let caption = 'caption';
	export let title = 'title';
	export let linkButton = 'link button 명';
	export let link = '이동';
</script>

<section class="bg-gradient-light">
	<div class="container py-9 py-lg-11">
		<div
			class="px-4 rounded-3 shadow-lg py-6 px-lg-5 py-lg-7 bg-gradient bg-secondary text-white position-relative overflow-hidden"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<!--Shape-->
			<svg
				class="position-absolute end-0 bottom-0 mb-4 text-success"
				width="200"
				height="400"
				preserveAspectRatio="none"
				viewBox="0 0 150 300"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M150 300C130.302 300 110.796 296.12 92.5975 288.582C74.3986 281.044 57.8628 269.995 43.934 256.066C30.0052 242.137 18.9563 225.601 11.4181 207.403C3.87986 189.204 -6.2614e-07 169.698 0 150C6.2614e-07 130.302 3.87987 110.796 11.4181 92.5975C18.9563 74.3987 30.0052 57.8628 43.934 43.934C57.8628 30.0052 74.3987 18.9563 92.5975 11.4181C110.796 3.87986 130.302 3.51961e-06 150 5.00679e-06L150 37.5C135.226 37.5 120.597 40.4099 106.948 46.0636C93.299 51.7172 80.8971 60.0039 70.4505 70.4505C60.0039 80.8971 51.7172 93.299 46.0636 106.948C40.4099 120.597 37.5 135.226 37.5 150C37.5 164.774 40.4099 179.403 46.0636 193.052C51.7172 206.701 60.0039 219.103 70.4505 229.55C80.8971 239.996 93.299 248.283 106.948 253.936C120.597 259.59 135.226 262.5 150 262.5V300Z"
					fill="currentColor"
				/>
			</svg>

			<div class="row align-items-end position-relative">
				<div class="col-lg-6 col-xl-7">
					<h5 class="text-white-50 mb-4">{caption}</h5>
					<h2 class="mb-5 mb-md-0 display-5">{title}</h2>
				</div>
				<div class="col-lg-6 col-xl-5 text-lg-end">
					<a href={link} class="btn btn-gray-200 btn-lg">{linkButton}</a>
				</div>
			</div>
		</div>
	</div>
</section>
