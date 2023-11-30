const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.replace(/\.[^/.]+$/, "") + '_' + Date.now() + path.extname(file.originalname))
    }
});

const fileFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Only JPEG and PNG image files are allowed!'), false);
    }
    // limit file size to 20MB
    if (file.size > 20 * 1024 * 1024) {
        return cb(new Error('File size should not exceed 20MB!'), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload;
