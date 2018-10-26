<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="shravan" class="big" />
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
						<img class="hero-image" alt="" src="https://oswaldlabs.com/images/shravan-1-f628c4f5.png">
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row mb-5">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<h2 v-html="data.os.title" />
							<p style="max-width: 500px" class="mt-4 mb-4">{{data.header.second}}</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div v-for="(feature, index) in data.os.products" :key="`list_${index}`" class="col-md-3 mb-4">
						<img class="mb-4" alt="" :src="feature.img">
						<h2 :style="`color: ${feature.color || 'inherit'}`" class="subheading" v-html="feature.title" />
						<h3 class="subheading" v-html="feature.subtitle" />
						<p class="mb-4" v-html="feature.intro" />
						<cta :context="feature" />
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<div class="row mb-5">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<h2 v-html="data.apps.title" />
							<p style="max-width: 500px" class="mt-4 mb-4">{{data.apps.intro}}</p>
							<cta :context="data.apps" />
						</div>
					</div>
				</div>
				<div class="row pt-5">
					<div v-for="(feature, index) in data.apps.products" :key="`list_${index}`" class="col-md-6 mb-4">
						<div class="app-icon"><img alt="" :src="feature.img"></div>
						<div>
							<h2 :style="`color: ${feature.color || 'inherit'}`" class="subheading" v-html="feature.title" />
							<h3 class="subheading" v-html="feature.subtitle" />
							<p class="mb-4" v-html="feature.intro" />
							<cta :context="feature" />
						</div>
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
		return content("platform/shravan/index");
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
	background-color: #fff6f6 !important;
}
.icon {
	width: 45px;
	margin-bottom: 2rem;
}
.app-icon {
	width: 2.5rem;
	margin-top: -0.6rem;
	border-radius: 100%;
	margin-right: 1rem;
	float: left;
	+ div h2 {
		margin-bottom: 1.5rem;
	}
}
.heading {
	font-size: 150%;
	font-weight: 500;
	letter-spacing: 1px;
	text-transform: uppercase;
	+ .subheading {
		margin-bottom: 2rem;
	}
}
.hero-image {
	max-width: 350px;
	margin-left: 100px;
	position: absolute;
}
</style>
