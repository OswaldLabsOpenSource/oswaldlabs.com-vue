<template>
	<main>
		<header>
			<smallnav type="agastya" class="big" />
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<h1>Web accessibility made simple.</h1>
							<p style="max-width: 500px" class="mt-4 mb-4">Agastya is best</p>
							<cta :context="{buttons: [{
								text: `Get started for free →`,
								href: `https://a11y.co`
							}]}" />
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
							text
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import cta from "@/components/cta.vue";
import smallnav from "@/components/smallnav.vue";
export default {
	components: {
		cta,
		smallnav
	}
};
</script>

<style lang="scss" scoped>
main > header {
	padding-bottom: 5rem;
	background-color: #fffef3;
	color: #805824;
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
