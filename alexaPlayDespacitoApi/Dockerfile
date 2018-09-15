FROM node:carbon
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 3000
CMD ["node", "node_modules/.bin/nodemon", "-L", "server.js"]