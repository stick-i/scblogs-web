import { defineStore, createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

export const globalStore = defineStore({
	id: 'global-store',
	state: () => ({
		name: '--',
	}),
	getters: {},
	actions: {
		setName(name: string) {
			this.name = name;
		},
	},
	persist: {
		enabled: true,
		strategies: [
			{
				storage: sessionStorage,
				paths: ['name'],
			},
		],
	},
});

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
