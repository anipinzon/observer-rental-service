
FROM node:14-alpine as builder
RUN mkdir app/
WORKDIR /app
COPY node_modules /app/node_modules/
COPY dist /app/dist
COPY package.json /app/package.json

FROM node:14-alpine as app
LABEL maintainer="Cristian Sanchez"
COPY --from=builder app/ .
CMD ["node","dist/index.js"]
USER node