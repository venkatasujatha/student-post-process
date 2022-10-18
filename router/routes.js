const router = require("express").Router();

const gradesController1 = require("../controller/gradesController");

router.post("/addgrade", gradesController1.add1);
router.post("/addCgpa", gradesController1.addCgpa)

module.exports = router;
