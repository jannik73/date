const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json()); // => allows us to access the req.body

// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static("./client/build")); => for demonstration

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}


//ROUTES//

//get all Todos

app
  .route("/persons")
  .get(async (req, res, next) => {
    try {
      // const results = await db.query("SELECT * FROM restaurants");
      const results = await db.query(
        "select * from dating"
      );
      res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: results.rows,
      });
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res, next) => {
    const { date, firstname, age, relationship, city, dreamdate, interest, song, contact  } = req.body;
    try {
      const results = await db.query(
        "INSERT INTO dating(date, firstname, age, relationship, city, dreamdate, interest, song, contact) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *",
        [ date, firstname, age, relationship, city, dreamdate, interest, song, contact ] 
      );
      res.status(200).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/add", async (req, res) => {
    const { date, firstname, age, relationship, city, dreamdate, interest, song, contact  } = req.body[0];
    
    //const { id } = req.params;
    try {
      console.log("TEST");
      const results = await db.query(
        "INSERT INTO dating(date, firstname, age, relationship, city, dreamdate, interest, song, contact) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
        [ date, firstname, age, relationship, city, dreamdate, interest, song, contact ] 
      );
      //res.json(results.rows[0]);
      res.status(200).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log("ERROR");
      res.send(error);
      console.log(error);
    }
  });
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
