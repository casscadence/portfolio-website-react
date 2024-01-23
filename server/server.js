const express = require('express');
const { createPool } = require('mysql');
const app = express();

const urlDB = `mysql://root:E-3A5333c6GghGAFhhh3g3d2c434Ab6C@viaduct.proxy.rlwy.net:35738/railway`;

(async () => {
    const pool = createPool({
      urlDB
    })
  
    const projectData = await new Promise((resolve) => {
      pool.query("select * from project", (err, res) => {
        resolve(res)
      })
    })

    app.get('/portfolio/:selectionId/:projectId', (req, res) => {
      for(let i=0; i<=projectData.length-1; i++) {
        if(projectData[i].project_title === req.params.projectId){
          res.json({ 
            title: projectData[i].project_title,
            date: projectData[i].project_date,
            desc: projectData[i].project_desc,
            type: projectData[i].project_type,
            tools: projectData[i].project_tools,
            contribution: projectData[i].project_contribution,
            number: i,
            length: projectData.length
          })
        }
      }
    })
    
})()

app.listen(5000, () => {console.log('Server started on port 5000')});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}