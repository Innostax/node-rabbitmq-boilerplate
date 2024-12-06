FROM node

WORKDIR /app/database

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT ["npx","knex","migrate:latest"]