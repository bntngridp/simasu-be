#!/bin/bash

mkdir -p /data/uploads

rm -rf /app/uploads
ln -s /data/uploads /app/uploads

if [ ! -f /data/simasu.db ]; then
    touch /data/simasu.db
fi

rm -f /app/simasu.db
ln -s /data/simasu.db /app/simasu.db

echo "Menjalankan server..."
node server.js