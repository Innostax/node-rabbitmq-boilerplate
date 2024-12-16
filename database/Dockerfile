FROM node

WORKDIR /app/database

COPY package.json .

RUN npm install

COPY . .

CMD ["npx","knex","migrate:latest"]