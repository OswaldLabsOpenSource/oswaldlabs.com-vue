<template>
	<main>
		<header class="bg-light-1">
			<div class="container pt-5 mt-5 pb-5 mb-5 text-center">
				<h1 v-if="error.statusCode === 404">Page not found</h1>
				<h1 v-else>An error occurred</h1>
				<nuxt-link to="/">Home page</nuxt-link>
			</div>
		</header>
	</main>
</template>

<script>
export default {
	props: ["error"]
};
</script>
