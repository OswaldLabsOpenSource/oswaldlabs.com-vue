const pkg = require("./package");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

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
		htmlAttrs: {
			lang: "en"
		},
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
	plugins: [
		// new PurgeCssPlugin({
		// paths: glob.sync([path.join(__dirname, "./pages/**/*.vue")]),
		// whitelist: ["html", "body"]
		// })
	],

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
