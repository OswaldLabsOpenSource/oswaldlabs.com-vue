<template>
	<div class="cta">
		<nuxt-link v-for="(button, index) in context.buttons" :key="`button_${index}`" :to="button.href" class="btn btn-dark mr-3" v-html="button.text" />
	</div>
</template>

<script>
export default {
	props: ["context"]
};
</script>
