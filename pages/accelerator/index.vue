<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="accelerator" />
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h1 v-html="data.header.title" />
						<p style="max-width: 500px" class="mt-4 mb-4">{{data.header.intro}}</p>
						<cta :context="data.header" />
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h2>{{data.features.title}}</h2>
						<div style="max-width: 500px" class="mt-4 mb-4" v-html="data.features.intro" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import content from "@/components/content";
import cta from "@/components/cta.vue";
import smallnav from "@/components/smallnav.vue";
export default {
	asyncData({ params }) {
		return content("accelerator/index");
	},
	components: {
		cta,
		smallnav
	}
};
</script>

<style lang="scss" scoped>
main > header {
	padding-bottom: 5rem;
}
</style>
