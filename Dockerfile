FROM node:16

USER node

WORKDIR /app

ENV TZ=Asia/Tokyo

RUN ["yarn"]