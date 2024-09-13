const express = require("express");

const authrouter = require("./routes/auth.route.js");
const productRouter = require("./routes/products.route.js");
const cartRouter=require('./routes/cart.route.js');
const app = express();
const cookieParser=require("cookie-parser");

const database = require("./config/database");
const fileUpload = require("express-fileupload");

const dotenv = require("dotenv");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary.js");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true, // To allow temporary file storage before processing
    tempFileDir: "/tmp/", // Temp file directory
  })
);
cloudinaryConnect();

//api calls
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter);


app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
