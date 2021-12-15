const { Router } = require('express')
const fileMiddeware = require('../middleware/file')

const router = Router()

router.post('/upload', fileMiddeware.single('fileName'), (req, res) => {
    try{
        if(req.file){
            res.json(req.file)
        }
    }catch(console){
        console.log(eror)
    }
})

module.exports = router