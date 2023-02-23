require("dotenv").config();
const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const rootRouter = require("./router/rootRouter");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const publictPathDirectory = path.join(__dirname, "./public");
app.use(express.static(publictPathDirectory));

const port = process.env.PORT || 3000

//router
app.use("/api/v1",rootRouter)

app.listen(port,async()=>{
    console.log(`Example app listening at http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
});
//setup sequelize
// sequelize.sync({ alter: true });