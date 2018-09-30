<template>
	<div>
		<Header />
		<nuxt />
		<Footer />
		<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/solid.js" integrity="sha384-GJiigN/ef2B3HMj0haY+eMmG4EIIrhWgGJ2Rv0IaWnNdWdbWPr1sRLkGz7xfjOFw" crossorigin="anonymous"></script>
		<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/fontawesome.js" integrity="sha384-2OfHGv4zQZxcNK+oL8TR9pA+ADXtUODqGpIRy1zOgioC4X3+2vbOAp5Qv7uHM4Z8" crossorigin="anonymous"></script>
	</div>
</template>

<script>
import Header from "./partials/Header";
import Footer from "./partials/Footer";
export default {
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss">
@import url("https://oswaldlabs.com/stylesheets/fonts-b9c9ba49.css");
body {
	font-size: 105%;
	color: #4b5f79;
}
nav {
	font-size: 95%;
}
h1 {
	font-weight: 300;
}
h2 {
	font-weight: 400;
}
.subheading {
	text-transform: uppercase;
	font-size: 110%;
	margin-bottom: 1rem;
	color: #6b7c93;
	font-weight: 400;
	letter-spacing: 2px;
}
.bg-light-1 {
	background-color: #f6f9fc;
}
.bg-light-2 {
	background-color: #e9edf1;
}
.navbar-brand svg {
	width: 25px;
	height: 25px;
	float: left;
	vertical-align: middle;
	margin-right: 10px;
	transform: translateY(2px);
}
main > header {
	padding: 7.5rem 0 2rem 0;
}
main > section {
	padding: 4rem 0;
	position: relative;
	& + section:not(.bg-light-1) {
		border-top: 2px solid #eee;
	}
}
img {
	max-width: 100%;
}
::selection {
	background-color: #e9edf1;
}
:focus:not(:focus-visible) {
	// outline: none;
}
</style>
