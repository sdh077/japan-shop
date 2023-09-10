<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let labels;
	export let datas;
	let canvas;
	onMount(() => {
		const ctx2 = canvas.getContext('2d');

		const gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

		gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
		gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
		gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

		const gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

		gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
		gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
		gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

		const gradientStroke3 = ctx2.createLinearGradient(0, 230, 0, 50);

		gradientStroke2.addColorStop(1, 'rgba(70,23,39,0.2)');
		gradientStroke2.addColorStop(0.2, 'rgba(32,72,126,0.0)');
		gradientStroke2.addColorStop(0, 'rgba(20,53,39,0)'); //purple colors

		const borderColor = ['#cb0c9f', '#3A416F', '#8A412F'];
		const gradientStroke = [gradientStroke1, gradientStroke2, gradientStroke3];

		const data = {
			labels,
			datasets: Object.entries(datas).map((data, index) => ({
				label: data[0],
				tension: 0.3,
				borderWidth: 0,
				pointRadius: 0,
				borderColor: borderColor[index],
				borderWidth: 3,
				// backgroundColor: gradientStroke[index],
				fill: false,
				data: data[1],
				maxBarThickness: 6
			}))
		};
		new Chart(ctx2, {
			type: 'line',
			data,
			options: {
				responsive: true,
				// maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					}
				},
				interaction: {
					intersect: false,
					mode: 'index'
				},
				scales: {
					y: {
						grid: {
							drawBorder: false,
							display: true,
							drawOnChartArea: true,
							drawTicks: false,
							borderDash: [5, 5]
						},
						ticks: {
							display: true,
							padding: 10,
							color: '#b2b9bf',
							font: {
								size: 11,
								family: 'Open Sans',
								style: 'normal',
								lineHeight: 2
							}
						}
					},
					x: {
						grid: {
							drawBorder: false,
							display: false,
							drawOnChartArea: false,
							drawTicks: false,
							borderDash: [5, 5]
						},
						ticks: {
							display: true,
							color: '#b2b9bf',
							padding: 20,
							font: {
								size: 11,
								family: 'Open Sans',
								style: 'normal',
								lineHeight: 2
							}
						}
					}
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} height="100px" width="200" />
