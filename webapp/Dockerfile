FROM node:16.4.2-stretch-slim AS build

WORKDIR /dest

# Copy package.json and package-lock.json
COPY ./package* .

# Install packages
RUN npm install

# Copy source code
COPY . .

# RUN npm run test
RUN npm run build

# Copy build to caddy server
FROM caddy:2.4.3-alpine

# Debug Tool
# RUN apk --no-cache add curl

COPY --from=build /dest/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /dest/build /usr/share/caddy