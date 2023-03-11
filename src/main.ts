import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';

import 'virtual:windi.css';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/zh-CN';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const myApp = createApp(App);

myApp
	.use(Quasar, {
		plugins: {}, // import Quasar plugins and add here
		lang: quasarLang,
	})
	.use(store)
	.use(router);

myApp.mount('#app');
