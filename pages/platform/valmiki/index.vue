<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="valmiki" class="big" />
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<h1>The revolutionary tool for accessible reading.</h1>
							<p style="max-width: 500px" class="mt-4 mb-4">Oswald Labs was founded with the development of Valmiki, which is a plug-in for Chromium-based web browsers like Google Chrome and Opera that changes the look and feel of the entire internet based on your preferences.</p>
							<cta :context="{buttons: [{
								text: `Download for free →`,
								href: `#`
							}]}" />
						</div>
					</div>
					<div class="col-md-6">
						<img class="hero-image" alt="" src="">
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<h2 class="text-center mb-5">Valmiki works for everyone.</h2>
				<div class="row">
					<div class="col-md-6 d-flex align-items-center mb-5">
						<div>
							<h3 class="subheading">Learning disabilities</h3>
							<p>Based on the specifications provided by the British Dyslexia Association and the World Wide Web Consortium, Valmiki automatically corrects the typography, contrast ratios, and other visual elements on a webpage to make reading easier for users with learning disabilities.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex align-items-center mb-5">
						<div>
							<h3 class="subheading">Visual impairment</h3>
							<p>On the press of a button (or a key), Valmiki extracts all relevant content on a webpage and reads it out in a language of the user’s choice. Valmiki can also translate that text into another language, and visually impaired users only have to press a few keyboard shortcuts for all of this.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex align-items-center mb-5">
						<div>
							<h3 class="subheading">Senior citizens</h3>
							<p>Senior citizens who are not used to browsing the web can switch to Valmiki's Reading Mode which removes all unnecessary links, ads, and popups, and presents the relevant content in a beautiful readable format. They can also easily change the font size and contrasts based on their eye defects.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex align-items-center mb-5">
						<div>
							<h3 class="subheading">Everyone else</h3>
							<p>Valmiki is incredibly customizable, and users can easily change all properties and styles like text color, font family, and image contrasts for a consistent experience across the web. It remembers your settings, and they are automatically applied on any website you visit.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="text-center d-flex justify-content-center align-items-center bg">
			<div>
				<h2 class="display-4">Free as in freedom</h2>
				<p class="mt-4 mb-4">Valmiki by Oswald Labs is completely free and open-sourced under the MIT license. This means that users never have to pay for it and developers can build on top of it.</p>
				<a class="btn btn-primary btn-lg" href="#">Download for Chrome &rarr;</a>
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
	background-color: #fafff3;
}
.bg {
	color: #fff;
	background: url("https://source.unsplash.com/UH-xs-FizTk/1600x900") center;
	background-size: cover;
	padding: 7.5rem 0;
	position: relative;
	&::after {
		content: "";
		position: absolute;
		background-color: rgba(0, 0, 0, 0.6);
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
