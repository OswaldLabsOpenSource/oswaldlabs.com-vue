<template>
	<main>
		<header class="bg-light-1 triangle">
			<smallnav type="shravan" class="big mb-3" />
			<div class="text-center">
				<h1 class="mb-3">Shravan apps work for everyone.</h1>
				<p class="mb-5 pb-5 ml-auto mr-auto" style="max-width: 500px">The Shravan app suite is a set of accessible, easy-to-use smartphones apps available for free for devices running Android or iOS. They are built on the extensible Oswald Labs Platform.</p>
			</div>
		</header>
		<section>
			<div class="container mt-5 pt-4">
				<div class="row">
					<div class="col-md">
						<div class="card card-phone">
							<div class="screen">Screen</div>
						</div>
						<div class="text-center">
							<img class="icon" src="https://static.oswaldlabs.com/shravan-icons/augmenta11y/generated/android-chrome-144x144.png">
							<h2 class="subheading">Augmenta11y</h2>
							<p>Augmented Reality reading app for people with dyslexia</p>
							<div class="app-icons mt-4">
								<button class="btn btn-dark" disabled>
									<i class="fab fa-android"></i>
									<i class="fab fa-apple"></i>
									Coming soon
								</button>
							</div>
						</div>
					</div>
					<div class="col-md">
						<div class="card card-phone">
							<div class="screen">Screen</div>
						</div>
						<div class="text-center">
							<img class="icon" src="https://static.oswaldlabs.com/shravan-icons/live-subtitles/generated/android-chrome-144x144.png">
							<h2 class="subheading">Live Subtitles</h2>
							<p>Conversational captionion app for people with deafness</p>
							<div class="app-icons mt-4">
								<button class="btn btn-dark" disabled>
									<i class="fab fa-android"></i>
									<i class="fab fa-apple"></i>
									Coming soon
								</button>
							</div>
						</div>
					</div>
					<div class="col-md">
						<div class="card card-phone">
							<div class="screen">Screen</div>
						</div>
						<div class="text-center">
							<img class="icon" src="https://static.oswaldlabs.com/shravan-icons/visib11y/generated/android-chrome-144x144.png">
							<h2 class="subheading">Visib11y</h2>
							<p>Object recognition and navigation app for people with blidness</p>
							<div class="app-icons mt-4">
								<button class="btn btn-dark" disabled>
									<i class="fab fa-android"></i>
									<i class="fab fa-apple"></i>
									Coming soon
								</button>
							</div>
						</div>
					</div>
					<div class="col-md">
						<div class="card card-phone">
							<div class="screen">Screen</div>
						</div>
						<div class="text-center">
							<img class="icon" src="https://static.oswaldlabs.com/shravan-icons/wikibility/generated/android-chrome-144x144.png">
							<h2 class="subheading">Wikibility</h2>
							<p>Wikipedia referencing app for people with disabilities</p>
							<div class="app-icons mt-4">
								<button class="btn btn-dark" disabled>
									<i class="fab fa-android"></i>
									<i class="fab fa-apple"></i>
									Coming soon
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h2>Built on Oswald Labs Platform</h2>
						<p style="max-width: 500px" class="mt-4 mb-4">The Shravan app suite is built on Oswald Labs Platform, an extensive suite of products, open-source projects, and developer APIs and SDKs to build tools to empower the next billion users.</p>
						<cta :context="{buttons: [{
							text: `Start developing →`,
							href: `/platform`
						}]}" />
					</div>
				</div>
				<div class="disclaimer small mt-5 text-muted">
					<p>Shravan is a trademark of OswaldAble Technology Private Limited, doing business as Oswald Labs. The Shravan brand name, logo, and identity is protected by copyright under Indian and international law.</p>
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
.card-phone {
	border-radius: 2rem;
	text-align: center;
	margin-top: -12rem;
	height: 32rem;
	position: relative;
	border: 1px solid #ddd;
	&::before {
		content: "";
		position: absolute;
		left: 50%; top: 1.15rem;
		border-radius: 100%;
		margin-left: -3rem;
		width: 0.75rem;
		height: 0.75rem;
		border: 1px solid #ddd;
	}
	&::after {
		content: "";
		position: absolute;
		left: 50%; top: 1.3rem;
		border-radius: 3rem;
		margin-left: -1rem;
		right: 5rem;
		height: 0.3rem;
		border: 1px solid #ddd;
	}
	.screen {
		background-color: whitesmoke;
		border: 1px solid #ddd;
		margin: 3rem 0.5rem;
		height: 25rem;
		position: relative;
		&::after {
			content: "";
			position: absolute;
			bottom: -3rem;
			left: 50%;
			margin-left: -1.125rem;
			width: 2.25rem;
			height: 2.25rem;
			border-radius: 100%;
			border: 1px solid #ddd;
		}
	}
}
.icon {
	height: 3rem;
	margin-top: 2rem;
	margin-bottom: 1rem;
}
.btn svg {
	margin-right: 0.5rem;
}
</style>
