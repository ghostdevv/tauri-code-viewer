import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: 'index.html',
            assets: 'build',
            pages: 'build',
        }),

        vite: {
            optimizeDeps: {
                exclude: ['prism-svelte'],
            },
        },
    },
};

export default config;
