FROM node:22.16.0-slim

WORKDIR /app

COPY package.json ./

RUN npm install && npm install react-responsive-carousel

COPY . . 

EXPOSE 5173

CMD ["npm", "run", "dev"]
