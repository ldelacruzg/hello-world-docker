FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn global add nodemon
RUN yarn install

COPY ../ ./

EXPOSE 3000

CMD [ "nodemon", "index.js" ]
