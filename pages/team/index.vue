<template>
	<main>
		<header class="bg-light-1">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h1>{{data.header.title}}</h1>
						<p style="max-width: 500px" class="mt-4 mb-4">{{data.header.intro}}</p>
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<dl class="row m-0">
					<nuxt-link :to="`/team/${person.slug}`" v-for="(person, index) in data.people" :key="`person_${index}`" class="col-6 col-md-3 text-center">
						<dt>{{person.data.name}}</dt>
						<dd>{{person.data.position}}</dd>
					</nuxt-link>
				</dl>
			</div>
		</section>
	</main>
</template>

<script>
import axios from "axios";
export default {
	asyncData ({ params }) {
		return new Promise((resolve, reject) => {
			axios.get(`http://localhost:3000/data/team/index.json`)
			.then(res => {
				const promises = [];
				for (let i = 0; i < res.data.people.length; i++) {
					promises.push(new Promise((resolvePromise, rejectPromise) => {
						axios.get(`http://localhost:3000/data/team/${res.data.people[i]}.json`).then(profile => {
							res.data.people[i] = {
								slug: res.data.people[i],
								data: profile.data
							};
							resolvePromise();
						});
					}));
				}
				Promise.all(promises)
					.then(() => {
						resolve({ data: res.data })
					})
			})
		})
	}
}
</script>