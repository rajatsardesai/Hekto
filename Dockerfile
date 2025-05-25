FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY /backend ./backend

EXPOSE 3500

CMD ["node","backend/server.js"]