const express = require("express");

const emojis = require("./emojis");
const radioService = require("./radio-service");
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		message: "API - 👋🌎🌍🌏",
	});
});

// router.use("/emojis", emojis);
router.use("/radio-service", radioService);

module.exports = router;
