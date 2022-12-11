const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postACurriculum = new schema({
    Name: { type: String, requied: true },
    Area: { type: String, requied: true },
    Institution: { type: String, requied: true },
    Category: { type: String, requied: true },
    Hours: { type: String, requied: true },
    References: { type: String, requied: true },
    Comments: { type: String, requied: true },
    File: { type: String, requied: true },

});
let CurriculumDATA = mongoose.model("newCurriculum", postACurriculum);
module.exports = CurriculumDATA;
