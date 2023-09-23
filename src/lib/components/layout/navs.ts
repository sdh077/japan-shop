export default [
	{
		title: 'about',
		link: '/about',
		class: 'nav_item',
		items: null,
	}, {
		title: 'contact',
		link: '/contact',
		class: 'nav_item',
	}, {
		title: 'order',
		link: '/order',
		class: 'nav_item',
	}, {
		title: 'archive',
		link: '/archive',
		class: 'nav_item',
		items: [
			{
				title: '커피일지',
				link: '/archive/letter',
				class: 'nav_item',
			}, {
				title: 'news',
				link: '/archive/news',
				class: 'nav_item',
			}
		]
	}
];
