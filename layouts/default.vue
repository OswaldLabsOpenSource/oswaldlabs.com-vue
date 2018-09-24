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
		Header, Footer
	}
}
</script>

<style lang="scss">
body {
	color: #4b5f79;
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
	padding: 5rem 0;
}
</style>
