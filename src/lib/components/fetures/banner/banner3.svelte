<script>
	export let img = '/img/backgrounds/bg1.jpg';
	export let caption = 'Lorem ipsum is placeholder text commonly used in the graphic';
	export let title = "Let's work togethor";
	export let linkButton = 'link button 명';
	export let link = '이동';
</script>

<section class="bg-dark text-white jarallax" data-speed=".2">
	<img src={img} class="jarallax-img opacity-75" alt="" />
	<div class="container py-11 py-lg-15 position-relative">
		<div class="row align-items-center">
			<div data-aos="fade-up">
				<h2 class="display-3 mb-4">{title}</h2>
				<span class="lead d-block mb-5">{caption}</span>
			</div>
			<div data-aos="fade-up">
				<a href={link} class="btn btn-lg btn-primary rounded-pill">{linkButton}</a>
			</div>
		</div>
	</div>
</section>
