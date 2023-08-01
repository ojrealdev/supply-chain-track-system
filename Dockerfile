# ---- Base Node ----
FROM node:16-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm ci

# ---- Copy Files/Build ----
FROM dependencies AS build
COPY . ./
RUN npm run build

# ---- Release ----
FROM node:16-alpine AS release
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/package*.json ./
RUN npm ci --only=production

# Default command, run the server in production mode
CMD ["npm", "start"]
