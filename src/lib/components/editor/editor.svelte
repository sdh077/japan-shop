<script lang="ts">
	import Editor from '@tinymce/tinymce-svelte';
	export let value;
	export let apiKey;
	// imagetools fullpage 에러 떠서 둘다 plugin에서 뺌
	let conf = {
		selector: 'textarea', // change this value according to your HTML
		auto_focus: 'element1',
		content_style: 'img { width: 100%;}',
		plugins:
			'importcss image autoresize anchor preview searchreplace autolink autosave directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking insertdatetime advlist lists wordcount help charmap quickbars emoticons lists advlist',
		toolbar:
			'insertdatetime image fullpage anchor restoredraft undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview print | image media link codesample',
		toolbar_sticky: true,
		image_caption: true,
		autosave_ask_before_unload: true,
		autosave_interval: '30s',
		autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-',
		autosave_restore_when_empty: false,
		autosave_retention: '2m',
		menubar: 'insert tools file format',
		quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
		images_upload_url: '/api/s3'
	};
</script>

<main>
	<!-- <h1>Hello Tiny</h1> -->
	<Editor bind:value {apiKey} {conf} />
</main>

<!-- {value} -->
