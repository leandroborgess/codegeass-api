const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/", async (req, res) => {
  const episode = await controller.newEpisode(req.body);
  // if (episode.status !== 200) {
  //   res.status(episode.status).send("erro");
  // } else {
  //   res.send("ok");
  // }
});

module.exports = router;
