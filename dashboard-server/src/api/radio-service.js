const express = require("express");
const radioApi = require("radio-browser-api");
const router = express.Router();
const fetch = require("node-fetch");

globalThis.fetch = fetch;

const api = new radioApi.RadioBrowserApi("Tesla Dashboard Simulator");

router.get("/:country?/:stationsearch?", async (req, res) => {
	try {
		const stations = await api.searchStations({
			countryCode: req.params.country || "us",
			limit: 200,
			codec: "mp3",
			name: req.params.stationsearch || "",
		});
		res.json(stations);
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;
