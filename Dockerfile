FROM node:7.6-alpine
WORKDIR /app
COPY . /app
RUN npm install
CMD npm run generate-data && npm run react-client && npm run server-client
EXPOSE 3663