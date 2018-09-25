<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="accelerator" />
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<h1 v-html="data.header.title" />
							<p style="max-width: 500px" class="mt-4 mb-4">{{data.header.intro}}</p>
							<cta :context="data.header" />
						</div>
					</div>
					<div class="col-md-6">
						<img alt="" src="https://undraw.oswaldlabs.com/007bff/wireframing.svg">
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h2 v-html="data.features.title" />
						<div style="max-width: 500px" class="mt-4 mb-4" v-html="data.features.intro" />
					</div>
				</div>
				<div class="row mt-5">
					<div v-for="(feature, index) in data.features.list" :key="`list_${index}`" class="col-md-4 mb-4">
						<div class="h2 text-muted"><i :class="`fas fa-${feature.icon}`"></i></div>
						<h2 class="subheading" v-html="feature.title" />
						<p v-html="feature.intro" />
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
