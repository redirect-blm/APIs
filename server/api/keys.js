const dotenv = require('dotenv').config().parsed;
const router = require('express').Router();

const LINK_PREVIEW_KEY = dotenv ? dotenv.LINK_PREVIEW_KEY : process.env.LINK_PREVIEW_KEY

router.get("/linkPreview", (req, res) => {
    return LINK_PREVIEW_KEY ? res.status(200).send(LINK_PREVIEW_KEY) : res.status(404).send('LINK_PREVIEW_KEY Not Found')
});

module.exports = router;