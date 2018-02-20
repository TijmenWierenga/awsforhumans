FROM node:alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV NODE_ENV=dev

RUN deluser --remove-home node \
    && addgroup -S node && adduser -u 501 -S -G node node
RUN apk update && apk add yarn

CMD ["npm", "run", "dev"]