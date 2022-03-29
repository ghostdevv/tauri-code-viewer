/** @type {import('@sveltejs/kit').Handle} */
export const handle = ({ event, resolve }) =>
    resolve(event, {
        ssr: false,
    });
