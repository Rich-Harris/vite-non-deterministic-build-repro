import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	logLevel: 'silent',
	plugins: [sveltekit()],
};

export default config;
