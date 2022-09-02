FROM node:16.17.0-alpine AS base

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]

#dev
FROM base AS dev
RUN npm install
COPY . . 
CMD [ "sh", "-c", "npm run start:dev"]

#production
FROM base AS prod
RUN npm install --production
COPY . .
RUN npm install -g @nestjs/cli
RUN npm run build

EXPOSE 8000
CMD [ "sh", "-c", "npm run start:prod"]