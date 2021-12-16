const { Router } = require('express')
const config = require('config')
const Project = require('../models/Project')
const auth = require('../middleware/auth.middleware')
const { isValidObjectId } = require('mongoose')


const router = Router()

router.post('/saveProject', async  (req, res) => {
    try{
        const userID = req.body.user

        const projectID = req.body.projectName

        const project = req.body.project

        console.log(userID)

        console.log(projectID)

        console.log(project)

        // lfileName = user + ".json"
        // proj = JSON.stringify(project)
        // fs.writeFile(lfileName, )

        const prog = new Project({ 
            projectName : projectID,
            project : project,
            user: user
         })

        await prog.save()
        
    }catch(eror){
        console.log(eror)
    }
})

module.exports = router