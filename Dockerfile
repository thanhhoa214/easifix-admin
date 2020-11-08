# The builder from node image
FROM node:12-alpine as builder

# Move our files into directory name "app"
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build:prod

EXPOSE 8080

RUN npm start
