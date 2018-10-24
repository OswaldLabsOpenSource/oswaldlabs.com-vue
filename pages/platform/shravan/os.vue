<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="shravan" class="big mb-5" />
			<div class="container mb-5">
				<div class="row text-center justify-content-center">
					<div class="col-md-7">
						<h1>The inclusive and <em>smart</em>phone operating system.</h1>
						<p class="mt-4 mb-4">Shravan OS is a concept operating system for phones and tablets running Android which uses a patent-pending vibration and speech interface which allows partially or completely blind users use a smartphone with ease.</p>
						<cta :context="{ buttons: [{
								text: `Join the waitlist →`,
								href: `#`
						}] }" />
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h2>Made for Digital India</h2>
						<p class="mt-4 mb-5">Shravan OS is the first smartphone operating system with built-in integration with Aadhaar, UPI payments, and works in over 25 native Indian languages. It's truly made for Digital India.</p>
						<div class="row text-center justify-content-center">
							<div class="col-md-3">
								<div class="mb-2">
									<div style="margin: auto; border-radius: 100%; width: 50px; height: 50px; background: gray;">i</div>
								</div>
								<div>Aadhaar</div>
							</div>
							<div class="col-md-3">
								<div class="mb-2">
									<div style="margin: auto; border-radius: 100%; width: 50px; height: 50px; background: gray;">i</div>
								</div>
								<div>BHIM UPI</div>
							</div>
							<div class="col-md-3">
								<div class="mb-2">
									<div style="margin: auto; border-radius: 100%; width: 50px; height: 50px; background: gray;">i</div>
								</div>
								<div>Multilingual</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="fixedbox"></div>
					</div>
				</div>
			</div>
		</section>
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
				<div class="disclaimer small mt-5 text-muted">
					<p>Shravan is a trademark of OswaldAble Technology Private Limited, doing business as Oswald Labs. The Shravan brand name, logo, and identity is protected by copyright under Indian and international law. Some features might not work in all smartphones or in all locations. Requires a connection to the internet. BHIM UPI app included in Shravan is a project by the Government of India. Aadhaar connection uses the Aadhaar Bridge API.</p>
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
