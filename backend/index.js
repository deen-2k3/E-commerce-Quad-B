const express = require("express");



const authrouter=require("./routes/auth.route.js");
const productRouter=require("./routes/products.route.js");

const app = express();

const database = require("./config/database");

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cors());


//api calls
app.use("/api/v1/auth",authrouter);
app.use("/api/v1/product",productRouter);


app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});


app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
