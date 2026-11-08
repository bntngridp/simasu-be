require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");

const sequelize = require("./config/database");
const swaggerSpec = require("./config/swagger");
const seeder = require("./utils/seeder"); 
const { noCache } = require("./middleware/authMiddleware");

const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const roomRoutes = require("./routes/roomRoutes");
const eventRoutes = require("./routes/eventRoutes");
const announcementRoutes = require("./routes/announcementRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/announcements", announcementRoutes);

app.get("/apispec_1.json", noCache, (req, res) => res.json(swaggerSpec));
app.use("/docs", noCache, swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customSiteTitle: "SIMASU API" }));

const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || "0.0.0.0";

sequelize.sync().then(async () => {
  await seeder.runSeed();
  app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
    console.log(`Docs: http://${HOST}:${PORT}/docs`);
  });
}).catch((err) => {
  console.error("Gagal init DB:", err);
});
