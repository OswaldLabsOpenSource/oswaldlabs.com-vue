<template>
	<div class="navigation">
		<div class="container">
			<div class="row">
				<div class="col-md-3 d-flex align-items-center">
					<h1 class="m-0 font-weight-bold p-2 pl-3 p-md-0">{{data.title}}</h1>
				</div>
				<div class="col-md">
					<nav class="nav justify-content-end">
						<nuxt-link class="nav-link" v-for="(item, index) in data.items" :key="`nav_${index}`" :to="item.href">{{item.title}}</nuxt-link>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			data: {}
		};
	},
	props: ["type"],
	created() {
		switch (this.type) {
			case "accelerator":
				this.data = {
					title: "Oswald Labs Accelerator",
					items: [
						{
							title: "Program",
							href: "/accelerator"
						},
						{
							title: "Portfolio",
							href: "/accelerator/startups"
						},
						{
							title: "Events",
							href: "/accelerator/events"
						},
						{
							title: "Partners",
							href: "/accelerator/partners"
						},
						{
							title: "Spaces",
							href: "/accelerator/spaces"
						}
					]
				};
				break;
		}
	}
};
</script>


<style scoped lang="scss">
.navigation {
	background-color: #e9edf1;
	margin-top: -2.5rem;
	margin-bottom: 4rem;
	a.nav-link {
		color: #32325d;
		padding: 1rem;
		&.nuxt-link-exact-active {
			font-weight: bold;
		}
	}
	h1 {
		color: #6b7c93;
		font-size: inherit;
	}
}
</style>
