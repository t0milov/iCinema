const express = require('express')
const fs = require('fs')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
// const cons = require('consolidate');
const Project = require('./models/Project')


const app = express()

app.use(express.json({ extended: true }))
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/api/auth', require('./routes/upload.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/auth', require('./routes/project.routes'))
app.get('/api/auth/getjson/:projectName', async function(req, res){
  const query = Project.findOne( { projectName : req.params.projectName} )
  query.select('projectName project user')
  query.exec(function (err, project) {
    if (err) return console.log(err);
    console.log(project);
    res.send(project)
  });
})
app.get('/video/:videoID', function(req, res) {
  const path = "./assets/" + req.params.videoID + ".mp4"
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

  if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1]
          ? parseInt(parts[1], 10)
          : fileSize-1

      if(start >= fileSize) {
          res.status(416).send('Недопустимый диапазон\n'+start+' >= '+fileSize);
          return
      }

      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
      }

      res.writeHead(206, head)
      file.pipe(res)
  } else {
      const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
  }
})



const PORT = config.get('port') || 5000

async function start() {
    try {
      await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
      console.log('Server Error', e.message)
      process.exit(1)
    }
  }
  
  start()
