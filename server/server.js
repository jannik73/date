require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const db = require("./db");
const path = require("path");
const cors = require("cors");

const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.static(path.resolve(__dirname, '../client/src')));

app
  .route("/api/v1/persons")
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

//app
//  .route("/api/v1/persons/:id")
//  .get(async (req, res, next) => {
//    try {
//      const { id } = req.params;
//
//      const results = await db.query(
//        "select * from restaurants LEFT JOIN (SELECT restaurant_id, count(*), trunc(AVG(rating)) AS average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1",
//        [id]
//      );
//      const reviews = await db.query(
//        "SELECT * FROM reviews WHERE restaurant_id = $1",
//        [id]
//      );
//      res.status(200).json({
//        status: "success",
//        data: {
//          restaurant: results.rows[0],
//          reviews: reviews.rows,
//        },
//      });
//    } catch (error) {
//      console.log(error);
//    }
//  })
//  .put(async (req, res, next) => {
//    const { id } = req.params;
//    const { name, location, price_range } = req.body;
//    try {
//      const results = await db.query(
//        "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *",
//        [name, location, price_range, id]
//      );
//      res.status(200).json({
//        status: "success",
//        data: results.rows[0],
//      });
//    } catch (error) {
//      console.log(error);
//    }
//  })
//  .delete(async (req, res, next) => {
//    try {
//      const { id } = req.params;
//      const results = await db.query(
//        "DELETE FROM restaurants WHERE id = $1 returning id",
//        [id]
//      );
//      res.status(201).json({
//        status: "success",
//        data: results.rows[0],
//      });
//    } catch (error) {
//      console.log(error);
//    }
//  });

  app.post("/api/v1/persons/add", async (req, res) => {
    const { date, firstname, age, relationship, city, dreamdate, interest, song, contact  } = req.body[0];
    //const { id } = req.params;
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
      res.send(error);
      console.log(error);
    }
  });

  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => console.log("Magic happening on PORT", +PORT));
