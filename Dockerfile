# ---- Base Node ----
FROM node:16-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build
COPY . ./

# ---- Release ----
FROM node:16-alpine AS release
WORKDIR /app
COPY --from=build /app ./
RUN npm install --only=production

# Default command, run the server in development mode
CMD ["npm", "run", "dev"]



# DOCKER PROD DEPLOYMENT - OPTIMIZED
# # ---- Base Node ----
# FROM node:16-alpine AS base
# WORKDIR /app
# COPY package*.json ./

# # ---- Dependencies ----
# FROM base AS dependencies
# RUN npm install

# # ---- Copy Files/Build ----
# FROM dependencies AS build
# COPY . ./
# RUN npm run build

# # ---- Release ----
# FROM node:16-alpine AS release
# WORKDIR /app
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/package*.json ./
# RUN npm install --only=production

# # Default command, run the server in production mode
# CMD ["npm", "start"]
