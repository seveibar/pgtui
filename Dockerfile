FROM node:14-bullseye
RUN apt-get update && apt-get install dumb-init python3 python iproute2 postgresql-client -y

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install
COPY . .
RUN yarn build

ENV RUNNING_IN_DOCKER "yes"

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["node", "/app/dist/cli.js"]