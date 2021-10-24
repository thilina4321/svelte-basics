import App from './Store.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;