<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="shravan" class="big mb-5" />
			<div class="container mb-5">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							<h1>Everyone's first smartphone.</h1>
							<p class="mt-4 mb-4">Shravan Phone is a low-cost smartphone running Shravan OS, the world's first universally accessible operating system compatible with Android. Seniors, users who are unlettered, or users with disabilities like visual impairment or dyslexia can easily use Shravan Phone.</p>
							<cta :context="{ buttons: [{
								text: `Preorder for $49 →`,
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
					<div class="col-md-6">
						<h2 class="mb-4">Accessibility</h2>
						<p class="mt-4 mb-4">Shravan Phone comes with <nuxt-link to="/platform/shravan/os">Shravan OS</nuxt-link>, which make it very easy to get started. For users switching from feature phones, Shravan Phone is the perfect first smartphone. For users with disabilities, it has various accessible features.</p>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-md">
						<h3 class="subheading">Dyslexia</h3>
						<p>Users with learning disorders such as dyslexia can easily customize the interface and use the iconography with dyslexia-friendly type to navigation the smartphone.</p>
					</div>
					<div class="col-md">
						<h3 class="subheading">Blindness</h3>
						<p>Blind or visually impaired users can use our patent-pending combintation of vibrations and speech to easily navigate the smartphone or use the built-in screen reader.</p>
					</div>
					<div class="col-md">
						<h3 class="subheading">Deafness</h3>
						<p>Hearing impaired users can use the smartphone's haptic engine for context and apps such as Live Subtitles for conversational captions or real-time phone call transcription.</p>
					</div>
					<div class="col-md">
						<h3 class="subheading">Low vision</h3>
						<p>Seniors and users with low vision can use the easy-to-use interface to navigate, with focus on icons, shapes, and colors, and use the built-in magnifier for the interface and camera.</p>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<h2 class="mb-4">Specifications</h2>
				<div class="row">
					<div class="col-md-6">
						<table class="table">
							<tbody>
								<tr>
									<td style="width: 50%">Display</td>
									<td>5" LCD</td>
								</tr>
								<tr>
									<td>RAM</td>
									<td>2 GB</td>
								</tr>
								<tr>
									<td>Storage</td>
									<td>8 GB<br>Expandable up to 32 GB</td>
								</tr>
								<tr>
									<td>Processor</td>
									<td>Snapdragon 810</td>
								</tr>
								<tr>
									<td>Software</td>
									<td>Shravan OS Beta 4<br>Over-the-air updates</td>
								</tr>
								<tr>
									<td>Compatibility</td>
									<td>Android 5.0 Lollipop</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-md-6">
						<table class="table">
							<tbody>
								<tr>
									<td style="width: 50%">Size</td>
									<td>7" &times; 4"</td>
								</tr>
								<tr>
									<td>Languages</td>
									<td>25+ Indian, 100+ total</td>
								</tr>
								<tr>
									<td>Screen reader</td>
									<td>TalkBack&trade;</td>
								</tr>
								<tr>
									<td>Camera</td>
									<td>8 MP rear<br>2 MP selfie</td>
								</tr>
								<tr>
									<td>Features</td>
									<td>Visib11y, Live Subtitles, Augmenta11y, Reader</td>
								</tr>
								<tr>
									<td>Availibility</td>
									<td>2019</td>
								</tr>
							</tbody>
						</table>
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
