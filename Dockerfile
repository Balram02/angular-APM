FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --prod


FROM nginx
EXPOSE 80
COPY --from=0 /app/dist/APM/ /usr/share/nginx/html
