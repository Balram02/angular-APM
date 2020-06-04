FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --prod --output-path=./dist/output


FROM nginx
EXPOSE 80
COPY --from=builder /app/dist/output /usr/share/nginx/html
