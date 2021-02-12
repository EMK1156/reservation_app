const router = require("express").Router();

router.get("/", (req, res) => {
    // index.ejsをレンダリング
    res.render("./reservationContents.ejs");
});

module.exports = router;