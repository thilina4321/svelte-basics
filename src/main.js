// import App from './App.svelte';
import App from './life-cycle-hooks/App.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;