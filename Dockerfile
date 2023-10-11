FROM node:18-alpine

RUN apk update
RUN apk add bash git nginx
RUN yarn global add pm2

WORKDIR /app

# Public URL must be known at build time, for Strapi to generate the admin panel
ARG PUBLIC_URL
ENV PUBLIC_URL $PUBLIC_URL
ENV NODE_ENV production

COPY strapi /app/strapi
RUN cd /app/strapi && yarn install && yarn build

COPY nuxtapp /app/nuxtapp
RUN cd /app/nuxtapp && yarn install && yarn build

EXPOSE 80
# EXPOSE 1337
# EXPOSE 3000

COPY dockercontainer/ecosystem.config.js /app/ecosystem.config.js
COPY dockercontainer/site.conf /etc/nginx/http.d/default.conf
COPY dockercontainer/docker-entrypoint.sh /app/docker-entrypoint.sh

CMD ["./docker-entrypoint.sh"]