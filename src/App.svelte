<script>
    import { readTextFile } from '@tauri-apps/api/fs';
    import { extname } from '@tauri-apps/api/path';
    import { open } from '@tauri-apps/api/dialog';
	import Prism from 'svelte-prism';

    let contents,
        language = 'text';

    async function get() {
        const path = await open({
            multiple: false,
            directory: false,
        });

		language = await extname(path) || 'text';
        contents = await readTextFile(path);
    }
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-one-dark.css" rel="stylesheet" />
</svelte:head>

<main>
	<button on:click={get}> Open File </button>

	<div class="code">
		{#if contents}
			<Prism {language} source={contents} />
		{/if}
	</div>
</main>

<style>
	main {
		padding: 12px;
		height: 100%;

		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.code {
		width: 100%;
		padding: 16px;

		flex-grow: 1;

		max-height: 100%;
		overflow-y: auto;

		border: 4px solid var(--background-tertiary);
		border-radius: 8px;
	}
</style>