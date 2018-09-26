const pkg = require("./package");

module.exports = {
	mode: "universal",

	router: {
		scrollBehavior: (to, from, savedPosition) => {
			return { x: 0, y: 0 };
		}
	},

	/*
  ** Headers of the page
  */
	head: {
		title: "Oswald Labs",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: pkg.description }
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: "#FFFFFF" },

	/*
  ** Global CSS
  */
	css: [],

	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],

	/*
  ** Nuxt.js modules
  */
	modules: [
		,
		// Doc: https://bootstrap-vue.js.org/docs/
		"bootstrap-vue/nuxt",
		"@nuxtjs/axios"
	],

	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
