require("dotenv").config();

module.exports = {
  secret: process.env.SECRET,
  ROLEs: ["USER", "DRIVER", "ADMIN"],
};
