<template>
	<main>
		<header class="bg-light-1">
			<div class="container pt-5 mt-5 pb-5 mb-5 text-center">
				<img class="mb-5" style="max-width: 500px" alt="" src="https://undraw.oswaldlabs.com/007bff/startled.svg">
				<h1 v-if="error.statusCode === 404">404 Not Found</h1>
				<h1 v-else>An error occurred</h1>
			</div>
		</header>
	</main>
</template>

<script>
export default {
	props: ["error"]
};
</script>
