FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

# Ejecutar pruebas
# RUN yarn test

# Elimina los archivos de pruebas y los modulos de desarrollo
RUN rm -rf node_modules && rm -rf tests

# Instala los modulos de produccion
RUN yarn install --production

CMD [ "node", "index.js" ]
