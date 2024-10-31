FROM node:18

WORKDIR /app

COPY . .

RUN npm install querystring

RUN npm init -y

EXPOSE 3000

CMD ["node", "front.js"]
