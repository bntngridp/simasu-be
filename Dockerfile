FROM node:18-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN mkdir -p /data/uploads \
    && chown -R 1000:1000 /data \
    && chown -R 1000:1000 /app

COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

USER 1000

ENV PORT=7860
EXPOSE 7860

CMD ["./start.sh"]