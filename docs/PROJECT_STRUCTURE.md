# Project Structure

## Top-level flow

- `server.js` boots Express, Swagger, routes, static uploads, database sync, and seeding.
- `config/` contains Sequelize database setup and Swagger wiring.
- `controllers/` contains request handler logic per domain.
- `routes/` maps HTTP endpoints to controllers.
- `models/` contains Sequelize models and associations.
- `middleware/` contains authentication and cache-control helpers.
- `utils/` contains helper functions including the startup seeder.

## Important implementation notes

- SQLite storage is currently local-file based via `simasu.db`.
- Startup calls `sequelize.sync()` automatically.
- `utils/seeder.js` ensures a demo admin exists on first run.
- Swagger is mounted directly from application code instead of a separate docs service.
