//13:00 created image-upload.js
//16:45 changed name to file-upload.js

const express = require("express");
const router = express.Router();

const upload = require('../services/file-upload');

const singleUpload = upload.single('image');


router.post('/image-upload', function(req,res){

    singleUpload(req,res, function(err) {


        //31:50 added error handling
        if (err){
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
        }

        return res.json({'imageUrl': req.file.location});
    });
});


module.exports = router;