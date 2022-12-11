
const express = require("express");
const CurriculumDATA = require("../models/admin/createNew.js");
const router = express.Router();



// for api calls

const approve = require("./admin/approvePostAPI.js");
router.use("/approve", approve);



const faculty = require("./faculty.js");
router.use("/faculty", faculty);



module.exports = router;