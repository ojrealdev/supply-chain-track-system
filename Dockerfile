# Use the official lightweight Node.js 14 image.
FROM node:14

# Create app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm ci

# Copy local code to the container image.
COPY . .

# Build the application
RUN npm run build

# The application listens on port 3000.
EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "run", "start" ]
