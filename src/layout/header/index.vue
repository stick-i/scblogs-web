<template>
	<div class="flex items-center justify-around px-8px py-4px bg-white text-gray-900">
		<div class="mr-10px">
			<router-link class="" to="/">
				<img class="h-40px" src="../../assets/logo.png" alt="scblog logo" />
			</router-link>
		</div>
		<div>
			<router-link class="mr-26px" to="/home"> 首页 </router-link>
			<router-link class="mr-26px" to="/questions"> 问答 </router-link>
			<router-link class="mr-26px" to="/wall"> 表白墙 </router-link>
			<router-link class="mr-26px" to="/school"> 校园风采 </router-link>
		</div>
		<div class="width-340px">
			<q-input standout="bg-primary text-white" v-model="text" label="搜索校园博客">
				<template #append>
					<q-btn round dense flat icon="search" />
				</template>
			</q-input>
		</div>
		<div>
			<q-icon size="20px" name="edit_location" />
			北京大学
		</div>
		<div>
			<q-avatar rounded size="32px">
				<img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
			</q-avatar>
		</div>
		<div>
			<q-btn push color="primary" dense icon="lightbulb_outline" label="创作中心" />
		</div>
	</div>
</template>

<script setup lang="ts" name="Header">
import { ref } from 'vue';

const text = ref('');
</script>

<style scoped></style>
