FROM node:14.17.5-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g  && \
    npm install 
COPY . .
RUN npm run build


FROM nginx:1.21-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/phase4-project /usr/share/nginx/html/