FROM node

WORKDIR /app/application

COPY package.json .

RUN npm install

RUN npm knex migrate:latest

COPY . .

EXPOSE 8001

CMD ["npm", "start"]