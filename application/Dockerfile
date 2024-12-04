FROM node

WORKDIR /app/application

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]