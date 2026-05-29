const multer = require('multer')
const upload = multer({dest: "./upload"})

const uploadFiles = upload.fields([{name: "imagev", maxCount: 1}, {name: "imageh", maxCount: 1}])

module.exports = {
    uploadFiles    
}