<template>
	<footer id="colophon">
		<section class="bg-light-1 pt-5 pb-5">
			<div class="container">
				<div class="row">
					<div class="col-md-3 d-flex justify-content-between flex-column text-center text-md-left">
						<div>
							<a class="navbar-brand" href="/"> <svg viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg"><g fill="#007bff" fill-rule="evenodd"><path d="M58 116C25.967 116 0 90.033 0 58S25.967 0 58 0s58 25.967 58 58-25.967 58-58 58zm.5-11c26.234 0 47.5-21.266 47.5-47.5S84.734 10 58.5 10 11 31.266 11 57.5 32.266 105 58.5 105z"></path><circle cx="58.5" cy="57.5" r="35.5"></circle></g></svg> <span>Oswald Labs</span> </a>
						</div>
						<div>&copy; 2018</div>
					</div>
					<div class="col-md-9">
						<div class="row">
							<div class="col-6 col-md">
								<h2 class="h5">Platform</h2>
								<nav class="nav flex-column">
									<a href="#">Web accessibility</a>
									<a href="#">Smartphone OS</a>
									<a href="#">Browser extension</a>
									<a href="#">Platform apps</a>
									<a href="#">GDPR &amp; privacy</a>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Accelerator</h2>
								<nav class="nav flex-column">
									<a href="#">Program home</a>
									<a href="#">Portfolio startups</a>
									<a href="#">Upcoming events</a>
									<a href="#">Partnerships</a>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Developers</h2>
								<nav class="nav flex-column">
									<a href="#">Documentation</a>
									<a href="#">API reference</a>
									<a href="#">Agastya apps</a>
									<a href="#"><span class="text-success">●</span> Status</a>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Company</h2>
								<nav class="nav flex-column">
									<a href="#">About us</a>
									<nuxt-link to="/team">Leadership</nuxt-link>
									<a href="#">Our values</a>
									<a href="#">Work with us</a>
									<a href="#">Blog</a>
								</nav>
							</div>
							<div class="col-6 col-md">
								<h2 class="h5">Resources</h2>
								<nav class="nav flex-column">
									<a href="#">Contact us</a>
									<a href="#">Press</a>
									<a href="#">Privacy &amp; terms</a>
									<a href="#">GDPR Tools</a>
									<a href="#">Payments</a>
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