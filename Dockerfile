# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy rest of the application
COPY . .

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
