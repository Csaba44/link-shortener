# Use Node.js as the base image
FROM node

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy all other files
COPY . .

# Expose the app on port 5000
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
