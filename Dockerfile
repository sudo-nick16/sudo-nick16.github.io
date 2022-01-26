# building image
FROM node:alpine as builder
WORKDIR /sudonick
COPY ["package.json", "yarn.lock", "./"]

COPY ./packages/common/package.json ./packages/common/
COPY ./packages/server/package.json ./packages/server/

RUN yarn install

COPY ./packages/common/ ./packages/common/
COPY ./packages/server/ ./packages/server/
COPY ./packages/server/.env.example ./packages/server/

RUN yarn common:build && yarn server:build

#  stage
FROM node:alpine as prod

WORKDIR /sudonick

COPY ["package.json", "yarn.lock", "./"]

COPY ./packages/common/package.json ./packages/common/
COPY ./packages/server/package.json ./packages/server/

RUN yarn install --production

COPY --from=builder sudonick/packages/common/dist ./packages/common/dist/
COPY --from=builder sudonick/packages/server/dist ./packages/server/dist/
COPY --from=builder sudonick/packages/server/.env.example ./packages/server/

CMD ["yarn","server:start"]

