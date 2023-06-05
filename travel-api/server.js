require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./app/models");
const auth = require("./app/router/authRoute");
const user = require("./app/router/userRoute");
const bus = require("./app/router/busRoute");
const route = require("./app/router/routeRoute");
const schedul = require("./app/router/scheduleRoute");
const booking = require("./app/router/bookingRoute");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["*"],
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(user);
app.use(auth);
app.use(bus);
app.use(route);
app.use(schedul);
app.use(booking);

const port = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
