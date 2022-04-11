FROM node:16 as base

USER node

WORKDIR /app

ENV TZ=Asia/Tokyo

COPY package.json yarn.lock ./

# For development
FROM base as dev

RUN yarn

RUN yarn prisma generate


# Build Layer
FROM base as builder

COPY . .

RUN yarn install --frozen-lockfile

RUN npx prisma generate

RUN yarn build


# Package Install Layer
FROM base as package

RUN yarn install --frozen-lockfile --prod


# Run Layer
FROM node:16-slim as runner

WORKDIR /app

ENV NODE_ENV=production

RUN apt-get -qy update
RUN apt-get -qy install openssl

# COPY package.json yarn.lock ./

COPY --from=builder /app/dist ./dist
COPY --from=package /app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

CMD node dist/main