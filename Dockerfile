FROM --platform=arm64 node:18-alpine3.15 as frontend

COPY ./learn-languages-at-home-frontend/package.json /frontend/package.json
COPY ./learn-languages-at-home-frontend/package-lock.json /frontend/package-lock.json
COPY ./learn-languages-at-home-frontend /frontend

WORKDIR /frontend
RUN npm ci


FROM node:18-alpine3.15 as backend

COPY ./translation-server/package.json /backend/package.json
COPY ./translation-server/package-lock.json /backend/package-lock.json
COPY ./translation-server /backend

WORKDIR /backend
RUN npm ci
RUN npm i -g concurrently nodemon