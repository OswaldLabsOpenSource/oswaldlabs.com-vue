<template>
	<main>
		<header class="bg-light-1">
			<smallnav type="shravan" class="big" />
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div>
							SHrAVAN
						</div>
					</div>
					<div class="col-md-6">
						IAG
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				container
			</div>
		</section>
	</main>
</template>

<script>
import cta from "@/components/cta.vue";
import smallnav from "@/components/smallnav.vue";
export default {
	components: {
		cta,
		smallnav
	}
};
</script>