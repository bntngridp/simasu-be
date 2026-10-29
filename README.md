# APITubes

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Framework](https://img.shields.io/badge/Framework-Express-000000?logo=express&logoColor=white)
![Database](https://img.shields.io/badge/Database-SQLite-003B57?logo=sqlite&logoColor=white)
![Docs](https://img.shields.io/badge/API-Swagger-85EA2D?logo=swagger&logoColor=222)
![CI](https://img.shields.io/github/actions/workflow/status/IndraLawliet13/APITubes/ci.yml?branch=main&label=CI)
![License](https://img.shields.io/badge/License-ISC-blue.svg)

REST API backend for the **SIMASU** project, covering authentication, bookings, rooms, inventory, events, announcements, and Swagger-based API documentation.

This repository is positioned as a **public showcase / coursework-style backend API**. It keeps the real Express + Sequelize structure visible while excluding local runtime artifacts such as private environment values, SQLite state, and uploaded files.

## Highlights

- Express-based REST API backend with modular route/controller/model layout
- JWT authentication flow for protected API usage
- booking, room, inventory, event, and announcement modules
- Swagger UI docs exposed from the application
- SQLite persistence via Sequelize for simple local setup
- seed helper that creates an initial admin account for local demo use

## Tech stack

- Node.js 18+
- Express 5
- Sequelize 6
- SQLite 3
- JWT
- Swagger UI / swagger-jsdoc
- Multer
- CORS

## Route groups

Current route mounts from `server.js`:

- `/api` - authentication and user-related routes
- `/api/inventory` - inventory endpoints
- `/api/bookings` - booking endpoints
- `/api/rooms` - room endpoints
- `/api/events` - event endpoints
- `/api/announcements` - announcement endpoints
- `/uploads` - static file serving for uploaded assets
- `/docs` - Swagger UI
- `/apispec_1.json` - generated OpenAPI JSON

## Project structure

```text
APITubes/
├── config/          # Sequelize and Swagger configuration
├── controllers/     # Request handlers per module
├── middleware/      # Auth and response middleware
├── models/          # Sequelize models and index wiring
├── routes/          # Express route definitions
├── utils/           # Seeder and helper utilities
├── docs/            # Additional usage and structure notes
├── .env.example     # Public-safe environment template
├── server.js        # Application entrypoint
├── Dockerfile       # Container build path
└── start.sh         # Convenience startup script
```

## Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Prepare environment

```bash
cp .env.example .env
```

Example variables:

- `PORT=5001`
- `JWT_SECRET_KEY=change-this-in-local-dev`

### 3. Run the server

```bash
npm start
```

### 4. Open the docs

```text
http://localhost:5001/docs
http://localhost:5001/apispec_1.json
```

## Demo seed behavior

On first startup, the seeder creates a local demo admin account if it does not already exist:

- email: `admin@gmail.com`
- password: `admin123`

For any non-demo use, change this immediately and avoid exposing the app publicly without additional hardening.

## Documentation

- `docs/QUICKSTART.md`
- `docs/API_OVERVIEW.md`
- `docs/PROJECT_STRUCTURE.md`

## Public-safe packaging notes

This public repository intentionally excludes:

- private `.env` values
- local SQLite database files
- uploaded runtime files
- logs and deployment-only state

## Scope and limitations

- default storage is local SQLite via `simasu.db`
- database path is currently hardcoded in `config/database.js`
- `sequelize.sync()` and seeding run automatically during startup
- there is currently no automated test suite beyond install/syntax CI validation
- suitable for learning, demos, coursework, and small-scale API prototyping

## License

This repository is released under the ISC License. See `LICENSE`.
