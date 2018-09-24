<template>
	<section class="container">
		TEAM Single {{users}}
	</section>
</template>

<script>
import axios from "axios";
export default {
	asyncData ({ params }) {
		return axios.get(`https://reqres.in/api/users?page=2`)
		.then(res => {
			return { users: res.data }
		})
	}
}
</script>
