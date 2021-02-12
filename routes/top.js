const router = require("express").Router();

router.get("/", (req, res) => {
    // index.ejsをレンダリング
    res.render("./top.ejs");
});

module.exports = router;