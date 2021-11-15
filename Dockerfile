FROM node:14-bullseye
RUN apt-get update && apt-get install dumb-init python3 python iproute2 postgresql-client -y
RUN useradd -ms /bin/bash pgtui

USER pgtui
WORKDIR /app

COPY --chown=pgtui package.json yarn.lock /app/
RUN yarn install
COPY  --chown=pgtui . .
RUN yarn build

ENV RUNNING_IN_DOCKER "yes"

ENTRYPOINT ["/usr/bin/dumb-init", "--", "node", "/app/dist/cli.js"]