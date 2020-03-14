# Build Image
FROM node:12.16.1-slim AS builder

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN yarn install
RUN yarn prod

# Runtime Image
FROM node:12.16.1-slim
LABEL maintainer="lanark<dfg1499@gmail.com>"
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./

EXPOSE 3030
CMD ["yarn", "server"]
