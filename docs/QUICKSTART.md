# Quick Start

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Configure

```bash
cp .env.example .env
```

Set at least:

```env
PORT=5001
JWT_SECRET_KEY=change-this-in-local-dev
```

## Run

```bash
npm start
```

## Access

- Swagger UI: `http://localhost:5001/docs`
- OpenAPI JSON: `http://localhost:5001/apispec_1.json`

## Seeded local admin

On first start, the project seeds a demo admin account:

- email: `admin@gmail.com`
- password: `admin123`

Change or remove this for any environment beyond local demo/testing.
