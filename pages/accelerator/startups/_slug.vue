<template>
	<main>
		<header class="bg-light-1 pb-0">
			<smallnav class="mb-0" type="accelerator" />
		</header>
		<section>
			<div class="container" v-for="(startup, index) in data.startups" :key="`startup_${index}`" v-if="startup.slug === $route.params.slug">
				<div class="row">
					<div class="col-md-5">
						<h2>
							<img alt="" :src="startup.data.icon || 'https://oswaldlabs.com/icons/android-chrome-192x192-3a35daa0.png'">
							{{startup.data.title}}
						</h2>
						<h3 class="subheading mt-4 mb-4" v-html="startup.data.subtitle" />
						<div class="team" v-for="(user, index) in startup.data.team" :key="index">
							<img class="avatar" alt="" :src="user.data.image">
							{{user.data.name}}
						</div>
						<p class="mt-5" v-html="startup.data.intro" />
						<div v-if="startup.data.url">
							<a :href="startup.data.url" class="btn btn-primary">Visit {{startup.data.domain}} &rarr;</a>
						</div>
					</div>
					<div class="col-md-7" v-if="startup.data.screenshot">
						<div class="card">
							<img alt="" :src="startup.data.screenshot" class="card-img-top">
							<div class="card-body">
								<p class="mb-0 small">{{startup.data.caption}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import axios from "axios";
import content from "@/components/content";
import cta from "@/components/cta.vue";
import smallnav from "@/components/smallnav.vue";
export default {
	asyncData({ params }) {
		return new Promise((resolve, reject) => {
			axios.get(`http://localhost:3000/data/accelerator/startups/index.json`).then(res => {
				const promises = [];
				const promises2 = [];
				for (let i = 0; i < res.data.startups.length; i++) {
					promises.push(
						new Promise((resolvePromise, rejectPromise) => {
							axios
								.get(
									`http://localhost:3000/data/accelerator/startups/${
										res.data.startups[i]
									}.json`
								)
								.then(profile => {
									res.data.startups[i] = {
										slug: res.data.startups[i],
										data: profile.data
									};
									for (let j = 0; j < profile.data.team.length; j++) {
										promises2.push(
											new Promise((resolvePromise2, rejectPromise2) => {
												axios
													.get(
														`http://localhost:3000/data/profiles/${
															profile.data.team[j]
														}.json`
													)
													.then(user => {
														res.data.startups[i].data.team[j] = {
															slug: res.data.startups[i].data.team[j],
															data: user.data
														};
														resolvePromise2();
													});
											})
										);
									}
									resolvePromise();
								});
						})
					);
				}
				Promise.all(promises).then(() => {
					Promise.all(promises2).then(() => {
						resolve({ data: res.data });
					});
				});
			});
		});
	},
	components: {
		cta,
		smallnav
	}
};
</script>

<style lang="scss" scoped>
main > header {
	padding-bottom: 5rem;
}
h2 img {
	height: 3rem;
	border-radius: 100%;
	vertical-align: middle;
	margin-top: -0.1rem;
	margin-right: 0.5rem;
}
.team {
	margin-bottom: 1rem;
}
.team img {
	height: 2.25rem;
	vertical-align: middle;
	margin-top: -2px;
	margin-right: 0.5rem;
	border-radius: 100%;
	border: 3px solid white;
	+ img {
		margin-left: -1.5rem;
	}
}
</style>
