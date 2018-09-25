import axios from "axios";
import markdown from "markdown-it";
const md = new markdown({
	html: true,
	typographer: true
});

export default file => {
	return axios.get(`http://localhost:3000/data/${file}.json`).then(res => {
		scan(res.data);
		return { data: res.data };
	});
};

const scan = (obj, parent, index) => {
	var k;
	if (obj instanceof Object) {
		for (k in obj) {
			if (obj.hasOwnProperty(k)) scan(obj[k], obj, k);
		}
	} else if (parent && index && parent[index] && typeof parent[index] === "string") {
		if (parent[index].includes("\n")) {
			parent[index] = md.render(parent[index]);
		} else {
			parent[index] = md.renderInline(parent[index]);
		}
	}
};
