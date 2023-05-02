# Use the official Node.js 18 Alpine Linux image as the base image
FROM node:18-alpine

WORKDIR /app
RUN chown -R node:node /app

COPY *.js* ./
COPY .env ./
COPY yarn.lock ./

RUN yarn install

CMD ["yarn", "start:dev"]

EXPOSE 3000