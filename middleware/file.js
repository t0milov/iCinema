const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, res, cb){
        cb(null, 'public/')
    },
    filename(req, file, cb){
        cb(null, req.params.videoId+'.mp4')
    }
})

const types = ['image/png', 'image/jpeg', 'image/jpg', 'video/mp4']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)){
        cb(null, true)
    } else{
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})
