# API Overview

## Main route groups

- `POST /api/register`
- `POST /api/login`
- `/api/inventory`
- `/api/bookings`
- `/api/rooms`
- `/api/events`
- `/api/announcements`

## Documentation endpoints

- `GET /docs` for Swagger UI
- `GET /apispec_1.json` for the generated OpenAPI spec

## Notes

- JWT is used for authenticated flows.
- Uploaded files are served from `/uploads`.
- The exact request and response schemas should be checked from the bundled Swagger docs because they are the closest source of truth for this public snapshot.
