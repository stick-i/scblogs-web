import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const HelloWorld = () => import('@/components/HelloWorld.vue');
// const Layout = () => import('@/layout/index.vue');

const routes: RouteRecordRaw[] = [
	{
		path: '/hello',
		component: HelloWorld,
	},
	{
		path: '/',
		redirect: '/home',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
