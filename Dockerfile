FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install
# replace this with your application's default port
EXPOSE 3000
