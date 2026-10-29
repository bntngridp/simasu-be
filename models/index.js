const sequelize = require("../config/database");
const User = require("./User");
const Inventory = require("./Inventory");
const Room = require("./Room");
const Booking = require("./Booking");
const Event = require("./Event");
const Announcement = require("./Announcement");

Booking.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Booking, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  User,
  Inventory,
  Room,
  Booking,
  Event,
  Announcement,
};