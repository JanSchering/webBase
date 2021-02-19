FROM node:lts-alpine

ARG NPM_REPO_URL
ENV PORT 10726

# Step 1 - Generate server for deployment
WORKDIR /usr/src/skeleton/

COPY src/ src
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY app.tsx .
COPY server.ts .
COPY img.d.ts .
COPY webpack.config.js .
COPY dist/ ./dist/

RUN npm config set registry $NPM_REPO_URL
RUN npm ci
RUN npm install -g typescript

RUN npm run build

RUN tsc

EXPOSE $PORT


# Step 3 - Generate environment config

RUN mkdir ./scripts
RUN mkdir ./scripts/docker

RUN ls

RUN ls ./dist/

COPY scripts/docker/docker-entrypoint.sh ./scripts/docker
RUN chmod +x ./scripts/docker/docker-entrypoint.sh

ENTRYPOINT ["./scripts/docker/docker-entrypoint.sh"]