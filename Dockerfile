FROM node:alpine

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src

RUN ls


