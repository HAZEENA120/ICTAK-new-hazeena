const express = require("express");
const router = express.Router();

const apprDATA = require("../..//models/admin/approvePost.js");
const apprdDATA = require("../..//models/admin/approvedPost.js");
const {upload} =require('../middlewares/upload')

//enter your code here 



// fetch single data (get)
router.get('/getsingle/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const singledata = await apprDATA.findById(id);
        console.log(`from get with id method ${singledata}`);
        res.send(singledata)
    } catch (error) {
        console.log(`error from get sing method ${error}`);
    }

});



router.get('/getall', async (req, res) => {

    try {
        let list = await apprDATA.find();

        console.log(`from get method ${list}`);
        res.send(list);
    }
    catch (error) {
        console.log(`error from getall method ${error}`);

    }

});

router.post('/posted' , async (req, res) => {

    try {
        let item = {

            File: req.body.File,
            Comments: req.body.Comments,
            Category: req.body.Category,
            Hours: req.body.Hours,
            References: req.body.References,
            Institution: req.body.Institution,
            Area: req.body.Area,
            Name: req.body.Name,
            
        }
        const newdata = new apprdDATA(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from posted method ${error}`);
    }

});


router.put('/update' , async (req, res) => {

    try { 
        let id = req.body._id;
        console.log(`from put method id data ${ req.body._id}`);
        let item = {

            Category: req.body.data.Category,
            Hours: req.body.data.Hours,
            Institution: req.body.data.Institution,
            Area: req.body.data.Area,
            Name: req.body.data.Name
            
        }
        let updatedata = await apprDATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        console.log(`from put method old data ${updatedata}`);
        

        res.send(updatedata);

    } catch (error) {
        console.log(`error from put method ${error}`);
    }

});


router.post('/post' , async (req, res) => {

    try {
        let item = {

            File: req.body.File,
            Comments: req.body.Comments,
            Category: req.body.Category,
            Hours: req.body.Hours,
            References: req.body.References,
            Institution: req.body.Institution,
            Area: req.body.Area,
            Name: req.body.Name,
            
        }
        const newdata = new apprDATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${item}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from post method ${error}`);
    }

});

router.delete('/delete/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await apprDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deletedata}`);
        res.send(deletedata);

    } catch (error) {
        console.log(`error from del method ${error}`);
    }

});










module.exports = router;