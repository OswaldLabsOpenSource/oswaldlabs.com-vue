<template>
	<header id="masthead">
		<nav class="navbar navbar-expand-lg navbar-light bg-none">
			<div class="container">
				<nuxt-link class="navbar-brand" to="/">
					<svg viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg"><g fill="#007bff" fill-rule="evenodd"><path d="M58 116C25.967 116 0 90.033 0 58S25.967 0 58 0s58 25.967 58 58-25.967 58-58 58zm.5-11c26.234 0 47.5-21.266 47.5-47.5S84.734 10 58.5 10 11 31.266 11 57.5 32.266 105 58.5 105z"></path><circle cx="58.5" cy="57.5" r="35.5"></circle></g></svg>
					<span>Oswald Labs</span>
				</nuxt-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/platform">Platform</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/accelerator">Accelerator</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/about">Company</nuxt-link>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/contact">Login</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link class="nav-link pr-0" to="/contact">Contact &rarr;</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	position: absolute;
	left: 0; right: 0;
	top: 0;
	padding: 0.75rem 0;
	.nav-link {
		padding: 0 1rem !important;
	}
}
</style>
