<template>
	<div class="bc" v-if="$route.path.split('/').length > 2">
		<div class="container">
			<nav class="nav flex-row">
				<span class="nav-link">You are here</span>
				<router-link v-for="(item, index) in items" :key="index" :to="item.href" class="nav-link">{{item.title}}</router-link>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			items: []
		}
	},
	mounted() {
		const titleify = text => (text.charAt(0).toUpperCase() + text.slice(1).replace(/-/g, " "));
		const items = this.$route.path.split("/");
		for (let i = 0; i < items.length; i++) {
			items[i] = {
				title: titleify(items[i]) || "Home",
				href: items[i] ? (this.$route.path.split(items[i])[0] + items[i]) : "/"
			};
		}
		this.items = items;
	}
}
</script>


<style lang="scss">
.bc {
	padding-top: 2rem;
	background-color: #f6f9fc;
	span {
		font-weight: 500;
		margin-right: 0.5rem;
		opacity: 0.75;
	}
	.nav-link:first-child {
		padding-left: 0;
	}
	.nav-link {
		padding: 0 0.35rem;
		&.nuxt-link-exact-active {
			color: inherit;
			pointer-events: none;
		}
	}
	a + a::before {
		color: inherit;
		color: #4b5f79;
		pointer-events: none;
		opacity: 0.75;
		content: "→";
		margin-right: 0.7rem;
	}
}
</style>
