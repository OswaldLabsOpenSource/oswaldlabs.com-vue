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
		<section>
			<div class="container">
				<div class="mb-5">
					<h2 v-html="data.deals.title" />
					<p style="max-width: 500px" class="mt-4 mb-4" v-html="data.deals.intro" />
				</div>
				<div class="row mt-4">
					<div v-for="(deal, index) in data.deals.list" :key="`list_${index}`" class="col-md-4 mb-4">
						<h2 class="subheading" v-html="deal.title" />
						<p v-html="deal.intro" />
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-4 mb-4">
						<h2 class="mb-4" v-html="data.special.list[0].title" />
						<p v-html="data.special.list[0].intro" />
						<cta :context="data.special.list[0]" />
					</div>
					<div class="col-md-4 pr-5 pl-2">
						<img alt="" src="https://undraw.oswaldlabs.com/007bff/world.svg">
					</div>
					<div class="col-md-4 mb-4">
						<h2 class="mb-4" v-html="data.special.list[1].title" />
						<p v-html="data.special.list[1].intro" />
						<cta :context="data.special.list[1]" />
					</div>
				</div>
			</div>
		</section>
		<section class="text-center d-flex justify-content-center align-items-center bg">
			<div>
				<h2 class="display-4">{{data.cta.title}}</h2>
				<p class="mt-4 mb-4" v-html="data.cta.intro" />
				<a class="btn btn-primary btn-lg" :href="data.cta.href">{{data.cta.link}}</a>
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
.bg {
	color: #fff;
	background: url("https://source.unsplash.com/s2DbUV-yx2A/1600x900") center;
	background-size: cover;
	padding: 7.5rem 0;
	position: relative;
	&::after {
		content: "";
		position: absolute;
		background-color: rgba(0, 0, 0, 0.5);
		left: 0; right: 0;
		top: 0; bottom: 0;
	}
	> * {
		position: relative;
		z-index: 2;
		max-width: 500px;
	}
}
</style>
