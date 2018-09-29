<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="platform" />
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
						<div class="card card-body fake-agastya">
							<div class="row">
								<div class="col-6">
									<div><i class="fas fa-book"></i></div>
								</div>
								<div class="col-6">
									<div><i class="fas fa-moon"></i></div>
								</div>
								<div class="col-6">
									<div><i class="fas fa-sun"></i></div>
								</div>
								<div class="col-6">
									<div><i class="fas fa-font"></i></div>
								</div>
								<div class="col-6">
									<div><i class="fas fa-volume-up"></i></div>
								</div>
								<div class="col-6">
									<div><i class="fas fa-globe"></i></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row mb-5">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<p style="max-width: 500px" class="mt-4 mb-4">{{data.header.intro}}</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div v-for="(feature, index) in data.features.products" :key="`list_${index}`" class="col-md-6 mb-4">
						<div class="icon" v-html="feature.icon" />
						<h2 :style="`color: ${feature.color || 'inherit'}`" class="heading" v-html="feature.title" />
						<h3 class="subheading" v-html="feature.subtitle" />
						<p class="mb-4" v-html="feature.intro" />
						<cta :context="feature" />
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h2 v-html="data.features.title" />
						<p style="max-width: 500px" class="mt-4 mb-4" v-html="data.features.intro" />
						<cta :context="data.features" />
					</div>
				</div>
				<div class="row mt-5 pt-4">
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
		return content("platform/index");
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
.icon {
	width: 45px;
	margin-bottom: 2rem;
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
.fake-agastya {
	width: 350px;
	z-index: 1;
	position: absolute;
	right: 5vw;
	padding: 2rem 2rem 0 2rem;
	box-shadow: 0 15px 55px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
	.col-6 > div {
		background-color: whitesmoke;
		padding: 2.5rem 0;
		display: flex;
		margin-bottom: 2rem;
		justify-content: center;
		align-content: center;
		font-size: 2rem;
		color: rgba(0, 20, 30, 0.4);
	}
}
</style>
