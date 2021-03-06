<template>
	<div class="navigation">
		<div class="container">
			<div class="row">
				<div class="col-md-3 d-flex align-items-center">
					<router-link class="d-flex align-items-center logo" :to="data.items[0].href">
						<img v-if="data.icon" alt="" :src="data.icon">
						<h1 class="m-0 font-weight-bold p-2 pl-3 p-md-0" :style="`color: ${data.color}`">{{data.title}}</h1>
					</router-link>
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
			case "platform":
				this.data = {
					title: "Oswald Labs Platform",
					items: [
						{
							title: "Agastya",
							href: "/platform/agastya"
						},
						{
							title: "Shravan",
							href: "/platform/shravan"
						},
						{
							title: "Valmiki",
							href: "/platform/valmiki"
						},
						{
							title: "Developers",
							href: "/platform/developers"
						},
						{
							title: "APIs",
							href: "/platform/api"
						}
					]
				};
				break;
			case "shravan":
				this.data = {
					icon: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Shravan.svg",
					title: "Shravan",
					color: "#fc3c53",
					items: [
						{
							title: "Overview",
							href: "/platform/shravan"
						},
						{
							title: "Shravan Apps",
							href: "/platform/shravan/apps"
						},
						{
							title: "Shravan OS",
							href: "/platform/shravan/os"
						},
						{
							title: "Shravan Phone",
							href: "/platform/shravan/phone"
						},
					]
				};
				break;
			case "agastya":
				this.data = {
					icon: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Agastya.svg",
					title: "Agastya",
					color: "#fe730f",
					items: [
						{
							title: "Overview",
							href: "/platform/agastya"
						},
						{
							title: "Features",
							href: "/platform/agastya/features"
						},
						{
							title: "Pricing",
							href: "/platform/agastya/pricing"
						},
						{
							title: "Compliancy",
							href: "/platform/agastya/compliancy"
						},
						{
							title: "EU/GDPR",
							href: "/platform/agastya/eu"
						}
					]
				};
				break;
			case "valmiki":
				this.data = {
					icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Valmiki.svg",
					title: "Valmiki",
					color: "#25852a",
					items: [
						{
							title: "Overview",
							href: "/platform/valmiki"
						},
						{
							title: "Features",
							href: "/platform/valmiki/features"
						},
						{
							title: "Pricing",
							href: "/platform/valmiki/eu"
						}
					]
				};
				break;
		}
	},
	mounted() {
		let header = false;
		try {
			header = this.$root.$children[1].$children[0].$el;
		} catch (error) {}
		if (header && ["agastya", "shravan", "valmiki"].includes(this.type)) {
			header.classList.add("smaller");
			if (document.querySelector("main > header")) {
				document.querySelector("main > header").classList.add("smaller");
			}
		}
	}
};
</script>


<style scoped lang="scss">
.navigation {
	background-color: #e9edf1;
	margin-top: -2.5rem;
	margin-bottom: 4rem;
	img {
		height: 2rem;
		vertical-align: middle;
		margin-right: 0.75rem;
		margin-top: -0.1rem;
		float: left;
	}
	+ .navigation {
		margin-top: -4rem;
	}
	a.nav-link {
		color: #32325d;
		padding: 1rem;
		&.nuxt-link-exact-active {
			font-weight: bold;
		}
	}
	&.big {
		background-color: transparent;
		a.nav-link {
			padding: 1.5rem 1rem;
			&:hover {
				opacity: 0.5;
			}
		}
	}
	h1 {
		color: #414d5b;
		display: inline;
		font-size: inherit;
	}
	.logo:hover {
		text-decoration: none;
	}
}
</style>
