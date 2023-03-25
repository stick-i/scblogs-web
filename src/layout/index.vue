<template>
	<div>
		<q-layout view="lHh lpr lFf" containerstyle="height: 400px" class="shadow-2 rounded-borders">
			<q-header elevated>
				<!--				这是头部-->
				<Header />
			</q-header>

			<q-footer elevated>
				<Footer />
			</q-footer>

			<q-page-container>
				<q-page class="q-pa-md">
					<p v-for="n in 15" :key="n">
						axios是一个基于Promise的HTTP客户端，每周的npm下载量4000W+，如果回到在10年前，promise式的请求工具是一个很大的创新，它解决了请求繁琐的问题，在那个性能要求不那么高的年代可谓是一骑绝尘。但随着时间的推移，Axios在开发效率和性能方面开始有所落后，现在都已经是2023年了，面对日益复杂的需求，我们需要的是一款更具创新性和领先性的请求工具，
					</p>
				</q-page>
			</q-page-container>
		</q-layout>
	</div>
</template>

<script lang="ts" setup>
import Footer from '@/layout/footer/index.vue';
import Header from '@/layout/header/index.vue';
</script>

<style lang="scss" scoped></style>
