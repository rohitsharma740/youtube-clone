# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json first (if package-lock.json doesn't exist, ignore it)
COPY package.json ./
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
