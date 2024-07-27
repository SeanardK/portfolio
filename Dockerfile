FROM node:22

WORKDIR /app

copy . /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npx", "next", "start"]