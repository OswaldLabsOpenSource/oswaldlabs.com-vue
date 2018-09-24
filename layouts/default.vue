<template>
	<div>
		<Header />
		<nuxt />
		<Footer />
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
</style>
