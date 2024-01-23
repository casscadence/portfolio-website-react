const express = require('express');
const { createPool } = require('mysql');
const app = express();

(async () => {
    const pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      connectionLimit: 10
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
            id: projectData[i].project_id,
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

app.listen(process.env.DB_PORT, () => {console.log('Server started on port railway')});

/* if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} */