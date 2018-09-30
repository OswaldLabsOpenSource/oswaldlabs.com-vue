<template>
	<main>
		<header class="bg-light-1 pb-0">
			<smallnav class="mb-0" type="accelerator" />
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h2>{{data.header.title}}</h2>
						<div style="max-width: 500px" class="mt-4 mb-4" v-html="data.header.intro" />
					</div>
				</div>
				<div class="row mt-5">
					<div class="col-md-4" v-for="(startup, index) in data.startups" :key="`startup_${index}`">
						<div class="card card-body">
							<h5 class="card-title subheading">
								<img alt="" :src="startup.data.icon || 'https://oswaldlabs.com/icons/android-chrome-192x192-3a35daa0.png'">
								<span>{{startup.data.title}}</span>
							</h5>
							<p class="card-text">{{startup.data.subtitle}}</p>
							<div class="team">
								<div>
									<img v-for="(profile, index) in startup.data.team" :key="`profile_${index}`" alt="" :src="profile.data.image">
									<span v-if="startup.data.team.length === 2">
										{{startup.data.team[0].data.name.split(" ")[0]}} &amp;
										{{startup.data.team[1].data.name.split(" ")[0]}}
									</span>
									<span v-else-if="startup.data.team.length === 1">
										{{startup.data.team[0].data.name}}
									</span>
									<span v-else>{{startup.data.team.length}} founders</span>
								</div>
							</div>
							<div class="text-muted"><i class="fas fa-map-marker mr-2"></i>{{startup.data.city}}, {{startup.data.country}}</div>
							<div class="mt-3">
								<nuxt-link :to="`/accelerator/startups/${startup.slug}`" class="card-link">Learn more &rarr;</nuxt-link>
								<a v-if="startup.data.url" :href="startup.data.url" class="card-link">Visit {{startup.data.domain}} &rarr;</a>
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
.card-title {
	margin-bottom: 1rem;
}
.card-title img {
	height: 2rem;
	vertical-align: middle;
	margin-top: -0.1rem;
	border-radius: 100%;
	margin-right: 0.5rem;
}
.card {
	margin-bottom: 2rem;
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
