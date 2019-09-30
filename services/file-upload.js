//6:58 copied from multer-s3 at npmjs.com and continues to edit code

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
 
aws.config.update({
    secretAccessKey:"AKIAIGKPM5Z5G7VAO5AQ",
    accessKeyId:"b2TMJHJBpyrMGy9gfsgjQANf0cSdNwUrMZgTR17K",
    region: "us-east-1"
})

//create S3 instance
const s3 = new aws.S3();

//25:20
//makes sure the user uploaded a jpeg or png and nothing else
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
}
 
//create upload object from multer
const upload = multer({
    fileFilter,
    storage: multerS3({
    s3: s3,
    bucket: 'styl-project',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;