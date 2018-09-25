<template>
	<section class="container">
		TEAM Single {{user.name}}
	</section>
</template>

<script>
import axios from "axios";
export default {
	asyncData({ params }) {
		return axios.get(`http://localhost:3000/data/team/anand.json`).then(res => {
			return { user: res.data };
		});
	}
};
</script>
