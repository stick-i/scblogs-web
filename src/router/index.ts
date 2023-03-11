import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const HelloWorld = () => import('@/components/HelloWorld.vue');

const routes: RouteRecordRaw[] = [
	{
		path: '/hello',
		component: HelloWorld,
	},
	{
		path: '/',
		redirect: '/hello',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
