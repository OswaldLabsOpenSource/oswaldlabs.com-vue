<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="shravan" class="big mb-5" />
			<div class="container mb-5">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<h1>Your first smartphone.</h1>
							<p class="mt-4 mb-4">Shravan OS is a concept operating system for phones and tablets running Android which uses a patent-pending vibration and speech interface which allows partially or completely blind users use a smartphone with ease.</p>
							<cta :context="{ buttons: [{
								text: `Join the waitlist →`,
								href: `#`
							}] }" />
						</div>
					</div>
					<div class="col-md-6">
						<!-- <img class="hero-image" alt="" src="https://oswaldlabs.com/images/shravan-1-f628c4f5.png"> -->
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h2>Built on Oswald Labs Platform</h2>
						<p class="mt-4 mb-4">The Shravan app suite is built on Oswald Labs Platform, an extensive suite of products, open-source projects, and developer APIs and SDKs to build tools to empower the next billion users.</p>
						<cta :context="{buttons: [{
							text: `Start developing →`,
							href: `/platform`
						}]}" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import cta from "@/components/cta.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import smallnav from "@/components/smallnav.vue";
export default {
	components: {
		cta,
		breadcrumb,
		smallnav
	}
};
</script>

<style lang="scss">
.fixedbox {
	position: absolute;
	background-color: gray;
	left: 4rem;
	height: calc(100% + 8rem);
	width: 50vw;
	margin: -4rem 0;
}
</style>
