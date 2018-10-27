<template>
	<footer id="colophon">
		<breadcrumb />
		<section class="bg-light-1 pt-5 pb-5">
			<div class="container">
				<div class="row">
					<div class="col-md-3 d-flex justify-content-between flex-column text-center text-md-left">
						<div>
							<nuxt-link class="navbar-brand" to="/">
								<svg viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg"><g fill="#007bff" fill-rule="evenodd"><path d="M58 116C25.967 116 0 90.033 0 58S25.967 0 58 0s58 25.967 58 58-25.967 58-58 58zm.5-11c26.234 0 47.5-21.266 47.5-47.5S84.734 10 58.5 10 11 31.266 11 57.5 32.266 105 58.5 105z"></path><circle cx="58.5" cy="57.5" r="35.5"></circle></g></svg>
								<span>Oswald Labs</span>
							</nuxt-link>
						</div>
						<div>&copy; 2018</div>
					</div>
					<div class="col-md-9">
						<div class="row">
							<div class="col-6 col-md">
								<h2 class="h5">
									<nuxt-link to="/platform">Platform</nuxt-link>
								</h2>
								<nav class="nav flex-column">
									<nuxt-link to="/platform/agastya">Web accessibility</nuxt-link>
									<nuxt-link to="/platform/shravan/apps">Android &amp; iOS apps</nuxt-link>
									<nuxt-link to="/platform/shravan">Smartphone OS</nuxt-link>
									<nuxt-link to="/platform/valmiki">Browser extension</nuxt-link>
									<nuxt-link to="/platform/agastya/privacy">GDPR &amp; privacy</nuxt-link>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Accelerator</h2>
								<nav class="nav flex-column">
									<nuxt-link to="/accelerator">Program home</nuxt-link>
									<nuxt-link to="/accelerator/startups">Portfolio startups</nuxt-link>
									<nuxt-link to="/accelerator/events">Upcoming events</nuxt-link>
									<nuxt-link to="/accelerator/partners">Partnerships</nuxt-link>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Developers</h2>
								<nav class="nav flex-column">
									<nuxt-link to="/">Documentation</nuxt-link>
									<nuxt-link to="/">API reference</nuxt-link>
									<nuxt-link to="/">Agastya apps</nuxt-link>
									<nuxt-link to="/"><span class="text-success">●</span> Status</nuxt-link>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Company</h2>
								<nav class="nav flex-column">
									<nuxt-link to="/about">About us</nuxt-link>
									<nuxt-link to="/team">Leadership</nuxt-link>
									<nuxt-link to="/values/access">Our values</nuxt-link>
									<nuxt-link to="/">Work with us</nuxt-link>
									<nuxt-link to="/">Blog</nuxt-link>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Resources</h2>
								<nav class="nav flex-column">
									<nuxt-link to="/contact">Contact us</nuxt-link>
									<nuxt-link to="/press">Press</nuxt-link>
									<nuxt-link to="/policies/privacy">Privacy &amp; terms</nuxt-link>
									<nuxt-link to="/gdpr/delete">GDPR tools</nuxt-link>
									<nuxt-link to="/payments">Payments</nuxt-link>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="pt-4 pb-4 bg-light-2">
			<div class="container">
				<div class="row">
					<div class="col-md">Accessibility tools</div>
					<div class="col-md text-right">Made in X</div>
				</div>
			</div>
		</section>
	</footer>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
export default {
	components: {
		breadcrumb
	}
}
</script>


<style lang="scss" scoped>
footer {
	font-size: 90%;
	a {
		color: inherit;
	}
}
footer h2.h5 {
	font-size: 95%;
	letter-spacing: 1px;
	font-weight: bold;
	margin-bottom: 1rem;
	text-transform: uppercase;
}
footer nav a + a {
	margin-top: 0.5rem;
}
</style>
