const mongoose = require("mongoose");
const schema = mongoose.Schema;

const approvedCurriculum = new schema({
    Name: { type: String, requied: true },
    Area: { type: String, requied: true },
    Institution: { type: String, requied: true },
    Category: { type: String, requied: true },
    Hours: { type: String, requied: true },
    References: { type: String, requied: true },
    Comments: { type: String, requied: true },
    File: { type: String, requied: true },



});
let apdDATA = mongoose.model("approvedCurriculumReq", approvedCurriculum);
module.exports = apdDATA;