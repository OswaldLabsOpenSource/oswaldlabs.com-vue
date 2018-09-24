<template>
	<main>
		<header class="bg-light-1">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h1>{{data.header.title}}</h1>
						<p style="max-width: 500px" class="mt-4 mb-4">{{data.header.intro}}</p>
						<cta :context="data.header" />
					</div>
				</div>
			</div>
		</header>
		<section class="border-top">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h2>{{data.new.title}}</h2>
						<p style="max-width: 500px" class="mt-4 mb-4">{{data.new.intro}}</p>
						<cta :context="data.new" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import axios from "axios";
import cta from "../components/cta.vue";
export default {
	asyncData ({ params }) {
		return axios.get(`http://localhost:3000/data/index.json`)
		.then(res => {
			return { data: res.data }
		})
	},
	components: {
		cta
	}
}
</script>
